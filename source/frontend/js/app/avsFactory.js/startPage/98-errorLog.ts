function appGetInternalState() {

	let verificationStepGlobal = Avs.Entity.VerificationStepGlobal.getInstance();
	let selfieAgeDetection     = Avs.Entity.SelfieAgeDetection.getInstance();
	let scanIdAgeVerification  = Avs.Entity.ScanIdAgeVerification.getInstance();


	return {
		verificationStepGlobal: verificationStepGlobal,
		selfieAgeDetection    : selfieAgeDetection,
		scanIdAgeVerification : scanIdAgeVerification,

	};

}
