<?php

// include the php library
require_once '../redirect/lib/AvsPhpSdkV1.php';

// provide the access information, find this credentials in your partner account
$cipherKey = 'zIkmW2zEgzlTLTRC5xeMbcOhHcE5sBHB';

$demoUserId = 0;

// create a new verification library instance
$avsInstance = new AvsPhpSdkV1($cipherKey);

// check if the verification payload exists
if (empty($_POST['verificationResultPayload'])) {
	// return an error
	echo json_encode(
		array(
			'error' => array(
				'msg' => 'Invalid verificationResultPayload'
			)
		)
	);
	exit;
}

// try to decrypt the verification payload
try {
	$avsInstance->fromPayload($_POST['verificationResultPayload']);
}
catch (Exception $e) {
	// return an error
	echo json_encode(
		array(
			'error' => array(
				'msg' => 'verificationResultPayload decryption error: ' . $e->getMessage()
			)
		)
	);
	exit;
}

// check the integrity of the verification payload
if ($avsInstance->verificationResult['state'] == 'success') {

	// if the user it's not logged in you can save this result in a session for later use (after a successful login)
	// $_SESSION['ageVerificationSessionId'] = $payloadDecrypted['sessionId'];

	// if the user is logged in, you can mark it as validated
	// TODO: mark the user as validated

	// return a success and the age verification sessionId
	echo json_encode(
		array(
			'success' => 1,
			'sessionId' => $avsInstance->verificationResult['sessionId'],
		)
	);
	exit;
}

// return an error
echo json_encode(
	array(
		'error' => array(
			'msg' => 'verificationResultPayload integrity check failed.'
		)
	)
);
exit;
