<?php

// include the php library
require_once 'lib/AvsPhpSdkV1.php';

$cipherKey = 'zIkmW2zEgzlTLTRC5xeMbcOhHcE5sBHB';

// create a new verification library instance
$avsInstance = new AvsPhpSdkV1($cipherKey);

// provide required user id (if any)
$demoUserId = 0;

// optional: provide the color config for your implementation
$colorConfigBodyBackground      = '#ffffff';
$colorConfigBodyForeground      = '#000000';
$colorConfigButtonBackground    = '#9acd1f';
$colorConfigButtonForeground    = '#ffffff';
$colorConfigButtonForegroundCTA = '#ffffff';

// provide required user agent
$userAgent = $_SERVER['HTTP_USER_AGENT'];

// provide required website hostname
$websiteHostname = $_SERVER['SERVER_NAME'];

// optional: should the detection process show the detected face or document age in the process or not, boolean
$showDetectedAgeNumber = true;

// provide the required link back, the user will be taken back to this page after the detection process is finisher with success
$linkBack    = 'http://localhost:8000';
$callbackUrl = 'http://localhost:3300/callback';

// provide required user ip
$userIp = $_SERVER['REMOTE_ADDR'];

// optional: provide the user country code
$countryCode = '';
// optional: provide the user state code
$stateCode = '';

// use all the provided data above to create a request object
$avsInstance->fillRequest(
	array(
		'userData'            => array(
			'userId'      => $demoUserId,
			// optional
			'colorConfig' => array(
				'body' => array(
					'background' => $colorConfigBodyBackground,
					'foreground' => $colorConfigBodyForeground,
					'button'     => array(
						'background'             => $colorConfigButtonBackground,
						'foreground'             => $colorConfigButtonForeground,
						'foregroundCallToAction' => $colorConfigButtonForegroundCTA,
					)
				),
			)
		),
		'httpParamList'       => array(
			'userAgent'       => $userAgent,
			'websiteHostname' => $websiteHostname,
			'paramList'       => array(
				// optional
				'showDetectedAgeNumber' => $showDetectedAgeNumber,
				'userAgent'             => $userAgent,
			)
		),
		'verificationVersion' => AvsPhpSdkV1::VERIFICATION_VERSION_STANDARD_V1,
		'linkBack'            => $linkBack,
		'callbackUrl'         => $callbackUrl,
		'ipStr'               => $userIp,
		// optional
		'countryCode'         => $countryCode,
		'stateCode'           => $stateCode,
	)
);

// encrypt the request object and get the age verification page url
$verificationUrl = $avsInstance->toUrl();

?>
<html lang="en">
<head>
	<title>Age verification using redirect demo</title>
	<link rel="stylesheet" href="css/style.css"/>
</head>
<body>
	<div class="container">
		<img class="logo" src="/redirect/img/logo.svg"/>
		<h1>Age verification using redirect demo</h1>
		<p>By clicking the button below a new browser tab will open with the go.cam age verification page.</p>
		<p>The verification result will be posted back to your verification result callback url.</p>
		<a class="button" href="<?php echo $verificationUrl; ?>" target="_blank">Start age verification</a>
	</div>
</body>
</html>
