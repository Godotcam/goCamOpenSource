(function () {

	// define the dom elements we use in the demo
	var openVerificationIframeButton = document.querySelector('#openVerificationIframeButton');
	var ageVerificationLogsArea      = document.querySelector('#ageVerificationLogsArea');
	var ageVerificationUrlInput      = document.querySelector('#ageVerificationUrlInput');

	// define the iframe verification url generated with the php library above
	var iframeUrl = ageVerificationUrlInput.value;

	// initialize the js sdk config
	AvsJsSdk.V1.Config.create({
		iframeLocationUrl: iframeUrl
	});

	// create a js sdk library instance
	var avsInstance = new AvsJsSdk.V1.Core();

	// initialize the js sdk library
	avsInstance.init();

	// handle the iframe messages
	avsInstance.onMessage = function (eventMessage) {

		switch (eventMessage.name) {

			// check phase: iframe was loaded
			case AvsJsSdk.V1.Config.EVENT_ON_CHECK_IFRAME_LOADED:

				appendToLog('Iframe content was loaded');

				// send an event to the iframe for starting the verification process check phase
				avsInstance.emit(AvsJsSdk.V1.Config.EVENT_STATUS_REQUEST);

				break;

			// check phase: age verification was successful on a previous verification process, user is already verified
			case AvsJsSdk.V1.Config.EVENT_ON_INITIAL_VERIFICATION_SUCCESS:

				appendToLog('Verification already completed, delete the "isAgeVerified" cookie to retry');

				payloadIntegrityCheck(eventMessage.data.payload, function (data) {

					if (data.error) {
						appendToLog(data.error.msg);
						return;
					}

					appendToLog('Cookie payload integrity check success, verification session id: ' + data.sessionId);

				});

				break;

			// check phase: age verification was not successful on a previous verification process or did not run at all
			case AvsJsSdk.V1.Config.EVENT_ON_INITIAL_VERIFICATION_NOT_FOUND:

				// check phase failed, proceed to the verification phase, send an event to start the verification phase resource preload
				avsInstance.emit(AvsJsSdk.V1.Config.EVENT_RESOURCE_PRELOAD);

				appendToLog('Previous verification was not found, initializing the verification phase');

				break;

			// verification phase: verification fatal error, payload was incorrect or resource load failed
			case AvsJsSdk.V1.Config.EVENT_ON_INITIAL_VERIFICATION_FATAL_ERROR:

				appendToLog('Verification fatal error: ' + JSON.stringify(eventMessage.data));

				// TODO: restart the verification process

				break;

			// verification phase: iframe was loaded (resources are still loading)
			case AvsJsSdk.V1.Config.EVENT_ON_START_PAGE_LOADED:

				appendToLog('Resources started loading');

				break;

			// verification phase: iframe resources were loaded
			case AvsJsSdk.V1.Config.EVENT_ON_RESOURCES_LOADED:

				appendToLog('Resources loaded, verification is ready!');

				// enable the "start verification" button
				openVerificationIframeButton.disabled = false;

				// attach an click event to the "start verification" button
				openVerificationIframeButton.addEventListener('click', function () {
					// show the verification iframe as an overlay
					avsInstance.iframeInstance.expand();
				});

				break;

			// verification phase: iframe overlay close button was clicked
			case AvsJsSdk.V1.Config.EVENT_ON_CLOSE_IFRAME:

				// hide the verification iframe overlay (it's still running in the background)
				avsInstance.iframeInstance.collapse();

				appendToLog('Verification iframe closed');

				break;

			// verification phase: verification process was successful
			case AvsJsSdk.V1.Config.EVENT_ON_VERIFICATION_SUCCESS:

				appendToLog('Verification completed successfully');

				// disable the "start verification" button
				openVerificationIframeButton.disabled = true;

				payloadIntegrityCheck(eventMessage.data.payload, function (data) {

					if (data.error) {
						appendToLog(data.error.msg);
						return;
					}

					appendToLog('Cookie payload integrity check success, verification session id: ' + data.sessionId);

				});

				break;

			// verification phase: verification process failed
			case AvsJsSdk.V1.Config.EVENT_ON_VERIFICATION_ERROR:

				appendToLog('Verification completed with error');

				break;

			default:

			// appendToLog('Unhandled event received: ' + eventMessage.name);

		}

	};

	// helper function for the iframe event logs
	var appendToLog = function (message) {
		ageVerificationLogsArea.append(message + "\n");
		ageVerificationLogsArea.scrollTop = ageVerificationLogsArea.scrollHeight;
	}

	// helper function for the payload integrity check
	var payloadIntegrityCheck = function (verificationResultPayload, callback) {

		postAjax(
			'/iframe/payloadIntegrityCheck',
			{
				verificationResultPayload: verificationResultPayload
			},
			function (data) {
				callback(JSON.parse(data));
			}
		);

	}

	// helper function for ajax request
	function postAjax(url, data, success) {
		var params = typeof data == 'string' ? data : Object.keys(data).map(
			function (k) {
				return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
			}
		).join('&');

		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		xhr.open('POST', url);
		xhr.onreadystatechange = function () {
			if (xhr.readyState > 3 && xhr.status == 200) {
				success(xhr.responseText);
			}
		};
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(params);
		return xhr;
	}

})();
