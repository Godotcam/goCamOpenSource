"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ResultPageFail;
    (function (ResultPageFail) {
        var Config = /** @class */ (function () {
            function Config() {
            }
            Config.create = function (config) {
                Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;
                Config.API_BASE_ENDPOINT = config.apiBaseEndpoint || Config.API_BASE_ENDPOINT;
                Config.POLLING_BASE_ENDPOINT = config.pollingBaseEndpoint || Config.POLLING_BASE_ENDPOINT;
            };
            Config.DEFAULT_DEBUG_LEVEL = 4;
            Config.API_BASE_ENDPOINT = '/result';
            Config.POLLING_BASE_ENDPOINT = '/result';
            return Config;
        }());
        ResultPageFail.Config = Config;
    })(ResultPageFail = AvsFactory.ResultPageFail || (AvsFactory.ResultPageFail = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ResultPageFail;
    (function (ResultPageFail) {
        var Ui = /** @class */ (function () {
            function Ui() {
            }
            Ui.init = function () {
                ResultPageFail.instance.ui = {
                    ResultFailButton: new Avs.Ui.Library.ResultFailButton(ResultPageFail.instance.event),
                    ResultPageFailReasonArea: new Avs.Ui.Library.ResultPageFailReasonArea(ResultPageFail.instance.event),
                    ErrorMessageQrTextArea: new Avs.Ui.Library.ErrorMessageQrTextArea(ResultPageFail.instance.event),
                    ResultPageFailQrArea: new Avs.Ui.Library.ResultPageFailQrArea(ResultPageFail.instance.event),
                    FailPageErrorQrCode: new Avs.Ui.Library.FailPageErrorQrCode(ResultPageFail.instance.event)
                };
            };
            return Ui;
        }());
        ResultPageFail.Ui = Ui;
    })(ResultPageFail = AvsFactory.ResultPageFail || (AvsFactory.ResultPageFail = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ResultPageFail;
    (function (ResultPageFail) {
        var Binding = /** @class */ (function () {
            function Binding() {
            }
            Binding.init = function () {
                ResultPageFail.instance.ui.ResultFailButton.onClick(function () {
                    window.location.reload();
                });
            };
            return Binding;
        }());
        ResultPageFail.Binding = Binding;
    })(ResultPageFail = AvsFactory.ResultPageFail || (AvsFactory.ResultPageFail = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ResultPageFail;
    (function (ResultPageFail) {
        var Method = /** @class */ (function () {
            function Method() {
            }
            Method.init = function () {
                ResultPageFail.instance.entity.VerificationStepGlobal.isVerified = false;
            };
            Method.saveError = function (errorCode) {
                var token = Application.token;
                var failKey = Avs.Helper.Common.decodeBase64(token).failKey;
                ResultPageFail.instance.apiDataChannel.request('/fail', {
                    token: failKey,
                    errorCode: errorCode,
                    stepId: ResultPageFail.instance.entity.VerificationStepGlobal.stepId,
                    deviceLocationVerification: ResultPageFail.instance.entity.VerificationStepGlobal.deviceLocationVerification,
                    sessionId: ResultPageFail.instance.entity.VerificationStepGlobal.sessionId,
                    idCountry: ResultPageFail.instance.entity.ScanIdAgeVerification.idCountry,
                    idState: ResultPageFail.instance.entity.ScanIdAgeVerification.idState,
                    idType: ResultPageFail.instance.entity.ScanIdAgeVerification.idTypeString
                }).then(function () {
                }, function (error) {
                    ResultPageFail.instance.ui.ResultPageFailReasonArea.setContent(error.code + ': Could not save your result');
                });
            };
            Method.renderFailReason = function (failReason) {
                ResultPageFail.instance.ui.ResultPageFailReasonArea.setContent(failReason);
                ResultPageFail.instance.ui.ResultPageFailQrArea.hide();
                if (!Application.deviceInfo['os.mobile']) {
                    ResultPageFail.instance.ui.ResultPageFailQrArea.show();
                    ResultPageFail.instance.ui.FailPageErrorQrCode.renderTestToOtherDeviceQr();
                    ResultPageFail.instance.startApiPolling(ResultPageFail.instance.entity.VerificationStepGlobal.partnerId, ResultPageFail.instance.entity.VerificationStepGlobal.payload);
                }
            };
            Method.goToSuccessStep = function () {
                AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.RESULT_PAGE_SUCCESS_LAYER);
                AvsFactory.ResultPageSuccess.init();
            };
            return Method;
        }());
        ResultPageFail.Method = Method;
    })(ResultPageFail = AvsFactory.ResultPageFail || (AvsFactory.ResultPageFail = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ResultPageFail;
    (function (ResultPageFail) {
        var Event = /** @class */ (function () {
            function Event() {
            }
            Event.init = function () {
                ResultPageFail.instance.event.on(Avs.ResultPageFail.ON_POLL_DATA, function (event, data) {
                    if (typeof data.isValidated !== 'undefined' && data.isValidated) {
                        ResultPageFail.instance.stopApiPolling();
                        ResultPageFail.instance.entity.VerificationStepGlobal.deviceLocationVerification = Avs.Entity.VerificationStepGlobal.DEVICE_LOCATION_VERIFICATION_EXTERNAL;
                        ResultPageFail.Method.goToSuccessStep();
                    }
                });
                ResultPageFail.instance.event.on(Avs.ResultPageFail.ON_POLL_ERROR, function (event, data) {
                    ResultPageFail.instance.debug.logToContainer('Qr verification polling error: ' + data.msg);
                });
            };
            return Event;
        }());
        ResultPageFail.Event = Event;
    })(ResultPageFail = AvsFactory.ResultPageFail || (AvsFactory.ResultPageFail = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ResultPageFail;
    (function (ResultPageFail) {
        function init() {
            ResultPageFail.instance = new Avs.ResultPageFail({
                debugLevel: ResultPageFail.Config.DEFAULT_DEBUG_LEVEL,
                api: {
                    apiEndpoint: ResultPageFail.Config.API_BASE_ENDPOINT,
                    pollingEndpoint: ResultPageFail.Config.POLLING_BASE_ENDPOINT
                },
                event: {
                    debugLevel: ResultPageFail.Config.DEFAULT_DEBUG_LEVEL
                }
            });
            ResultPageFail.Ui.init();
            ResultPageFail.Event.init();
            ResultPageFail.Binding.init();
            ResultPageFail.Method.init();
        }
        ResultPageFail.init = init;
    })(ResultPageFail = AvsFactory.ResultPageFail || (AvsFactory.ResultPageFail = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ResultPageSuccess;
    (function (ResultPageSuccess) {
        var Config = /** @class */ (function () {
            function Config() {
            }
            Config.create = function (config) {
                Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;
                Config.API_BASE_ENDPOINT = config.apiBaseEndpoint || Config.API_BASE_ENDPOINT;
            };
            Config.DEFAULT_DEBUG_LEVEL = 4;
            Config.API_BASE_ENDPOINT = '/result';
            return Config;
        }());
        ResultPageSuccess.Config = Config;
    })(ResultPageSuccess = AvsFactory.ResultPageSuccess || (AvsFactory.ResultPageSuccess = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ResultPageSuccess;
    (function (ResultPageSuccess) {
        var Ui = /** @class */ (function () {
            function Ui() {
            }
            Ui.init = function () {
                ResultPageSuccess.instance.ui = {
                    ResultPageSuccessScanIdArea: new Avs.Ui.Library.ResultPageSuccessScanIdArea(ResultPageSuccess.instance.event),
                    ResultPageSuccessSelfieArea: new Avs.Ui.Library.ResultPageSuccessSelfieArea(ResultPageSuccess.instance.event),
                    ResultSuccessButton: new Avs.Ui.Library.ResultSuccessButton(ResultPageSuccess.instance.event)
                };
            };
            return Ui;
        }());
        ResultPageSuccess.Ui = Ui;
    })(ResultPageSuccess = AvsFactory.ResultPageSuccess || (AvsFactory.ResultPageSuccess = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ResultPageSuccess;
    (function (ResultPageSuccess) {
        var Binding = /** @class */ (function () {
            function Binding() {
            }
            Binding.init = function () {
                ResultPageSuccess.instance.ui.ResultSuccessButton.onClick(function () {
                    AvsFactory.StartPage.instance.postMessage.emit(AvsFactory.StartPage.Config.EVENT_ON_VERIFICATION_SUCCESS, {
                        status: ResultPageSuccess.instance.entity.VerificationStepGlobal.isVerified,
                        payload: ResultPageSuccess.instance.entity.VerificationStepGlobal.successPayload
                    });
                    AvsFactory.StartPage.instance.postMessage.emit(AvsFactory.StartPage.Config.EVENT_ON_VERIFICATION_DONE, {
                        status: ResultPageSuccess.instance.entity.VerificationStepGlobal.isVerified,
                        payload: ResultPageSuccess.instance.entity.VerificationStepGlobal.successPayload
                    });
                    if (AvsFactory.StartPage.Config.VERIFICATION_VERSION != AvsFactory.StartPage.Config.VERIFICATION_VERSION_IFRAME_V1) {
                        var token = Application.token;
                        window.location.href = Avs.Helper.Common.decodeBase64(token).backLink;
                    }
                });
            };
            return Binding;
        }());
        ResultPageSuccess.Binding = Binding;
    })(ResultPageSuccess = AvsFactory.ResultPageSuccess || (AvsFactory.ResultPageSuccess = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ResultPageSuccess;
    (function (ResultPageSuccess) {
        var Method = /** @class */ (function () {
            function Method() {
            }
            Method.init = function () {
                if (ResultPageSuccess.instance.entity.SelfieAgeDetection.averageAge > 0) {
                    ResultPageSuccess.instance.ui.ResultPageSuccessSelfieArea.setContent('<strong>' +
                        AvsFactory.SelfieAgeDetectionPage.Method.getAgeAreaString('Final face average age', ResultPageSuccess.instance.entity.SelfieAgeDetection.averageAge) +
                        '</strong>');
                }
                if (ResultPageSuccess.instance.entity.ScanIdAgeVerification.lowestScanValue > 0) {
                    ResultPageSuccess.instance.ui.ResultPageSuccessScanIdArea.setContent('<strong>Final document extracted age: ' + ResultPageSuccess.instance.entity.ScanIdAgeVerification.lowestScanValue + '</strong>');
                }
                var token = Application.token;
                var successKey = Avs.Helper.Common.decodeBase64(token).successKey;
                ResultPageSuccess.instance.apiDataChannel.request('/success', {
                    token: successKey,
                    stepId: ResultPageSuccess.instance.entity.VerificationStepGlobal.stepId,
                    deviceLocationVerification: ResultPageSuccess.instance.entity.VerificationStepGlobal.deviceLocationVerification,
                    sessionId: ResultPageSuccess.instance.entity.VerificationStepGlobal.sessionId,
                    idCountry: ResultPageSuccess.instance.entity.ScanIdAgeVerification.idCountry,
                    idState: ResultPageSuccess.instance.entity.ScanIdAgeVerification.idState,
                    idType: ResultPageSuccess.instance.entity.ScanIdAgeVerification.idTypeString
                }).then(function (successData) {
                    ResultPageSuccess.instance.entity.VerificationStepGlobal.isVerified = true;
                    ResultPageSuccess.instance.entity.VerificationStepGlobal.successPayload = successData.successPayload;
                }, function (error) {
                    AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.RESULT_PAGE_FAIL_LAYER);
                    AvsFactory.ResultPageFail.init();
                    AvsFactory.ResultPageFail.Method.renderFailReason(error.code + ': Could not save your result');
                });
            };
            return Method;
        }());
        ResultPageSuccess.Method = Method;
    })(ResultPageSuccess = AvsFactory.ResultPageSuccess || (AvsFactory.ResultPageSuccess = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ResultPageSuccess;
    (function (ResultPageSuccess) {
        var Event = /** @class */ (function () {
            function Event() {
            }
            Event.init = function () {
            };
            return Event;
        }());
        ResultPageSuccess.Event = Event;
    })(ResultPageSuccess = AvsFactory.ResultPageSuccess || (AvsFactory.ResultPageSuccess = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ResultPageSuccess;
    (function (ResultPageSuccess) {
        function init() {
            ResultPageSuccess.instance = new Avs.ResultPageSuccess({
                debugLevel: ResultPageSuccess.Config.DEFAULT_DEBUG_LEVEL,
                api: {
                    apiEndpoint: ResultPageSuccess.Config.API_BASE_ENDPOINT
                },
                event: {
                    debugLevel: ResultPageSuccess.Config.DEFAULT_DEBUG_LEVEL
                }
            });
            ResultPageSuccess.Ui.init();
            ResultPageSuccess.Event.init();
            ResultPageSuccess.Binding.init();
            ResultPageSuccess.Method.init();
        }
        ResultPageSuccess.init = init;
    })(ResultPageSuccess = AvsFactory.ResultPageSuccess || (AvsFactory.ResultPageSuccess = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ScanIdAgeVerificationIntro;
    (function (ScanIdAgeVerificationIntro) {
        var Config = /** @class */ (function () {
            function Config() {
            }
            Config.create = function (config) {
                Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;
                Config.API_BASE_ENDPOINT = config.apiBaseEndpoint || Config.API_BASE_ENDPOINT;
            };
            Config.DEFAULT_DEBUG_LEVEL = 4;
            Config.API_BASE_ENDPOINT = '';
            Config.FACING_MODE_REQUIRED = 'environment';
            return Config;
        }());
        ScanIdAgeVerificationIntro.Config = Config;
    })(ScanIdAgeVerificationIntro = AvsFactory.ScanIdAgeVerificationIntro || (AvsFactory.ScanIdAgeVerificationIntro = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ScanIdAgeVerificationIntro;
    (function (ScanIdAgeVerificationIntro) {
        var Ui = /** @class */ (function () {
            function Ui() {
            }
            Ui.init = function () {
                ScanIdAgeVerificationIntro.instance.ui = {
                    ScanIdAgeDetectionStartButton: new Avs.Ui.Library.ScanIdAgeDetectionStartButton(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeVerificationDeviceSelect: new Avs.Ui.Library.ScanIdAgeVerificationDeviceSelect(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeVerificationTypeArea: new Avs.Ui.Library.ScanIdAgeVerificationTypeArea(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeVerificationTypeSelect: new Avs.Ui.Library.ScanIdAgeVerificationTypeSelect(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeVerificationCountrySelect: new Avs.Ui.Library.ScanIdAgeVerificationCountrySelect(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeVerificationStateArea: new Avs.Ui.Library.ScanIdAgeVerificationStateArea(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeVerificationStateSelect: new Avs.Ui.Library.ScanIdAgeVerificationStateSelect(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeVerificationDeviceAccessArea: new Avs.Ui.Library.ScanIdAgeVerificationDeviceAccessArea(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeVerificationSubmitArea: new Avs.Ui.Library.ScanIdAgeVerificationSubmitArea(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeVerificationDeviceSelectionArea: new Avs.Ui.Library.ScanIdAgeVerificationDeviceSelectionArea(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeVerificationDocumentHelperArea: new Avs.Ui.Library.ScanIdAgeVerificationDocumentHelperArea(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeDetectionCancelButton: new Avs.Ui.Library.ScanIdAgeDetectionCancelButton(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeVerificationUploadImageIntroButton: new Avs.Ui.Library.ScanIdAgeVerificationUploadImageIntroButton(ScanIdAgeVerificationIntro.instance.event),
                    ScanIdAgeVerificationUploadFileIntroInput: new Avs.Ui.Library.ScanIdAgeVerificationUploadFileIntroInput(ScanIdAgeVerificationIntro.instance.event)
                };
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationTypeArea.hide();
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationDocumentHelperArea.hide();
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationStateArea.hide();
                if (!ScanIdAgeVerificationIntro.instance.entity.ScanIdAgeVerification.resourcesPreloaded) {
                    ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeDetectionStartButton.disable();
                }
            };
            return Ui;
        }());
        ScanIdAgeVerificationIntro.Ui = Ui;
    })(ScanIdAgeVerificationIntro = AvsFactory.ScanIdAgeVerificationIntro || (AvsFactory.ScanIdAgeVerificationIntro = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ScanIdAgeVerificationIntro;
    (function (ScanIdAgeVerificationIntro) {
        var Binding = /** @class */ (function () {
            function Binding() {
            }
            Binding.init = function () {
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeDetectionStartButton.onClick(function () {
                    if (ScanIdAgeVerificationIntro.instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode) {
                        ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationUploadFileIntroInput.triggerFileBrowse();
                        return;
                    }
                    if (ScanIdAgeVerificationIntro.instance.entity.ScanIdAgeVerification.facingMode === null) {
                        ScanIdAgeVerificationIntro.instance.entity.ScanIdAgeVerification.videoDeviceId = ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationDeviceSelect.getSelectedOption();
                    }
                    ScanIdAgeVerificationIntro.instance.entity.ScanIdAgeVerification.idCountry = ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption();
                    ScanIdAgeVerificationIntro.instance.entity.ScanIdAgeVerification.idState = ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationStateSelect.getSelectedOption();
                    ScanIdAgeVerificationIntro.instance.entity.ScanIdAgeVerification.idTypeString = ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationTypeSelect.getSelectedOption();
                    ScanIdAgeVerificationIntro.instance.entity.ScanIdAgeVerification.idVariantCurrent = 0;
                    // instance.entity.ScanIdAgeVerification.idType = instance.ui.ScanIdAgeVerificationTypeSelect.getSelectedOption();
                    AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.SCAN_ID_AGE_VERIFICATION_PAGE_LAYER);
                    AvsFactory.ScanIdAgeVerificationPage.init();
                });
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.onChange(function () {
                    ScanIdAgeVerificationIntro.Method.renderStateList(ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption());
                });
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationStateSelect.onChange(function () {
                    ScanIdAgeVerificationIntro.Method.renderDocumentList(ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption(), ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationStateSelect.getSelectedOption());
                });
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeDetectionCancelButton.onClick(function () {
                    AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.START_PAGE_LAYER);
                });
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationUploadFileIntroInput.onChange(function (value, event) {
                    if (value != '') {
                        ScanIdAgeVerificationIntro.instance.entity.ScanIdAgeVerification.idCountry = ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption();
                        ScanIdAgeVerificationIntro.instance.entity.ScanIdAgeVerification.idState = ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationStateSelect.getSelectedOption();
                        ScanIdAgeVerificationIntro.instance.entity.ScanIdAgeVerification.idTypeString = ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationTypeSelect.getSelectedOption();
                        ScanIdAgeVerificationIntro.instance.entity.ScanIdAgeVerification.idVariantCurrent = 0;
                        AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.SCAN_ID_AGE_VERIFICATION_PAGE_LAYER);
                        AvsFactory.ScanIdAgeVerificationPage.init();
                        AvsFactory.ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingArea.show();
                        AvsFactory.ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingConfirmationArea.show();
                        if (event.target.files) {
                            Avs.Helper.Canvas.fileToCanvas(event.target.files[0], AvsFactory.ScanIdAgeVerificationPage.Method.getProcessingCanvas());
                        }
                    }
                });
            };
            return Binding;
        }());
        ScanIdAgeVerificationIntro.Binding = Binding;
    })(ScanIdAgeVerificationIntro = AvsFactory.ScanIdAgeVerificationIntro || (AvsFactory.ScanIdAgeVerificationIntro = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ScanIdAgeVerificationIntro;
    (function (ScanIdAgeVerificationIntro) {
        var Method = /** @class */ (function () {
            function Method() {
            }
            Method.init = function () {
                AvsFactory.StartPage.Method.preloadTesseractResources();
                AvsFactory.StartPage.instance.ui.TesseractPreloaderArea.show();
                Method.renderCountryList();
                Method.renderStateList(ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption());
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationDeviceSelect.clearAllOptions();
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationDeviceSelect.initStates();
                Avs.Helper.Common.hasCameraFacingMode(ScanIdAgeVerificationIntro.Config.FACING_MODE_REQUIRED, function (facingModeExist) {
                    if (!facingModeExist) {
                        Avs.Helper.Common.getStreamDevices(function (devices) {
                            if (devices !== null) {
                                var videoInputDeviceIdList = {};
                                var foundDevicesNumber = 0;
                                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationDeviceSelect.clearAllOptions();
                                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationDeviceSelect.initStates();
                                for (var i = 0, j = devices.videoinput.length; i < j; i++) {
                                    var device = devices.videoinput[i];
                                    videoInputDeviceIdList[device.id] = true;
                                    ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationDeviceSelect.addOption(device.label, device.id, device["default"]);
                                    foundDevicesNumber++;
                                }
                                if (foundDevicesNumber > 1) {
                                    ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationDeviceSelectionArea.show();
                                }
                            }
                            else {
                                ScanIdAgeVerificationIntro.instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode = true;
                            }
                            ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationDeviceAccessArea.hide();
                            ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationSubmitArea.show();
                        });
                    }
                    else {
                        ScanIdAgeVerificationIntro.instance.entity.ScanIdAgeVerification.facingMode = ScanIdAgeVerificationIntro.Config.FACING_MODE_REQUIRED;
                        ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationDeviceAccessArea.hide();
                        ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationSubmitArea.show();
                    }
                });
            };
            Method.renderCountryList = function () {
                var ipCountry = Application.ipCountry.toUpperCase();
                var browserCountry = Avs.Helper.Country.getBrowserCountryFromLanguage().toUpperCase();
                if (Application.forceIpCountry) {
                    ipCountry = Application.forceIpCountry.toUpperCase();
                }
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.clearAllOptions();
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.initStates();
                if (Avs.Config.scanIdList[ipCountry]) {
                    ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.addOption(Avs.Config.scanIdList[ipCountry]['countryName'], ipCountry, false);
                }
                if (Avs.Config.scanIdList[browserCountry] && ipCountry != browserCountry) {
                    ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.addOption(Avs.Config.scanIdList[browserCountry]['countryName'], browserCountry, false);
                }
                for (var i in Avs.Config.scanIdList) {
                    if ([ipCountry, browserCountry].indexOf(i) > -1) {
                        continue;
                    }
                    ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.addOption(Avs.Config.scanIdList[i]['countryName'], i, false);
                }
            };
            Method.renderStateList = function (countryCode) {
                if (Avs.Config.scanIdList[countryCode]['hasMultipleState']) {
                    ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationStateArea.show();
                    for (var i in Avs.Config.scanIdList[countryCode]['stateList']) {
                        ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationStateSelect.addOption(Avs.Config.scanIdList[countryCode]['stateList'][i]['stateName'], i, false);
                    }
                    Method.renderDocumentList(ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption(), ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationStateSelect.getSelectedOption());
                    return;
                }
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationStateArea.hide();
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationStateSelect.clearAllOptions();
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationStateSelect.initStates();
                Method.renderDocumentList(ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationCountrySelect.getSelectedOption(), ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationStateSelect.getSelectedOption());
            };
            Method.renderDocumentList = function (countryCode, stateCode) {
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationTypeSelect.clearAllOptions();
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationTypeSelect.initStates();
                ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationTypeArea.show();
                if (stateCode !== null) {
                    if (Avs.Config.scanIdList[countryCode]['stateList'][stateCode]['idConfig']['idCard'].length > 0) {
                        ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationTypeSelect.addOption('Identity card', 'idCard', false);
                    }
                    if (Avs.Config.scanIdList[countryCode]['stateList'][stateCode]['idConfig']['passport'].length > 0) {
                        ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationTypeSelect.addOption('Passport', 'passport', false);
                    }
                    if (Avs.Config.scanIdList[countryCode]['stateList'][stateCode]['idConfig']['driverLicence'].length > 0) {
                        ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationTypeSelect.addOption('Driver license', 'driverLicence', false);
                    }
                    return;
                }
                if (Avs.Config.scanIdList[countryCode]['idConfig']['idCard'].length > 0) {
                    ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationTypeSelect.addOption('Identity card', 'idCard', false);
                }
                if (Avs.Config.scanIdList[countryCode]['idConfig']['passport'].length > 0) {
                    ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationTypeSelect.addOption('Passport', 'passport', false);
                }
                if (Avs.Config.scanIdList[countryCode]['idConfig']['driverLicence'].length > 0) {
                    ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationTypeSelect.addOption('Driver license', 'driverLicence', false);
                }
            };
            return Method;
        }());
        ScanIdAgeVerificationIntro.Method = Method;
    })(ScanIdAgeVerificationIntro = AvsFactory.ScanIdAgeVerificationIntro || (AvsFactory.ScanIdAgeVerificationIntro = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ScanIdAgeVerificationIntro;
    (function (ScanIdAgeVerificationIntro) {
        var Event = /** @class */ (function () {
            function Event() {
            }
            Event.init = function () {
                AvsFactory.StartPage.instance.event.on(Avs.Helper.FilePreloader.ON_PRELOAD_EVENT + '.' + AvsFactory.StartPage.Config.TESSERACT_PRELOADER_NAME, function (event, data) {
                    if (data.total.progress == 100 && data.total.status === Avs.Helper.FilePreloader.FILE_STATUS_SUCCESS) {
                        ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeDetectionStartButton.enable();
                    }
                });
            };
            return Event;
        }());
        ScanIdAgeVerificationIntro.Event = Event;
    })(ScanIdAgeVerificationIntro = AvsFactory.ScanIdAgeVerificationIntro || (AvsFactory.ScanIdAgeVerificationIntro = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ScanIdAgeVerificationIntro;
    (function (ScanIdAgeVerificationIntro) {
        function init() {
            ScanIdAgeVerificationIntro.instance = new Avs.ScanIdAgeVerificationIntro({
                debugLevel: ScanIdAgeVerificationIntro.Config.DEFAULT_DEBUG_LEVEL,
                event: {
                    debugLevel: ScanIdAgeVerificationIntro.Config.DEFAULT_DEBUG_LEVEL
                }
            });
            ScanIdAgeVerificationIntro.instance.entity.VerificationStepGlobal.stepId = Avs.Entity.VerificationStepGlobal.STEP_SCAN_ID_AGE_VERIFICATION_INTRO;
            ScanIdAgeVerificationIntro.Ui.init();
            ScanIdAgeVerificationIntro.Event.init();
            ScanIdAgeVerificationIntro.Binding.init();
            ScanIdAgeVerificationIntro.Method.init();
        }
        ScanIdAgeVerificationIntro.init = init;
    })(ScanIdAgeVerificationIntro = AvsFactory.ScanIdAgeVerificationIntro || (AvsFactory.ScanIdAgeVerificationIntro = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ScanIdAgeVerificationPage;
    (function (ScanIdAgeVerificationPage) {
        var Config = /** @class */ (function () {
            function Config() {
            }
            Config.create = function (config) {
                Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;
                Config.API_BASE_ENDPOINT = config.apiBaseEndpoint || Config.API_BASE_ENDPOINT;
                var verificationStepGlobalEntity = Avs.Entity.VerificationStepGlobal.getInstance();
                if (verificationStepGlobalEntity.tesseractType == Avs.Entity.VerificationStepGlobal.TESSERACT_TYPE_PRECISE_EN ||
                    verificationStepGlobalEntity.tesseractType == Avs.Entity.VerificationStepGlobal.TESSERACT_TYPE_PRECISE_FR) {
                    Config.TESSERACT_LANGUAGE_PATH = '/static/js/vendor/tesseract-js-core-2.0.0/tessdata/best';
                }
                else {
                    Config.TESSERACT_LANGUAGE_PATH = '/static/js/vendor/tesseract-js-core-2.0.0/tessdata/fast';
                }
                if (verificationStepGlobalEntity.tesseractType == Avs.Entity.VerificationStepGlobal.TESSERACT_TYPE_FAST_FR ||
                    verificationStepGlobalEntity.tesseractType == Avs.Entity.VerificationStepGlobal.TESSERACT_TYPE_PRECISE_FR) {
                    Config.TESSERACT_LANGUAGE = Avs.Plugin.Library.Ml.Tesseract.LANGUAGE_FR;
                }
                else {
                    Config.TESSERACT_LANGUAGE = Avs.Plugin.Library.Ml.Tesseract.LANGUAGE_EN;
                }
            };
            Config.DEFAULT_DEBUG_LEVEL = 4;
            Config.API_BASE_ENDPOINT = '';
            Config.CAMERA_SOURCE_ROOT_ELEMENT_CONTAINER = '#scanIdVideoContainer';
            Config.CAMERA_SOURCE_ROOT_ELEMENT = '#scanIdVideo';
            Config.CAMERA_SOURCE_CANVAS_OVERLAY_ELEMENT = '#scanIdVideoOverlayCanvas';
            Config.CAMERA_SOURCE_CANVAS_RESULT_ELEMENT = '#scanIdVideoResultCanvas';
            Config.ID_CARD_GUIDE_CONTAINER = '#idCardGuide';
            Config.ID_CARD_GUIDE_BIRTH_DATE_CONTAINER = '#idCardGuideBirthDate';
            Config.DOCUMENT_PROCESSING_CANVAS_CONTAINER = '#documentProcessingCanvasContainer';
            Config.DOCUMENT_PROCESSING_CANVAS = '#documentProcessingCanvas';
            Config.FACE_API_WEIGHTS_PATH = '/static/js/appFiles/faw/';
            Config.TESSERACT_WORKER_PATH = '/static/js/appFiles/tjs/w.min.js';
            Config.TESSERACT_CORE_PATH = '/static/js/appFiles/tjs/tscasm.js';
            Config.TESSERACT_LANGUAGE_PATH = '/static/js/appFiles/tjs/data';
            Config.TESSERACT_LANGUAGE = Avs.Plugin.Library.Ml.Tesseract.LANGUAGE_FR;
            Config.MAX_VALID_DATA_EXTRACTION_NUMBER = 1;
            Config.MAX_TOTAL_DATA_EXTRACTION_NUMBER = 50;
            Config.MAX_VALID_FACE_SCAN_NUMBER = 3;
            Config.MAX_TOTAL_FACE_SCAN_NUMBER = 30;
            Config.DATA_EXTRACTION_INTERVAL_MS = 500;
            Config.FACE_SCAN_INTERVAL_MS = 500;
            Config.PHOTO_TAKE_INTERVAL_MS = 500;
            Config.MAX_FACE_DISTANCE_TO_MATCH = 0.55;
            Config.MIN_VALID_FACE_MATCH = 5;
            Config.MIN_SCAN_VALUE = 18;
            Config.MAX_SCAN_VALUE = 150;
            Config.BRIGHTNESS_ADJUSTMENT_MAX_VALUE = 20;
            Config.CONTRAST_ADJUSTMENT_MAX_VALUE = 20;
            Config.ZOOM_ADJUSTMENT_MAX_VALUE = 3;
            Config.EVENT_NAME_PREFIX = 'scanIdAgeVerificationPage';
            Config.BOUNDARY_TOP = 20;
            Config.BOUNDARY_BOTTOM = 20;
            Config.BOUNDARY_LEFT = 20;
            Config.BOUNDARY_RIGHT = 20;
            Config.BOUNDARY_MAX_WIDTH = 1200;
            Config.BOUNDARY_MAX_HEIGHT = 1200;
            Config.FACING_MODE_REQUIRED = 'environment';
            return Config;
        }());
        ScanIdAgeVerificationPage.Config = Config;
    })(ScanIdAgeVerificationPage = AvsFactory.ScanIdAgeVerificationPage || (AvsFactory.ScanIdAgeVerificationPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ScanIdAgeVerificationPage;
    (function (ScanIdAgeVerificationPage) {
        var Ui = /** @class */ (function () {
            function Ui() {
            }
            Ui.init = function () {
                ScanIdAgeVerificationPage.instance.ui = {
                    ScanIdAgeVerificationLoadingLabelArea: new Avs.Ui.Library.ScanIdAgeVerificationLoadingLabelArea(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationLoadingLabelPercentCounter: new Avs.Ui.Library.ScanIdAgeVerificationLoadingLabelPercentCounter(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationStatusLabel: new Avs.Ui.Library.ScanIdAgeVerificationStatusLabel(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationCurrentAgeArea: new Avs.Ui.Library.ScanIdAgeVerificationCurrentAgeArea(ScanIdAgeVerificationPage.instance.event),
                    RatioRecommendArea: new Avs.Ui.Library.RatioRecommendArea(ScanIdAgeVerificationPage.instance.event),
                    RatioRecommendTextArea: new Avs.Ui.Library.RatioRecommendTextArea(ScanIdAgeVerificationPage.instance.event),
                    RatioRecommendButton: new Avs.Ui.Library.RatioRecommendButton(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationUploadImageButton: new Avs.Ui.Library.ScanIdAgeVerificationUploadImageButton(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationTakePhotoButton: new Avs.Ui.Library.ScanIdAgeVerificationTakePhotoButton(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationUploadFileInput: new Avs.Ui.Library.ScanIdAgeVerificationUploadFileInput(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationDocumentProcessingProcessArea: new Avs.Ui.Library.ScanIdAgeVerificationDocumentProcessingProcessArea(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationDocumentProcessingConfirmationArea: new Avs.Ui.Library.ScanIdAgeVerificationDocumentProcessingConfirmationArea(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationDocumentProcessingArea: new Avs.Ui.Library.ScanIdAgeVerificationDocumentProcessingArea(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationBirthDateButton: new Avs.Ui.Library.ScanIdAgeVerificationBirthDateButton(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationFaceSimilarityButton: new Avs.Ui.Library.ScanIdAgeVerificationFaceSimilarityButton(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationLoadingLibraryButton: new Avs.Ui.Library.ScanIdAgeVerificationLoadingLibraryButton(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationConfirmationYesButton: new Avs.Ui.Library.ScanIdAgeVerificationConfirmationYesButton(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationConfirmationNoButton: new Avs.Ui.Library.ScanIdAgeVerificationConfirmationNoButton(ScanIdAgeVerificationPage.instance.event),
                    DocumentProcessingCanvasLoadingOverlayArea: new Avs.Ui.Library.DocumentProcessingCanvasLoadingOverlayArea(ScanIdAgeVerificationPage.instance.event),
                    ScanIdAgeVerificationFaceSimilarityArea: new Avs.Ui.Library.ScanIdAgeVerificationFaceSimilarityArea(ScanIdAgeVerificationPage.instance.event)
                };
                ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.setStepNumber(7);
                ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationBirthDateButton.showLoading();
                ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationFaceSimilarityButton.showLoading();
                ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLibraryButton.showLoading();
                ScanIdAgeVerificationPage.instance.ui.DocumentProcessingCanvasLoadingOverlayArea.hide();
                if (ScanIdAgeVerificationPage.Method.isScanIdVerificationStandalone()) {
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationFaceSimilarityArea.hide();
                }
            };
            return Ui;
        }());
        ScanIdAgeVerificationPage.Ui = Ui;
    })(ScanIdAgeVerificationPage = AvsFactory.ScanIdAgeVerificationPage || (AvsFactory.ScanIdAgeVerificationPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ScanIdAgeVerificationPage;
    (function (ScanIdAgeVerificationPage) {
        var Binding = /** @class */ (function () {
            function Binding() {
            }
            Binding.init = function () {
                $(window).on('resize', function () {
                    ScanIdAgeVerificationPage.Method.repositionScanId();
                });
                ScanIdAgeVerificationPage.instance.ui.RatioRecommendButton.onClick(function () {
                    ScanIdAgeVerificationPage.instance.ui.RatioRecommendArea.hide();
                    ScanIdAgeVerificationPage.Method.initVideo();
                });
                ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationUploadImageButton.onClick(function () {
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationUploadFileInput.triggerFileBrowse();
                });
                ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationTakePhotoButton.onClick(function () {
                    ScanIdAgeVerificationPage.Method.repositionScanId();
                    var scanIdContainerMask = ScanIdAgeVerificationPage.Method.getIdGuideContainer();
                    var videoElement = ScanIdAgeVerificationPage.instance.plugin.Library.Video.CameraSource.adapters.webrtc.rootElement;
                    var containerPosition = Avs.Helper.VideoAreaExtractor.calculateMaskPosition(scanIdContainerMask, videoElement);
                    var documentProcessingCanvas = ScanIdAgeVerificationPage.Method.getProcessingCanvas();
                    Avs.Helper.VideoAreaExtractor.videoMaskToCanvas(videoElement, documentProcessingCanvas, containerPosition);
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingArea.show();
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingConfirmationArea.show();
                });
                ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationUploadFileInput.onChange(function (value, event) {
                    if (value != '') {
                        ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingArea.show();
                        ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingConfirmationArea.show();
                        if (event.target.files) {
                            Avs.Helper.Canvas.fileToCanvas(event.target.files[0], ScanIdAgeVerificationPage.Method.getProcessingCanvas());
                        }
                    }
                });
                ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationConfirmationYesButton.onClick(function () {
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingConfirmationArea.hide();
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingProcessArea.show();
                    ScanIdAgeVerificationPage.instance.ui.DocumentProcessingCanvasLoadingOverlayArea.show();
                    ScanIdAgeVerificationPage.Method.loadDetectionLibrary();
                });
                ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationConfirmationNoButton.onClick(function () {
                    if (ScanIdAgeVerificationPage.instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode) {
                        AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER);
                        AvsFactory.ScanIdAgeVerificationIntro.instance.ui.ScanIdAgeVerificationUploadFileIntroInput.clearValue();
                        return;
                    }
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationUploadFileInput.clearValue();
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingArea.hide();
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingConfirmationArea.hide();
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationDocumentProcessingProcessArea.hide();
                });
            };
            return Binding;
        }());
        ScanIdAgeVerificationPage.Binding = Binding;
    })(ScanIdAgeVerificationPage = AvsFactory.ScanIdAgeVerificationPage || (AvsFactory.ScanIdAgeVerificationPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ScanIdAgeVerificationPage;
    (function (ScanIdAgeVerificationPage) {
        var Method = /** @class */ (function () {
            function Method() {
            }
            Method.init = function () {
                if (ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.facingMode !== ScanIdAgeVerificationPage.Config.FACING_MODE_REQUIRED) {
                    ScanIdAgeVerificationPage.instance.plugin.Library.Video.CameraSource.getVideoElement().addClass('mirrored');
                }
                if (!ScanIdAgeVerificationPage.instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode) {
                    Method.initVideo();
                }
            };
            Method.getProcessingCanvas = function () {
                return $(ScanIdAgeVerificationPage.Config.DOCUMENT_PROCESSING_CANVAS).get(0);
            };
            Method.getIdGuideContainer = function () {
                return $(ScanIdAgeVerificationPage.Config.ID_CARD_GUIDE_CONTAINER).get(0);
            };
            Method.initVideo = function () {
                ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLabelArea.setContent('Trying to access your camera');
                ScanIdAgeVerificationPage.instance.plugin.Library.Video.CameraSource.init();
                ScanIdAgeVerificationPage.instance.plugin.Library.Video.CameraSource.showVideo();
                Method.repositionScanId();
            };
            Method.loadDetectionLibrary = function () {
                ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.setValue(0);
                ScanIdAgeVerificationPage.instance.debug.logToContainer('<p>Starting scan id data extraction.</p>');
                ScanIdAgeVerificationPage.instance.plugin.Library.Ml.Tesseract.loadWorker(function (result) {
                    if (result === null) {
                        AvsFactory.StartPage.Method.renderError(25040, 'Failed to initialize detection libraries');
                        return;
                    }
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();
                    ScanIdAgeVerificationPage.instance.plugin.Library.Ml.Tesseract.loadLanguage(ScanIdAgeVerificationPage.Config.TESSERACT_LANGUAGE, function (result) {
                        if (result === null) {
                            AvsFactory.StartPage.Method.renderError(25041, 'Failed to initialize detection libraries');
                            return;
                        }
                        ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();
                        ScanIdAgeVerificationPage.instance.plugin.Library.Ml.Tesseract.initLanguage(ScanIdAgeVerificationPage.Config.TESSERACT_LANGUAGE, function (result) {
                            if (result === null) {
                                AvsFactory.StartPage.Method.renderError(25042, 'Failed to initialize detection libraries');
                                return;
                            }
                            ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();
                            ScanIdAgeVerificationPage.instance.plugin.Library.Ml.Tesseract.configureWorker(function (result) {
                                if (result === null) {
                                    AvsFactory.StartPage.Method.renderError(25043, 'Failed to initialize detection libraries');
                                    return;
                                }
                                ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();
                                ScanIdAgeVerificationPage.instance.plugin.Library.Ml.FaceApi.loadDetector(function (result) {
                                    if (result === null) {
                                        AvsFactory.StartPage.Method.renderError(25044, 'Failed to initialize detection libraries');
                                        return;
                                    }
                                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();
                                    ScanIdAgeVerificationPage.instance.plugin.Library.Ml.FaceApi.loadFaceRecognitionModel(function (result) {
                                        if (result === null) {
                                            AvsFactory.StartPage.Method.renderError(25045, 'Failed to initialize detection libraries');
                                            return;
                                        }
                                        ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();
                                        ScanIdAgeVerificationPage.instance.plugin.Library.Ml.FaceApi.loadLandmarksModel(function (result) {
                                            if (result === null) {
                                                AvsFactory.StartPage.Method.renderError(25063, 'Failed to initialize detection libraries');
                                                return;
                                            }
                                            ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLabelPercentCounter.increment();
                                            ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLibraryButton.hideLoading();
                                            Method.faceExtractionStart();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            };
            Method.faceExtractionStart = function () {
                Method.extractFace();
            };
            Method.extractFace = function () {
                var processingCanvas = Method.getProcessingCanvas();
                ScanIdAgeVerificationPage.instance.plugin.Library.Ml.FaceApi.detectFaceFromCustomElement(processingCanvas, function (faceResult) {
                    ScanIdAgeVerificationPage.instance.debug.logToContainer('<p>Extract image face.</p>');
                    ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.totalFaceNumber++;
                    if (faceResult !== null) {
                        ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.validFaceNumber++;
                        ScanIdAgeVerificationPage.instance.plugin.Library.Ml.FaceApi.extractFaceImageFromCustomElement(faceResult.detection, processingCanvas, function (canvasFace) {
                            ScanIdAgeVerificationPage.instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(canvasFace[0]));
                            ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.validFaceList.push(faceResult);
                            ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.validCanvasFaceList.push(canvasFace[0]);
                            Method.checkExtractFaceStep();
                        });
                    }
                    else {
                        ScanIdAgeVerificationPage.instance.debug.logToContainer('<p>No face found.</p>');
                        var adjustment = Method.getBrightnessAndContrastRandomAdjustment();
                        Avs.Helper.Canvas.contrastCanvas(Method.getProcessingCanvas(), adjustment.contrast);
                        Avs.Helper.Canvas.brightnessCanvas(Method.getProcessingCanvas(), adjustment.brightness);
                        Method.checkExtractFaceStep();
                    }
                });
            };
            Method.getBrightnessAndContrastRandomAdjustment = function () {
                var negativeBrightnessOperation = Math.random() >= 0.5;
                var negativeContrastOperation = Math.random() >= 0.5;
                var brightnessAdjustment = (Math.floor(Math.random() * ScanIdAgeVerificationPage.Config.BRIGHTNESS_ADJUSTMENT_MAX_VALUE) + 1);
                var contrastAdjustment = (Math.floor(Math.random() * ScanIdAgeVerificationPage.Config.CONTRAST_ADJUSTMENT_MAX_VALUE) + 1);
                var brightness = ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig().brightness;
                if (negativeBrightnessOperation) {
                    brightness -= brightnessAdjustment;
                }
                else {
                    brightness += brightnessAdjustment;
                }
                var contrast = ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig().contrast;
                if (negativeContrastOperation) {
                    contrast -= contrastAdjustment;
                }
                else {
                    contrast += contrastAdjustment;
                }
                return {
                    brightness: brightness,
                    contrast: contrast
                };
            };
            Method.isScanIdVerificationStandalone = function () {
                return ScanIdAgeVerificationPage.instance.entity.VerificationStepGlobal.verificationType === Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SCAN_ID;
            };
            Method.checkExtractFaceStep = function () {
                if (ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.validFaceNumber == ScanIdAgeVerificationPage.Config.MAX_VALID_FACE_SCAN_NUMBER) {
                    if (Method.isScanIdVerificationStandalone()) {
                        Method.ocrImage();
                    }
                    else {
                        Method.compareFaceDescriptors();
                    }
                    return;
                }
                if (ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.totalFaceNumber == ScanIdAgeVerificationPage.Config.MAX_TOTAL_FACE_SCAN_NUMBER) {
                    Method.goToFailStep(25051, 'Failed to extract a face from your identity card');
                    return;
                }
                setTimeout(function () {
                    Method.extractFace();
                }, ScanIdAgeVerificationPage.Config.FACE_SCAN_INTERVAL_MS);
            };
            Method.compareFaceDescriptors = function () {
                ScanIdAgeVerificationPage.instance.debug.logToContainer('<p>Compare image faces with selfie images.</p>');
                for (var i = 0, j = ScanIdAgeVerificationPage.instance.entity.SelfieAgeDetection.validCanvasFaceList.length; i < j; i++) {
                    for (var ii = 0, jj = ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.validFaceList.length; ii < jj; ii++) {
                        ScanIdAgeVerificationPage.instance.debug.logToContainer('<p>Image pair:</p>');
                        ScanIdAgeVerificationPage.instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(ScanIdAgeVerificationPage.instance.entity.SelfieAgeDetection.validCanvasFaceList[i]));
                        ScanIdAgeVerificationPage.instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.validCanvasFaceList[ii]));
                        var distance = ScanIdAgeVerificationPage.instance.plugin.Library.Ml.FaceApi.compareFaceDescriptors(ScanIdAgeVerificationPage.instance.entity.SelfieAgeDetection.validFaceList[i].descriptor, ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.validFaceList[ii].descriptor);
                        ScanIdAgeVerificationPage.instance.debug.logToContainer('<p>Face comparison distance: <span class="' + (distance <= ScanIdAgeVerificationPage.Config.MAX_FACE_DISTANCE_TO_MATCH ? 'green' : 'red') + '">' + distance + '</span></p>');
                        var faceItsMatching = distance <= ScanIdAgeVerificationPage.Config.MAX_FACE_DISTANCE_TO_MATCH;
                        if (faceItsMatching) {
                            ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.totalValidFaceMatch++;
                        }
                        if (ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.totalValidFaceMatch >= ScanIdAgeVerificationPage.Config.MIN_VALID_FACE_MATCH) {
                            ScanIdAgeVerificationPage.instance.debug.logToContainer('<p>Found at least ' + ScanIdAgeVerificationPage.Config.MIN_VALID_FACE_MATCH + ' similar faces.</p>');
                            ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationFaceSimilarityButton.hideLoading();
                            Method.ocrImage();
                            return;
                        }
                    }
                }
                Method.goToFailStep(25052, 'Selfie face does not match the one found on the identity card');
            };
            Method.ocrImage = function () {
                // go through all id type variants
                ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.incrementIdVariantCurrent();
                ScanIdAgeVerificationPage.instance.plugin.Library.Ml.Tesseract.setIdConfig(ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig(), function (workerWasConfigured) {
                    var idSizeConfig = ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList;
                    var faceCoordinates = ScanIdAgeVerificationPage.instance.plugin.Library.Ml.FaceApi.extractFaceCoordinates(ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.validFaceList[0]);
                    var birthDateMaskPosition = Avs.Helper.ElementPositionCalculator.calculateBirthDateMaskPosition(faceCoordinates, idSizeConfig);
                    var canvasResultElement = $(ScanIdAgeVerificationPage.Config.CAMERA_SOURCE_CANVAS_RESULT_ELEMENT).get(0);
                    // TODO: tweak these more?
                    var zoomAdjustment = ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig().idRegionZoom + Math.floor(Math.random() * ScanIdAgeVerificationPage.Config.ZOOM_ADJUSTMENT_MAX_VALUE);
                    ScanIdAgeVerificationPage.instance.debug.logToContainer('<p>Zoom: ' + zoomAdjustment + '</p>');
                    var maskCanvas = Avs.Helper.VideoAreaExtractor.videoMaskToCanvas(Method.getProcessingCanvas(), canvasResultElement, birthDateMaskPosition, zoomAdjustment);
                    Avs.Helper.Canvas.grayscaleCanvas(maskCanvas);
                    var adjustment = Method.getBrightnessAndContrastRandomAdjustment();
                    Avs.Helper.Canvas.brightnessCanvas(maskCanvas, adjustment.brightness);
                    Avs.Helper.Canvas.contrastCanvas(maskCanvas, adjustment.contrast);
                    //Avs.Helper.Canvas.thresholdCanvas(maskCanvas, instance.entity.ScanIdAgeVerification.getIdTypeConfig().threshold);
                    ScanIdAgeVerificationPage.instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(maskCanvas));
                    ScanIdAgeVerificationPage.instance.plugin.Library.Ml.Tesseract.extractInformationFromId(maskCanvas, function (result) {
                        if (result !== null) {
                            ScanIdAgeVerificationPage.instance.debug.logToContainer('Detected age: ' + result.age);
                        }
                        ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.totalScanNumber++;
                        if (result !== null && result.age > 0 && result.age < ScanIdAgeVerificationPage.Config.MAX_SCAN_VALUE) {
                            ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationStatusLabel.stopBlinking();
                            ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.validScanNumber++;
                            ScanIdAgeVerificationPage.instance.debug.logToContainer('<p>Birth date: ' + result.birthDate + ' Age: ' + result.age + '</p>');
                            ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationCurrentAgeArea.setContent('Current detected age: ' + result.age);
                            ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.validScanValueList.push(result.age);
                            ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.setLowestScanValue();
                            // store working combination for reuse
                            ScanIdAgeVerificationPage.instance.debug.logToContainer('<p>Store brightness ' + adjustment.brightness + ' and contrast ' + adjustment.contrast + ' for reuse</p>');
                            ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.workingBrightnessValue = adjustment.brightness;
                            ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.workingContrastValue = adjustment.contrast;
                        }
                        else {
                            ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationStatusLabel.startBlinking();
                            ScanIdAgeVerificationPage.instance.debug.logToContainer('<p>No valid birth date found.</p>');
                        }
                        Method.checkOcrStep();
                    });
                });
            };
            Method.getAgeMinimumValue = function () {
                var minimumValue = ScanIdAgeVerificationPage.Config.MIN_SCAN_VALUE;
                var idCountry = ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.idCountry;
                var idState = ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.idState;
                if (typeof Application.countryAgeMajority[idCountry] != 'undefined') {
                    minimumValue = Application.countryAgeMajority[idCountry];
                    if (idState != null &&
                        typeof ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getStateMajorityList()[idCountry] != 'undefined' &&
                        typeof ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getStateMajorityList()[idCountry][idState] != 'undefined') {
                        minimumValue = ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getStateMajorityList()[idCountry][idState];
                    }
                }
                return minimumValue;
            };
            Method.checkOcrStep = function () {
                if (ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.validScanNumber == ScanIdAgeVerificationPage.Config.MAX_VALID_DATA_EXTRACTION_NUMBER) {
                    ScanIdAgeVerificationPage.instance.debug.logToContainer('<p>Birth date final result:' + ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.lowestScanValue + '</p>');
                    if (ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.lowestScanValue < Method.getAgeMinimumValue()) {
                        Method.goToFailStep(25053, 'Detected your age is lower than ' + Method.getAgeMinimumValue() + ' years');
                        return;
                    }
                    Method.goToSuccessStep();
                    return;
                }
                if (ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.totalScanNumber == ScanIdAgeVerificationPage.Config.MAX_TOTAL_DATA_EXTRACTION_NUMBER) {
                    Method.goToFailStep(25054, 'Failed to extract your age from the current identity card');
                    return;
                }
                setTimeout(function () {
                    Method.ocrImage();
                }, ScanIdAgeVerificationPage.Config.DATA_EXTRACTION_INTERVAL_MS);
            };
            Method.goToSuccessStep = function () {
                AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.RESULT_PAGE_SUCCESS_LAYER);
                AvsFactory.ResultPageSuccess.init();
                if (!ScanIdAgeVerificationPage.instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode) {
                    ScanIdAgeVerificationPage.instance.plugin.Library.Video.CameraSource.datachannels.webrtc.stopStreaming();
                }
            };
            Method.goToFailStep = function (failCode, failReason) {
                AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.RESULT_PAGE_FAIL_LAYER);
                AvsFactory.ResultPageFail.init();
                AvsFactory.ResultPageFail.Method.saveError(failCode);
                AvsFactory.ResultPageFail.Method.renderFailReason(failCode + ': ' + failReason);
                if (!ScanIdAgeVerificationPage.instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode) {
                    ScanIdAgeVerificationPage.instance.plugin.Library.Video.CameraSource.datachannels.webrtc.stopStreaming();
                }
            };
            Method.repositionScanId = function () {
                if (ScanIdAgeVerificationPage.instance.entity.VerificationStepGlobal.scanIdAgeVerificationInVideoBypassMode) {
                    return;
                }
                var elementPosition = Avs.Helper.ElementPositionCalculator.getScreenPositionFromConfig({
                    width: ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.container.width,
                    height: ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.container.height,
                    maxWidth: ScanIdAgeVerificationPage.Config.BOUNDARY_MAX_WIDTH,
                    maxHeight: ScanIdAgeVerificationPage.Config.BOUNDARY_MAX_HEIGHT,
                    boundary: {
                        top: ScanIdAgeVerificationPage.Config.BOUNDARY_TOP,
                        bottom: ScanIdAgeVerificationPage.Config.BOUNDARY_BOTTOM,
                        left: ScanIdAgeVerificationPage.Config.BOUNDARY_LEFT,
                        right: ScanIdAgeVerificationPage.Config.BOUNDARY_RIGHT
                    }
                });
                var innerElementPosition = Avs.Helper.ElementPositionCalculator.getScreenPositionRelativeToContainer({
                    width: ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.container.width,
                    height: ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.container.height,
                    maxWidth: ScanIdAgeVerificationPage.Config.BOUNDARY_MAX_WIDTH,
                    maxHeight: ScanIdAgeVerificationPage.Config.BOUNDARY_MAX_HEIGHT,
                    boundary: {
                        top: ScanIdAgeVerificationPage.Config.BOUNDARY_TOP,
                        bottom: ScanIdAgeVerificationPage.Config.BOUNDARY_BOTTOM,
                        left: ScanIdAgeVerificationPage.Config.BOUNDARY_LEFT,
                        right: ScanIdAgeVerificationPage.Config.BOUNDARY_RIGHT
                    }
                }, {
                    width: ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.birthDateArea.width,
                    height: ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.birthDateArea.height,
                    top: ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.birthDateArea.top,
                    left: ScanIdAgeVerificationPage.instance.entity.ScanIdAgeVerification.getIdTypeConfig().idSizeList.birthDateArea.left
                });
                Avs.Helper.ElementPositionCalculator.applyPositioning(ScanIdAgeVerificationPage.Config.ID_CARD_GUIDE_CONTAINER, elementPosition);
                Avs.Helper.ElementPositionCalculator.applyPositioning(ScanIdAgeVerificationPage.Config.ID_CARD_GUIDE_BIRTH_DATE_CONTAINER, innerElementPosition);
            };
            return Method;
        }());
        ScanIdAgeVerificationPage.Method = Method;
    })(ScanIdAgeVerificationPage = AvsFactory.ScanIdAgeVerificationPage || (AvsFactory.ScanIdAgeVerificationPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ScanIdAgeVerificationPage;
    (function (ScanIdAgeVerificationPage) {
        var Event = /** @class */ (function () {
            function Event() {
            }
            Event.init = function () {
                ScanIdAgeVerificationPage.instance.event.on(ScanIdAgeVerificationPage.Config.EVENT_NAME_PREFIX + '.' + Avs.DataChannel.Webrtc.ON_WEBCAM_INIT_ERROR, function (event) {
                    // allow error
                });
                ScanIdAgeVerificationPage.instance.event.on(ScanIdAgeVerificationPage.Config.EVENT_NAME_PREFIX + '.' + Avs.DataChannel.Webrtc.ON_VIDEO_PLAY, function (event) {
                    ScanIdAgeVerificationPage.Method.repositionScanId();
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLabelArea.setContent('');
                    ScanIdAgeVerificationPage.instance.ui.ScanIdAgeVerificationLoadingLabelArea.hide();
                    //Method.loadDetectionLibrary();
                });
            };
            return Event;
        }());
        ScanIdAgeVerificationPage.Event = Event;
    })(ScanIdAgeVerificationPage = AvsFactory.ScanIdAgeVerificationPage || (AvsFactory.ScanIdAgeVerificationPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var ScanIdAgeVerificationPage;
    (function (ScanIdAgeVerificationPage) {
        function init() {
            var scanIdAgeVerificationEntity = Avs.Entity.ScanIdAgeVerification.getInstance();
            var verificationStepGlobalEntity = Avs.Entity.VerificationStepGlobal.getInstance();
            var faceApiDetectorType = Avs.Plugin.Library.Ml.FaceApi.DETECTOR_TYPE_TINY_FACE_DETECTOR;
            if (verificationStepGlobalEntity.faceApiType == Avs.Entity.VerificationStepGlobal.FACE_API_TYPE_PRECISE) {
                faceApiDetectorType = Avs.Plugin.Library.Ml.FaceApi.DETECTOR_TYPE_SSD_MOBILE_NET_V1;
            }
            ScanIdAgeVerificationPage.instance = new Avs.SelfieAgeDetectionPage({
                debugLevel: ScanIdAgeVerificationPage.Config.DEFAULT_DEBUG_LEVEL,
                event: {
                    debugLevel: ScanIdAgeVerificationPage.Config.DEFAULT_DEBUG_LEVEL
                },
                plugin: {
                    Library: {
                        Ml: {
                            FaceApi: {
                                weightsPath: ScanIdAgeVerificationPage.Config.FACE_API_WEIGHTS_PATH,
                                canvasOverlayElementSelector: ScanIdAgeVerificationPage.Config.CAMERA_SOURCE_CANVAS_OVERLAY_ELEMENT,
                                videoElementSelector: ScanIdAgeVerificationPage.Config.CAMERA_SOURCE_ROOT_ELEMENT,
                                detectorType: faceApiDetectorType,
                                debugLevel: ScanIdAgeVerificationPage.Config.DEFAULT_DEBUG_LEVEL
                            },
                            Tesseract: {
                                idConfig: scanIdAgeVerificationEntity.getIdTypeConfig(),
                                workerPath: ScanIdAgeVerificationPage.Config.TESSERACT_WORKER_PATH,
                                languagePath: ScanIdAgeVerificationPage.Config.TESSERACT_LANGUAGE_PATH,
                                corePath: ScanIdAgeVerificationPage.Config.TESSERACT_CORE_PATH,
                                videoElementSelector: ScanIdAgeVerificationPage.Config.CAMERA_SOURCE_ROOT_ELEMENT,
                                debugLevel: ScanIdAgeVerificationPage.Config.DEFAULT_DEBUG_LEVEL
                            }
                        },
                        Video: {
                            CameraSource: {
                                debugLevel: ScanIdAgeVerificationPage.Config.DEFAULT_DEBUG_LEVEL,
                                webrtc: {
                                    debugLevel: ScanIdAgeVerificationPage.Config.DEFAULT_DEBUG_LEVEL,
                                    rootContainer: ScanIdAgeVerificationPage.Config.CAMERA_SOURCE_ROOT_ELEMENT_CONTAINER,
                                    rootElement: ScanIdAgeVerificationPage.Config.CAMERA_SOURCE_ROOT_ELEMENT,
                                    options: {
                                        streamVideoInputDevice: scanIdAgeVerificationEntity.videoDeviceId,
                                        facingMode: scanIdAgeVerificationEntity.facingMode,
                                        eventNamesPrefix: ScanIdAgeVerificationPage.Config.EVENT_NAME_PREFIX
                                    }
                                }
                            }
                        }
                    }
                }
            });
            ScanIdAgeVerificationPage.instance.entity.VerificationStepGlobal.stepId = Avs.Entity.VerificationStepGlobal.STEP_SCAN_ID_AGE_VERIFICATION_PAGE;
            ScanIdAgeVerificationPage.Ui.init();
            ScanIdAgeVerificationPage.Event.init();
            ScanIdAgeVerificationPage.Binding.init();
            ScanIdAgeVerificationPage.Method.init();
        }
        ScanIdAgeVerificationPage.init = init;
    })(ScanIdAgeVerificationPage = AvsFactory.ScanIdAgeVerificationPage || (AvsFactory.ScanIdAgeVerificationPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var SelfieAgeDetectionIntro;
    (function (SelfieAgeDetectionIntro) {
        var Config = /** @class */ (function () {
            function Config() {
            }
            Config.create = function (config) {
                Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;
            };
            Config.DEFAULT_DEBUG_LEVEL = 4;
            Config.API_BASE_ENDPOINT = '';
            Config.FACING_MODE_REQUIRED = 'user';
            return Config;
        }());
        SelfieAgeDetectionIntro.Config = Config;
    })(SelfieAgeDetectionIntro = AvsFactory.SelfieAgeDetectionIntro || (AvsFactory.SelfieAgeDetectionIntro = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var SelfieAgeDetectionIntro;
    (function (SelfieAgeDetectionIntro) {
        var Ui = /** @class */ (function () {
            function Ui() {
            }
            Ui.init = function () {
                SelfieAgeDetectionIntro.instance.ui = {
                    SelfieAgeDetectionStartButton: new Avs.Ui.Library.SelfieAgeDetectionStartButton(SelfieAgeDetectionIntro.instance.event),
                    SelfieAgeDetectionDeviceSelect: new Avs.Ui.Library.SelfieAgeDetectionDeviceSelect(SelfieAgeDetectionIntro.instance.event),
                    SelfieAgeDetectionDeviceAccessArea: new Avs.Ui.Library.SelfieAgeDetectionDeviceAccessArea(SelfieAgeDetectionIntro.instance.event),
                    SelfieAgeDetectionSubmitArea: new Avs.Ui.Library.SelfieAgeDetectionSubmitArea(SelfieAgeDetectionIntro.instance.event),
                    SelfieAgeDetectionDeviceSelectionArea: new Avs.Ui.Library.SelfieAgeDetectionDeviceSelectionArea(SelfieAgeDetectionIntro.instance.event),
                    SelfieAgeDetectionCancelButton: new Avs.Ui.Library.SelfieAgeDetectionCancelButton(SelfieAgeDetectionIntro.instance.event)
                };
                if (!SelfieAgeDetectionIntro.instance.entity.SelfieAgeDetection.resourcesPreloaded) {
                    SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionStartButton.disable();
                }
            };
            return Ui;
        }());
        SelfieAgeDetectionIntro.Ui = Ui;
    })(SelfieAgeDetectionIntro = AvsFactory.SelfieAgeDetectionIntro || (AvsFactory.SelfieAgeDetectionIntro = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var SelfieAgeDetectionIntro;
    (function (SelfieAgeDetectionIntro) {
        var Binding = /** @class */ (function () {
            function Binding() {
            }
            Binding.init = function () {
                SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionStartButton.onClick(function () {
                    if (SelfieAgeDetectionIntro.instance.entity.SelfieAgeDetection.facingMode === null) {
                        SelfieAgeDetectionIntro.instance.entity.SelfieAgeDetection.videoDeviceId = SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionDeviceSelect.getSelectedOption();
                    }
                    AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.SELFIE_AGE_DETECTION_PAGE_LAYER);
                    AvsFactory.SelfieAgeDetectionPage.init();
                });
                SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionCancelButton.onClick(function () {
                    AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.START_PAGE_LAYER);
                });
            };
            return Binding;
        }());
        SelfieAgeDetectionIntro.Binding = Binding;
    })(SelfieAgeDetectionIntro = AvsFactory.SelfieAgeDetectionIntro || (AvsFactory.SelfieAgeDetectionIntro = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var SelfieAgeDetectionIntro;
    (function (SelfieAgeDetectionIntro) {
        var Method = /** @class */ (function () {
            function Method() {
            }
            Method.init = function () {
                Avs.Helper.Common.hasCameraFacingMode(SelfieAgeDetectionIntro.Config.FACING_MODE_REQUIRED, function (facingModeExist) {
                    if (!facingModeExist) {
                        SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionDeviceSelect.clearAllOptions();
                        Avs.Helper.Common.getStreamDevices(function (devices) {
                            if (devices === null) {
                                AvsFactory.StartPage.Method.renderError(25034, 'Could not retrieve your device camera list');
                                return;
                            }
                            var videoInputDeviceIdList = {};
                            var foundDevicesNumber = 0;
                            SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionDeviceSelect.clearAllOptions();
                            for (var i = 0, j = devices.videoinput.length; i < j; i++) {
                                var device = devices.videoinput[i];
                                videoInputDeviceIdList[device.id] = true;
                                SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionDeviceSelect.addOption(device.label, device.id, device["default"]);
                                foundDevicesNumber++;
                            }
                            if (foundDevicesNumber > 1) {
                                SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionDeviceSelectionArea.show();
                            }
                            SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionDeviceAccessArea.hide();
                            SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionSubmitArea.show();
                        });
                    }
                    else {
                        SelfieAgeDetectionIntro.instance.entity.SelfieAgeDetection.facingMode = SelfieAgeDetectionIntro.Config.FACING_MODE_REQUIRED;
                        SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionDeviceAccessArea.hide();
                        SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionSubmitArea.show();
                    }
                });
            };
            return Method;
        }());
        SelfieAgeDetectionIntro.Method = Method;
    })(SelfieAgeDetectionIntro = AvsFactory.SelfieAgeDetectionIntro || (AvsFactory.SelfieAgeDetectionIntro = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var SelfieAgeDetectionIntro;
    (function (SelfieAgeDetectionIntro) {
        var Event = /** @class */ (function () {
            function Event() {
            }
            Event.init = function () {
                AvsFactory.StartPage.instance.event.on(Avs.Helper.FilePreloader.ON_PRELOAD_EVENT + '.' + AvsFactory.StartPage.Config.FACE_API_PRELOADER_NAME, function (event, data) {
                    if (data.total.progress == 100 && data.total.status === Avs.Helper.FilePreloader.FILE_STATUS_SUCCESS) {
                        SelfieAgeDetectionIntro.instance.ui.SelfieAgeDetectionStartButton.enable();
                    }
                });
            };
            return Event;
        }());
        SelfieAgeDetectionIntro.Event = Event;
    })(SelfieAgeDetectionIntro = AvsFactory.SelfieAgeDetectionIntro || (AvsFactory.SelfieAgeDetectionIntro = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var SelfieAgeDetectionIntro;
    (function (SelfieAgeDetectionIntro) {
        function init() {
            SelfieAgeDetectionIntro.instance = new Avs.SelfieAgeDetectionIntro({
                debugLevel: SelfieAgeDetectionIntro.Config.DEFAULT_DEBUG_LEVEL,
                event: {
                    debugLevel: SelfieAgeDetectionIntro.Config.DEFAULT_DEBUG_LEVEL
                }
            });
            SelfieAgeDetectionIntro.instance.entity.VerificationStepGlobal.stepId = Avs.Entity.VerificationStepGlobal.STEP_SELFIE_AGE_DETECTION_INTRO;
            SelfieAgeDetectionIntro.Ui.init();
            SelfieAgeDetectionIntro.Event.init();
            SelfieAgeDetectionIntro.Binding.init();
            SelfieAgeDetectionIntro.Method.init();
        }
        SelfieAgeDetectionIntro.init = init;
    })(SelfieAgeDetectionIntro = AvsFactory.SelfieAgeDetectionIntro || (AvsFactory.SelfieAgeDetectionIntro = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var SelfieAgeDetectionPage;
    (function (SelfieAgeDetectionPage) {
        var Config = /** @class */ (function () {
            function Config() {
            }
            Config.create = function (config) {
                Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;
                Config.API_BASE_ENDPOINT = config.apiBaseEndpoint || Config.API_BASE_ENDPOINT;
            };
            Config.DEFAULT_DEBUG_LEVEL = 4;
            Config.API_BASE_ENDPOINT = '';
            Config.CAMERA_SOURCE_ROOT_ELEMENT_CONTAINER = '#selfieVideoContainer';
            Config.CAMERA_SOURCE_ROOT_ELEMENT = '#selfieVideo';
            Config.CAMERA_SOURCE_CANVAS_OVERLAY_ELEMENT = '#selfieVideoOverlayCanvas';
            Config.FACE_GUIDE_ELEMENT = '#faceGuide';
            Config.FACE_API_WEIGHTS_PATH = '/static/js/appFiles/faw/';
            Config.MAX_VALID_FACE_SCAN_NUMBER = 5;
            Config.MAX_TOTAL_FACE_SCAN_NUMBER = 40;
            Config.MAX_TOTAL_FACE_EXPRESSION_SCAN_NUMBER = 40;
            Config.MIN_ALLOWED_AVERAGE_AGE = 25;
            Config.FACE_SCAN_INTERVAL_MS = 500;
            Config.EVENT_NAME_PREFIX = 'selfieAgeDetectionPage';
            Config.MAX_FACE_DISTANCE_TO_MATCH = 0.5;
            Config.MIN_VALID_FACE_MATCH = 5;
            Config.BOUNDARY_TOP = 40;
            Config.BOUNDARY_BOTTOM = 40;
            Config.BOUNDARY_LEFT = 40;
            Config.BOUNDARY_RIGHT = 40;
            Config.BOUNDARY_MAX_WIDTH = 800;
            Config.BOUNDARY_MAX_HEIGHT = 800;
            Config.BOUNDARY_WIDTH = 420;
            Config.BOUNDARY_HEIGHT = 600;
            return Config;
        }());
        SelfieAgeDetectionPage.Config = Config;
    })(SelfieAgeDetectionPage = AvsFactory.SelfieAgeDetectionPage || (AvsFactory.SelfieAgeDetectionPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var SelfieAgeDetectionPage;
    (function (SelfieAgeDetectionPage) {
        var Ui = /** @class */ (function () {
            function Ui() {
            }
            Ui.init = function () {
                SelfieAgeDetectionPage.instance.ui = {
                    SelfieAgeDetectionLoadingLabelPercentCounter: new Avs.Ui.Library.SelfieAgeDetectionLoadingLabelPercentCounter(SelfieAgeDetectionPage.instance.event),
                    SelfieAgeDetectionLoadingLabelArea: new Avs.Ui.Library.SelfieAgeDetectionLoadingLabelArea(SelfieAgeDetectionPage.instance.event),
                    SelfieAgeDetectionCurrentAgeArea: new Avs.Ui.Library.SelfieAgeDetectionCurrentAgeArea(SelfieAgeDetectionPage.instance.event),
                    SelfieAgeDetectionAverageAgeArea: new Avs.Ui.Library.SelfieAgeDetectionAverageAgeArea(SelfieAgeDetectionPage.instance.event),
                    SelfieAgeDetectionStatusLabel: new Avs.Ui.Library.SelfieAgeDetectionStatusLabel(SelfieAgeDetectionPage.instance.event),
                    FaceGuideSmileStartHintArea: new Avs.Ui.Library.FaceGuideSmileStartHintArea(SelfieAgeDetectionPage.instance.event),
                    FaceGuideSmileStopHintArea: new Avs.Ui.Library.FaceGuideSmileStopHintArea(SelfieAgeDetectionPage.instance.event),
                    FaceGuideAgeArea: new Avs.Ui.Library.FaceGuideAgeArea(SelfieAgeDetectionPage.instance.event),
                    FaceGuideSmileStartHintLabel: new Avs.Ui.Library.FaceGuideSmileStartHintLabel(SelfieAgeDetectionPage.instance.event),
                    FaceGuideSmileStopHintLabel: new Avs.Ui.Library.FaceGuideSmileStopHintLabel(SelfieAgeDetectionPage.instance.event)
                };
                SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.setStepNumber(5);
            };
            return Ui;
        }());
        SelfieAgeDetectionPage.Ui = Ui;
    })(SelfieAgeDetectionPage = AvsFactory.SelfieAgeDetectionPage || (AvsFactory.SelfieAgeDetectionPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var SelfieAgeDetectionPage;
    (function (SelfieAgeDetectionPage) {
        var Binding = /** @class */ (function () {
            function Binding() {
            }
            Binding.init = function () {
                $(window).on('resize', function () {
                    SelfieAgeDetectionPage.Method.repositionScanId();
                });
            };
            return Binding;
        }());
        SelfieAgeDetectionPage.Binding = Binding;
    })(SelfieAgeDetectionPage = AvsFactory.SelfieAgeDetectionPage || (AvsFactory.SelfieAgeDetectionPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var SelfieAgeDetectionPage;
    (function (SelfieAgeDetectionPage) {
        var Method = /** @class */ (function () {
            function Method() {
            }
            Method.init = function () {
                Method.initVideo();
            };
            Method.initVideo = function () {
                Method.repositionScanId();
                SelfieAgeDetectionPage.instance.plugin.Library.Video.CameraSource.getVideoElement().addClass('mirrored');
                SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionLoadingLabelArea.setContent('Trying to access your camera');
                SelfieAgeDetectionPage.instance.plugin.Library.Video.CameraSource.init();
                SelfieAgeDetectionPage.instance.plugin.Library.Video.CameraSource.showVideo();
            };
            Method.getAgeAreaString = function (label, age) {
                var detectedAgeString = label + ': ';
                if (age >= SelfieAgeDetectionPage.Config.MIN_ALLOWED_AVERAGE_AGE) {
                    detectedAgeString += 'Adult';
                }
                else {
                    detectedAgeString += 'Id card required';
                }
                if (Application.showDetectedAgeNumber) {
                    detectedAgeString += ' (' + age + ')';
                }
                return detectedAgeString;
            };
            Method.detectFace = function () {
                SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.totalScanNumber++;
                SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.detectFace(function (faceResult) {
                    SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Detect face.</p>');
                    SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.detectFaceAge(function (ageResult) {
                        SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Detect face age.</p>');
                        if (ageResult !== null && faceResult !== null) {
                            SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionStatusLabel.hide();
                            SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionStatusLabel.stopBlinking();
                            SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validScanNumber++;
                            SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.ageResultList.push(ageResult.age);
                            SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.averageAge = ageResult.averageAge;
                            SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionCurrentAgeArea.show();
                            SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionCurrentAgeArea.setContent(Method.getAgeAreaString('Current detected age', ageResult.age.toFixed()));
                            SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Current: ' + ageResult.age.toFixed() + ' Average: ' + ageResult.averageAge + '</p>');
                            SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.extractFaceImage(faceResult.detection, function (canvasFace) {
                                SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validCanvasFaceList.push(canvasFace[0]);
                                SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validFaceList.push(faceResult);
                                SelfieAgeDetectionPage.instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(canvasFace[0]));
                                Method.checkStep();
                            });
                        }
                        else {
                            SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionCurrentAgeArea.hide();
                            SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionStatusLabel.show();
                            SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionStatusLabel.startBlinking();
                            SelfieAgeDetectionPage.instance.debug.logToContainer('<p>No face found.</p>');
                            Method.checkStep();
                        }
                    });
                });
            };
            Method.checkStep = function () {
                if (SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validScanNumber == SelfieAgeDetectionPage.Config.MAX_VALID_FACE_SCAN_NUMBER) {
                    // detecting outliers
                    var outlierInstance = new Avs.Helper.Outlier(SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.ageResultList);
                    var outlierList = outlierInstance.findOutliers();
                    if (outlierList.length > 0) {
                        SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Age outliers found, recalculating average.</p>');
                        var noOutlierList = [];
                        for (var i = 0, j = SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.ageResultList.length; i < j; i++) {
                            if (!outlierInstance.testOutlier(SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.ageResultList[i])) {
                                noOutlierList.push(SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.ageResultList[i]);
                            }
                        }
                        SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.ageResultList = noOutlierList;
                        SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.averageAge = parseInt(Avs.Helper.Common.calculateAverage(noOutlierList).toFixed());
                    }
                    SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Final average age: ' + SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.averageAge + '</p>');
                    if (SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.averageAge == 0) {
                        Method.goToFailStep(25055, 'Could not detect any faces from your device video');
                        return;
                    }
                    // detection face similarity
                    SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Compare image faces for similarity.</p>');
                    for (var i = 0, j = SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validCanvasFaceList.length; i < j; i++) {
                        for (var ii = 0, jj = SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validCanvasFaceList.length; ii < jj; ii++) {
                            if (i >= ii) {
                                continue;
                            }
                            SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Image pair (' + i + ' - ' + ii + '):</p>');
                            SelfieAgeDetectionPage.instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validCanvasFaceList[i]));
                            SelfieAgeDetectionPage.instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validCanvasFaceList[ii]));
                            var distance = SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.compareFaceDescriptors(SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validFaceList[i].descriptor, SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validFaceList[ii].descriptor);
                            SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Face comparison distance: <span class="' + (distance <= SelfieAgeDetectionPage.Config.MAX_FACE_DISTANCE_TO_MATCH ? 'green' : 'red') + '">' + distance + '</span></p>');
                            var faceItsNotMatching = distance > SelfieAgeDetectionPage.Config.MAX_FACE_DISTANCE_TO_MATCH;
                            if (faceItsNotMatching) {
                                SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.totalInvalidFaceMatch++;
                            }
                        }
                    }
                    if (SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.totalInvalidFaceMatch >= SelfieAgeDetectionPage.Config.MIN_VALID_FACE_MATCH) {
                        SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Failed due to face comparison threshold: ' + SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.totalInvalidFaceMatch + '</p>');
                        Method.goToFailStep(25056, 'Face similarity check fail');
                        return;
                    }
                    if (SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.averageAge >= SelfieAgeDetectionPage.Config.MIN_ALLOWED_AVERAGE_AGE &&
                        SelfieAgeDetectionPage.instance.entity.VerificationStepGlobal.verificationType == Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL) {
                        if (Application.isLiveness) {
                            Method.checkExpressionStep();
                        }
                        else {
                            Method.goToSuccessStep();
                        }
                        return;
                    }
                    Method.goToNextStep();
                    return;
                }
                if (SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.totalScanNumber == SelfieAgeDetectionPage.Config.MAX_TOTAL_FACE_SCAN_NUMBER) {
                    Method.goToFailStep(25057, 'Could not detect enough faces from your device video');
                    return;
                }
                setTimeout(function () {
                    Method.detectFace();
                }, SelfieAgeDetectionPage.Config.FACE_SCAN_INTERVAL_MS);
            };
            Method.checkExpressionStep = function () {
                if (SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.totalExpressionScanNumber == SelfieAgeDetectionPage.Config.MAX_TOTAL_FACE_EXPRESSION_SCAN_NUMBER) {
                    Method.goToFailStep(25061, 'Could not detect enough faces from your device video');
                    return;
                }
                setTimeout(function () {
                    Method.detectFaceExpression();
                }, SelfieAgeDetectionPage.Config.FACE_SCAN_INTERVAL_MS);
            };
            Method.detectFaceExpression = function () {
                SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.totalExpressionScanNumber++;
                SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.detectFace(function (faceResult) {
                    SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Detect face.</p>');
                    SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.detectFaceExpression(function (faceExpressionResult) {
                        SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Detect face expression.</p>');
                        if (faceResult !== null && faceExpressionResult !== null && faceExpressionResult.expressionStrongest !== null) {
                            SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionStatusLabel.stopBlinking();
                            SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Detection face expression: ' + faceExpressionResult.expressionStrongest + '</p>');
                            SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.extractFaceImage(faceExpressionResult.detection, function (canvasFace) {
                                SelfieAgeDetectionPage.instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(canvasFace[0]));
                                if (SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validateSmileExpression === null) {
                                    SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validCanvasFaceList.push(canvasFace[0]);
                                    SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validFaceList.push(faceResult);
                                    SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validateSmileExpression = faceExpressionResult.expressionStrongest !== Avs.Plugin.Library.Ml.FaceApi.EXPRESSION_HAPPY;
                                    SelfieAgeDetectionPage.instance.ui.FaceGuideAgeArea.hide();
                                    if (SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validateSmileExpression) {
                                        SelfieAgeDetectionPage.instance.ui.FaceGuideSmileStartHintArea.show();
                                        SelfieAgeDetectionPage.instance.ui.FaceGuideSmileStartHintLabel.startBlinking();
                                    }
                                    else {
                                        SelfieAgeDetectionPage.instance.ui.FaceGuideSmileStopHintArea.show();
                                        SelfieAgeDetectionPage.instance.ui.FaceGuideSmileStopHintLabel.startBlinking();
                                    }
                                    SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Start looking for the opposite face expression.</p>');
                                }
                                else {
                                    if ((SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validateSmileExpression && faceExpressionResult.expressionStrongest === Avs.Plugin.Library.Ml.FaceApi.EXPRESSION_HAPPY) ||
                                        (!SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validateSmileExpression && faceExpressionResult.expressionStrongest !== Avs.Plugin.Library.Ml.FaceApi.EXPRESSION_HAPPY)) {
                                        SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Face expression found.</p>');
                                        var previousImageIndex = SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validFaceList.length - 1;
                                        SelfieAgeDetectionPage.instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validCanvasFaceList[previousImageIndex]));
                                        SelfieAgeDetectionPage.instance.debug.logToContainer(Avs.Helper.Canvas.canvasToImage(canvasFace[0]));
                                        var distance = SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.compareFaceDescriptors(SelfieAgeDetectionPage.instance.entity.SelfieAgeDetection.validFaceList[previousImageIndex].descriptor, faceResult.descriptor);
                                        SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Face comparison distance: <span class="' + (distance <= SelfieAgeDetectionPage.Config.MAX_FACE_DISTANCE_TO_MATCH ? 'green' : 'red') + '">' + distance + '</span></p>');
                                        var faceItsNotMatching = distance > SelfieAgeDetectionPage.Config.MAX_FACE_DISTANCE_TO_MATCH;
                                        if (faceItsNotMatching) {
                                            Method.goToFailStep(25062, 'Face similarity check fail');
                                            return;
                                        }
                                        Method.goToSuccessStep();
                                        return;
                                    }
                                }
                                Method.checkExpressionStep();
                            });
                        }
                        else {
                            SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionStatusLabel.startBlinking();
                            SelfieAgeDetectionPage.instance.debug.logToContainer('<p>No face found.</p>');
                            Method.checkExpressionStep();
                        }
                    });
                });
            };
            Method.goToNextStep = function () {
                AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER);
                AvsFactory.ScanIdAgeVerificationIntro.init();
                SelfieAgeDetectionPage.instance.plugin.Library.Video.CameraSource.datachannels.webrtc.stopStreaming();
            };
            Method.goToSuccessStep = function () {
                AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.RESULT_PAGE_SUCCESS_LAYER);
                AvsFactory.ResultPageSuccess.init();
                SelfieAgeDetectionPage.instance.plugin.Library.Video.CameraSource.datachannels.webrtc.stopStreaming();
            };
            Method.goToFailStep = function (failCode, failReason) {
                AvsFactory.StartPage.Method.showPageStep(AvsFactory.StartPage.Config.RESULT_PAGE_FAIL_LAYER);
                AvsFactory.ResultPageFail.init();
                AvsFactory.ResultPageFail.Method.saveError(failCode);
                AvsFactory.ResultPageFail.Method.renderFailReason(failCode + ': ' + failReason);
                SelfieAgeDetectionPage.instance.plugin.Library.Video.CameraSource.datachannels.webrtc.stopStreaming();
            };
            Method.repositionScanId = function () {
                var elementPosition = Avs.Helper.ElementPositionCalculator.getScreenPositionFromConfig({
                    width: SelfieAgeDetectionPage.Config.BOUNDARY_WIDTH,
                    height: SelfieAgeDetectionPage.Config.BOUNDARY_HEIGHT,
                    maxWidth: SelfieAgeDetectionPage.Config.BOUNDARY_MAX_WIDTH,
                    maxHeight: SelfieAgeDetectionPage.Config.BOUNDARY_MAX_HEIGHT,
                    boundary: {
                        top: SelfieAgeDetectionPage.Config.BOUNDARY_TOP,
                        bottom: SelfieAgeDetectionPage.Config.BOUNDARY_BOTTOM,
                        left: SelfieAgeDetectionPage.Config.BOUNDARY_LEFT,
                        right: SelfieAgeDetectionPage.Config.BOUNDARY_RIGHT
                    }
                });
                Avs.Helper.ElementPositionCalculator.applyPositioning(SelfieAgeDetectionPage.Config.FACE_GUIDE_ELEMENT, elementPosition);
            };
            return Method;
        }());
        SelfieAgeDetectionPage.Method = Method;
    })(SelfieAgeDetectionPage = AvsFactory.SelfieAgeDetectionPage || (AvsFactory.SelfieAgeDetectionPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var SelfieAgeDetectionPage;
    (function (SelfieAgeDetectionPage) {
        var Event = /** @class */ (function () {
            function Event() {
            }
            Event.init = function () {
                SelfieAgeDetectionPage.instance.event.on(SelfieAgeDetectionPage.Config.EVENT_NAME_PREFIX + '.' + Avs.DataChannel.Webrtc.ON_WEBCAM_INIT_ERROR, function (event) {
                    AvsFactory.StartPage.Method.renderError(25047, 'Webcam initialization error!');
                    return;
                });
                SelfieAgeDetectionPage.instance.event.on(SelfieAgeDetectionPage.Config.EVENT_NAME_PREFIX + '.' + Avs.DataChannel.Webrtc.ON_VIDEO_PLAY, function (event) {
                    SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionLoadingLabelArea.setContent('Initializing detection libraries ... ');
                    SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.setValue(0);
                    SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Starting face detection.</p>');
                    SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.loadDetector(function (result) {
                        if (result === null) {
                            AvsFactory.StartPage.Method.renderError(25035, 'Failed to initialize detection libraries');
                            return;
                        }
                        SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.increment();
                        SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Loaded detector.</p>');
                        SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.loadAgeGenderModel(function (result) {
                            if (result === null) {
                                AvsFactory.StartPage.Method.renderError(25036, 'Failed to initialize detection libraries');
                                return;
                            }
                            SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.increment();
                            SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Loaded age model.</p>');
                            SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.loadFaceRecognitionModel(function (result) {
                                if (result === null) {
                                    AvsFactory.StartPage.Method.renderError(25037, 'Failed to initialize detection libraries');
                                    return;
                                }
                                SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.increment();
                                SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Loaded face recognition model.</p>');
                                SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.loadLandmarksModel(function (result) {
                                    if (result === null) {
                                        AvsFactory.StartPage.Method.renderError(25038, 'Failed to initialize detection libraries');
                                        return;
                                    }
                                    SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.increment();
                                    SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Loaded face landmarks model.</p>');
                                    SelfieAgeDetectionPage.instance.plugin.Library.Ml.FaceApi.loadFaceExpressionModel(function (result) {
                                        if (result === null) {
                                            AvsFactory.StartPage.Method.renderError(25058, 'Failed to initialize detection libraries');
                                            return;
                                        }
                                        SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.increment();
                                        SelfieAgeDetectionPage.instance.debug.logToContainer('<p>Loaded face expression model.</p>');
                                        SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionLoadingLabelArea.setContent('Detection in progress');
                                        SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionLoadingLabelPercentCounter.hide();
                                        SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionStatusLabel.show();
                                        SelfieAgeDetectionPage.instance.ui.SelfieAgeDetectionStatusLabel.startBlinking();
                                        SelfieAgeDetectionPage.Method.detectFace();
                                    });
                                });
                            });
                        });
                    });
                });
            };
            return Event;
        }());
        SelfieAgeDetectionPage.Event = Event;
    })(SelfieAgeDetectionPage = AvsFactory.SelfieAgeDetectionPage || (AvsFactory.SelfieAgeDetectionPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var SelfieAgeDetectionPage;
    (function (SelfieAgeDetectionPage) {
        function init() {
            var selfieAgeDetectionEntity = Avs.Entity.SelfieAgeDetection.getInstance();
            var verificationStepGlobalEntity = Avs.Entity.VerificationStepGlobal.getInstance();
            var faceApiDetectorType = Avs.Plugin.Library.Ml.FaceApi.DETECTOR_TYPE_TINY_FACE_DETECTOR;
            if (verificationStepGlobalEntity.faceApiType == Avs.Entity.VerificationStepGlobal.FACE_API_TYPE_PRECISE) {
                faceApiDetectorType = Avs.Plugin.Library.Ml.FaceApi.DETECTOR_TYPE_SSD_MOBILE_NET_V1;
            }
            SelfieAgeDetectionPage.instance = new Avs.SelfieAgeDetectionPage({
                debugLevel: SelfieAgeDetectionPage.Config.DEFAULT_DEBUG_LEVEL,
                event: {
                    debugLevel: SelfieAgeDetectionPage.Config.DEFAULT_DEBUG_LEVEL
                },
                plugin: {
                    Library: {
                        Ml: {
                            FaceApi: {
                                weightsPath: SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH,
                                canvasOverlayElementSelector: SelfieAgeDetectionPage.Config.CAMERA_SOURCE_CANVAS_OVERLAY_ELEMENT,
                                videoElementSelector: SelfieAgeDetectionPage.Config.CAMERA_SOURCE_ROOT_ELEMENT,
                                detectorType: faceApiDetectorType,
                                debugLevel: SelfieAgeDetectionPage.Config.DEFAULT_DEBUG_LEVEL
                            }
                        },
                        Video: {
                            CameraSource: {
                                debugLevel: SelfieAgeDetectionPage.Config.DEFAULT_DEBUG_LEVEL,
                                webrtc: {
                                    debugLevel: SelfieAgeDetectionPage.Config.DEFAULT_DEBUG_LEVEL,
                                    rootContainer: SelfieAgeDetectionPage.Config.CAMERA_SOURCE_ROOT_ELEMENT_CONTAINER,
                                    rootElement: SelfieAgeDetectionPage.Config.CAMERA_SOURCE_ROOT_ELEMENT,
                                    options: {
                                        streamVideoInputDevice: selfieAgeDetectionEntity.videoDeviceId,
                                        facingMode: selfieAgeDetectionEntity.facingMode,
                                        eventNamesPrefix: SelfieAgeDetectionPage.Config.EVENT_NAME_PREFIX
                                    }
                                }
                            }
                        }
                    }
                }
            });
            SelfieAgeDetectionPage.instance.entity.VerificationStepGlobal.stepId = Avs.Entity.VerificationStepGlobal.STEP_SELFIE_AGE_DETECTION_PAGE;
            SelfieAgeDetectionPage.Ui.init();
            SelfieAgeDetectionPage.Event.init();
            SelfieAgeDetectionPage.Binding.init();
            SelfieAgeDetectionPage.Method.init();
        }
        SelfieAgeDetectionPage.init = init;
    })(SelfieAgeDetectionPage = AvsFactory.SelfieAgeDetectionPage || (AvsFactory.SelfieAgeDetectionPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var StartPage;
    (function (StartPage) {
        var Config = /** @class */ (function () {
            function Config() {
            }
            Config.create = function (config) {
                Config.DEFAULT_DEBUG_LEVEL = config.defaultBugLevel || Config.DEFAULT_DEBUG_LEVEL;
                Config.API_BASE_ENDPOINT = config.apiBaseEndpoint || Config.API_BASE_ENDPOINT;
                Config.POLLING_BASE_ENDPOINT = config.pollingBaseEndpoint || Config.POLLING_BASE_ENDPOINT;
                Config.VERIFICATION_VERSION = config.verificationVersion || Config.VERIFICATION_VERSION;
                Config.PARTNER_ID = config.partnerId || Config.PARTNER_ID;
                Config.PAYLOAD = config.payload || Config.PAYLOAD;
                Config.SESSION_ID = config.sessionId || Config.SESSION_ID;
                Config.PARTNER_COLOR_CONFIG = config.partnerColorConfig || Config.PARTNER_COLOR_CONFIG;
            };
            Config.MAIN_CONTAINER_SELECTOR = '#avsMainContainer';
            Config.START_PAGE_LAYER_SELECTOR = '#startPage';
            Config.SELFIE_AGE_DETECTION_INTRO_LAYER_SELECTOR = '#selfieAgeDetectionIntro';
            Config.SELFIE_AGE_DETECTION_PAGE_LAYER_SELECTOR = '#selfieAgeDetectionPage';
            Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER_SELECTOR = '#scanIdAgeVerificationIntro';
            Config.SCAN_ID_AGE_VERIFICATION_PAGE_LAYER_SELECTOR = '#scanIdAgeVerificationPage';
            Config.RESULT_PAGE_SUCCESS_LAYER_SELECTOR = '#resultPageSuccess';
            Config.RESULT_PAGE_FAIL_LAYER_SELECTOR = '#resultPageFail';
            Config.MAIN_CONTAINER_LAYER = $(Config.MAIN_CONTAINER_SELECTOR);
            Config.START_PAGE_LAYER = $(Config.START_PAGE_LAYER_SELECTOR);
            Config.SELFIE_AGE_DETECTION_INTRO_LAYER = $(Config.SELFIE_AGE_DETECTION_INTRO_LAYER_SELECTOR);
            Config.SELFIE_AGE_DETECTION_PAGE_LAYER = $(Config.SELFIE_AGE_DETECTION_PAGE_LAYER_SELECTOR);
            Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER = $(Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER_SELECTOR);
            Config.SCAN_ID_AGE_VERIFICATION_PAGE_LAYER = $(Config.SCAN_ID_AGE_VERIFICATION_PAGE_LAYER_SELECTOR);
            Config.RESULT_PAGE_SUCCESS_LAYER = $(Config.RESULT_PAGE_SUCCESS_LAYER_SELECTOR);
            Config.RESULT_PAGE_FAIL_LAYER = $(Config.RESULT_PAGE_FAIL_LAYER_SELECTOR);
            Config.FACE_API_PRELOADER_NAME = 'faceApiIncludes';
            Config.TESSERACT_PRELOADER_NAME = 'tesseractIncludes';
            Config.VERIFICATION_TYPE_DEFAULT = Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL;
            Config.EVENT_STATUS_REQUEST = 'avs.statusRequest';
            Config.EVENT_ON_VERIFICATION_DONE = 'avs.onVerificationDone';
            Config.EVENT_VERIFICATION_START = 'avs.verificationStart';
            Config.EVENT_RESOURCE_PRELOAD = 'avs.resourcePreload';
            Config.EVENT_ON_START_PAGE_LOADED = 'avs.onStartPageLoaded';
            Config.EVENT_ON_RESOURCES_LOADED = 'avs.onResourcesLoaded';
            Config.EVENT_SET_VERIFICATION_TYPE = 'avs.setVerificationType';
            Config.EVENT_ON_CLOSE_IFRAME = 'avs.onCloseIframe';
            Config.EVENT_ON_INITIAL_VERIFICATION_SUCCESS = 'avs.onInitialVerificationSuccess';
            Config.EVENT_ON_INITIAL_VERIFICATION_ERROR = 'avs.onInitialVerificationError';
            Config.EVENT_ON_INITIAL_VERIFICATION_FATAL_ERROR = 'avs.onInitialVerificationFatalError';
            Config.EVENT_ON_VERIFICATION_SUCCESS = 'avs.onVerificationSuccess';
            Config.EVENT_ON_VERIFICATION_ERROR = 'avs.onVerificationError';
            Config.VERIFICATION_VERSION_STANDARD_V1 = 1;
            Config.VERIFICATION_VERSION_IFRAME_V1 = 2;
            Config.VERIFICATION_VERSION = Config.VERIFICATION_VERSION_STANDARD_V1;
            Config.SESSION_ID = null;
            Config.PARTNER_COLOR_CONFIG = null;
            Config.DEFAULT_DEBUG_LEVEL = 4;
            Config.API_BASE_ENDPOINT = '';
            Config.KEY_LOCAL_STORAGE_TERMS_AGREED = 'GoCamLocalStorageTermsWereAgreed';
            Config.PARTNER_ID = 0;
            Config.PAYLOAD = '';
            Config.CREDIT_CARD_VERIFICATION_ENDPOINT = '';
            Config.POLLING_BASE_ENDPOINT = '/result';
            return Config;
        }());
        StartPage.Config = Config;
    })(StartPage = AvsFactory.StartPage || (AvsFactory.StartPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var StartPage;
    (function (StartPage) {
        var Ui = /** @class */ (function () {
            function Ui() {
            }
            Ui.init = function () {
                var _a;
                StartPage.instance.ui = {
                    StartButton: new Avs.Ui.Library.StartButton(StartPage.instance.event),
                    TermsAndConditionsCheckbox: new Avs.Ui.Library.TermsAndConditionsCheckbox(StartPage.instance.event),
                    VerificationTypeSelect: new Avs.Ui.Library.VerificationTypeSelect(StartPage.instance.event),
                    FaceApiTypeSelect: new Avs.Ui.Library.FaceApiTypeSelect(StartPage.instance.event),
                    TesseractTypeSelect: new Avs.Ui.Library.TesseractTypeSelect(StartPage.instance.event),
                    DebugCloseButton: new Avs.Ui.Library.DebugCloseButton(StartPage.instance.event),
                    DebugArea: new Avs.Ui.Library.DebugArea(StartPage.instance.event),
                    TesseractPreloaderPercentArea: new Avs.Ui.Library.TesseractPreloaderPercentArea(StartPage.instance.event),
                    TesseractPreloaderTextArea: new Avs.Ui.Library.TesseractPreloaderTextArea(StartPage.instance.event),
                    TesseractPreloaderArea: new Avs.Ui.Library.TesseractPreloaderArea(StartPage.instance.event),
                    FaceApiPreloaderPercentArea: new Avs.Ui.Library.FaceApiPreloaderPercentArea(StartPage.instance.event),
                    FaceApiPreloaderTextArea: new Avs.Ui.Library.FaceApiPreloaderTextArea(StartPage.instance.event),
                    FaceApiPreloaderArea: new Avs.Ui.Library.FaceApiPreloaderArea(StartPage.instance.event),
                    ErrorMessageArea: new Avs.Ui.Library.ErrorMessageArea(StartPage.instance.event),
                    ErrorMessageTextArea: new Avs.Ui.Library.ErrorMessageTextArea(StartPage.instance.event),
                    ErrorMessageStartOverButton: new Avs.Ui.Library.ErrorMessageStartOverButton(StartPage.instance.event),
                    ErrorMessageAdditionalTextArea: new Avs.Ui.Library.ErrorMessageAdditionalTextArea(StartPage.instance.event),
                    ErrorMessageQrTextArea: new Avs.Ui.Library.ErrorMessageQrTextArea(StartPage.instance.event),
                    VerificationTypeTabs: new Avs.Ui.Library.VerificationTypeTabs(StartPage.instance.event),
                    GlobalIframeCloseButton: new Avs.Ui.Library.GlobalIframeCloseButton(StartPage.instance.event),
                    StartPageErrorQrCode: new Avs.Ui.Library.StartPageErrorQrCode(StartPage.instance.event),
                    TermsAndConditionsBackButton: new Avs.Ui.Library.TermsAndConditionsBackButton(StartPage.instance.event),
                    WebCamAccessHelpBackButton: new Avs.Ui.Library.WebCamAccessHelpBackButton(StartPage.instance.event),
                    TermsAndConditionsArea: new Avs.Ui.Library.TermsAndConditionsArea(StartPage.instance.event),
                    WebCamAccessHelpArea: new Avs.Ui.Library.WebCamAccessHelpArea(StartPage.instance.event),
                    StartPageTermsArea: new Avs.Ui.Library.StartPageTermsArea(StartPage.instance.event)
                };
                var ipCountry = Application.ipCountry.toUpperCase();
                if (Application.forceIpCountry) {
                    ipCountry = Application.forceIpCountry.toUpperCase();
                }
                // get this dynamically later
                var countryToTabVisibilityConfig = {
                    "DE": (_a = {},
                        _a[Avs.Ui.Library.VerificationTypeTabs.TAB_SELFIE_NUMBER] = true,
                        _a[Avs.Ui.Library.VerificationTypeTabs.TAB_SCAN_ID_NUMBER] = false,
                        _a)
                };
                if (typeof countryToTabVisibilityConfig[ipCountry] != "undefined") {
                    if (!countryToTabVisibilityConfig[ipCountry][Avs.Ui.Library.VerificationTypeTabs.TAB_SELFIE_NUMBER]) {
                        StartPage.instance.ui.VerificationTypeTabs.hideTab(Avs.Ui.Library.VerificationTypeTabs.TAB_SELFIE_NUMBER);
                    }
                    if (!countryToTabVisibilityConfig[ipCountry][Avs.Ui.Library.VerificationTypeTabs.TAB_SCAN_ID_NUMBER]) {
                        StartPage.instance.ui.VerificationTypeTabs.hideTab(Avs.Ui.Library.VerificationTypeTabs.TAB_SCAN_ID_NUMBER);
                    }
                }
                // handle also the selected tab together with the visible tabs dynamically
                var defaultTab = StartPage.instance.ui.VerificationTypeTabs.verificationTypeToTabNumber(StartPage.Config.VERIFICATION_TYPE_DEFAULT);
                StartPage.instance.ui.VerificationTypeTabs.selectTab(defaultTab);
                var termsWereAgreed = Avs.Helper.Common.getLocalStorageBooleanValue(StartPage.Config.KEY_LOCAL_STORAGE_TERMS_AGREED);
                if (termsWereAgreed === true) {
                    StartPage.instance.ui.TermsAndConditionsCheckbox.check();
                    StartPage.instance.entity.VerificationStepGlobal.termsAndConditionAgreement = true;
                }
                StartPage.instance.ui.ErrorMessageAdditionalTextArea.hide();
                if (StartPage.Config.VERIFICATION_VERSION == StartPage.Config.VERIFICATION_VERSION_IFRAME_V1) {
                    StartPage.instance.ui.GlobalIframeCloseButton.show();
                }
            };
            return Ui;
        }());
        StartPage.Ui = Ui;
    })(StartPage = AvsFactory.StartPage || (AvsFactory.StartPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var StartPage;
    (function (StartPage) {
        var Binding = /** @class */ (function () {
            function Binding() {
            }
            Binding.init = function () {
                $(window).on('resize', function () {
                    StartPage.Method.setScreenOrientation();
                });
                StartPage.instance.ui.StartButton.onClick(function () {
                    if (!StartPage.instance.entity.VerificationStepGlobal.termsAndConditionAgreement) {
                        alert('Please agree with the terms and conditions first');
                        return;
                    }
                    StartPage.instance.entity.VerificationStepGlobal.faceApiType = Avs.Entity.VerificationStepGlobal.FACE_API_TYPE_FAST;
                    StartPage.instance.entity.VerificationStepGlobal.tesseractType = Avs.Entity.VerificationStepGlobal.TESSERACT_TYPE_PRECISE_FR;
                    switch (StartPage.instance.entity.VerificationStepGlobal.verificationType) {
                        case Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL:
                            AvsFactory.SelfieAgeDetectionIntro.init();
                            StartPage.Method.showPageStep(StartPage.Config.SELFIE_AGE_DETECTION_INTRO_LAYER);
                            break;
                        case Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SCAN_ID:
                            AvsFactory.ScanIdAgeVerificationIntro.init();
                            StartPage.Method.showPageStep(StartPage.Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER);
                            break;
                        default:
                        //
                    }
                });
                StartPage.instance.ui.TermsAndConditionsCheckbox.onChange(function () {
                    StartPage.instance.entity.VerificationStepGlobal.termsAndConditionAgreement = StartPage.instance.ui.TermsAndConditionsCheckbox.states.value;
                    Avs.Helper.Common.setLocalStorageValue(StartPage.Config.KEY_LOCAL_STORAGE_TERMS_AGREED, StartPage.instance.ui.TermsAndConditionsCheckbox.states.value);
                });
                StartPage.instance.ui.DebugCloseButton.onClick(function () {
                    StartPage.instance.ui.DebugArea.hide();
                });
                StartPage.instance.ui.ErrorMessageStartOverButton.onClick(function () {
                    window.location.reload();
                });
                StartPage.instance.ui.GlobalIframeCloseButton.onClick(function () {
                    StartPage.instance.postMessage.emit(StartPage.Config.EVENT_ON_CLOSE_IFRAME);
                    StartPage.instance.postMessage.emit(StartPage.Config.EVENT_ON_VERIFICATION_DONE, {
                        status: StartPage.instance.entity.VerificationStepGlobal.isVerified,
                        payload: StartPage.instance.entity.VerificationStepGlobal.successPayload
                    });
                    // allow the success payload to be verified
                    if (StartPage.instance.entity.VerificationStepGlobal.isVerified) {
                        StartPage.instance.postMessage.emit(StartPage.Config.EVENT_ON_VERIFICATION_SUCCESS, {
                            status: StartPage.instance.entity.VerificationStepGlobal.isVerified,
                            payload: StartPage.instance.entity.VerificationStepGlobal.successPayload
                        });
                    }
                    // restart the whole process
                    else {
                        window.location.reload();
                    }
                });
                StartPage.instance.ui.StartPageTermsArea.element.on('click', 'a', function () {
                    StartPage.instance.ui.TermsAndConditionsArea.show();
                    return false;
                });
                StartPage.instance.ui.TermsAndConditionsBackButton.onClick(function () {
                    StartPage.instance.ui.TermsAndConditionsArea.hide();
                });
                StartPage.instance.ui.ErrorMessageAdditionalTextArea.element.on('click', 'a', function () {
                    StartPage.instance.ui.WebCamAccessHelpArea.show();
                    StartPage.instance.ui.ErrorMessageArea.hide();
                    return false;
                });
                StartPage.instance.ui.WebCamAccessHelpBackButton.onClick(function () {
                    StartPage.instance.ui.WebCamAccessHelpArea.hide();
                    StartPage.instance.ui.ErrorMessageArea.show();
                });
            };
            return Binding;
        }());
        StartPage.Binding = Binding;
    })(StartPage = AvsFactory.StartPage || (AvsFactory.StartPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var StartPage;
    (function (StartPage) {
        var Method = /** @class */ (function () {
            function Method() {
            }
            Method.init = function () {
                // https://github.com/mexitek/phpColors/blob/master/src/Mexitek/PHPColors/Color.php#L474
                Method.applyPartnerColor();
                $('body').attr('style', '');
                StartPage.instance.postMessage.emit(StartPage.Config.EVENT_ON_START_PAGE_LOADED);
                StartPage.instance.entity.VerificationStepGlobal.verificationType = StartPage.Config.VERIFICATION_TYPE_DEFAULT;
                StartPage.instance.entity.VerificationStepGlobal.partnerId = StartPage.Config.PARTNER_ID;
                StartPage.instance.entity.VerificationStepGlobal.payload = StartPage.Config.PAYLOAD;
                StartPage.instance.entity.VerificationStepGlobal.sessionId = StartPage.Config.SESSION_ID;
                if (!Avs.Helper.Common.isWebrtcSupported() && !Avs.Helper.Common.isCanvasSupported()) {
                    Method.renderError(25001, 'Your device it\'s not supported');
                    return;
                }
                Method.setScreenOrientation();
                Method.showPageStep(StartPage.Config.START_PAGE_LAYER);
                StartPage.instance.ui.FaceApiPreloaderArea.show();
                Method.preloadFaceApiResources();
                if (StartPage.Config.VERIFICATION_VERSION == StartPage.Config.VERIFICATION_VERSION_IFRAME_V1) {
                    Method.preloadTesseractResources();
                }
            };
            Method.applyPartnerColor = function () {
                if (StartPage.Config.PARTNER_COLOR_CONFIG !== null) {
                    if (typeof StartPage.Config.PARTNER_COLOR_CONFIG.body.foregroundCallToAction === 'undefined') {
                        StartPage.Config.PARTNER_COLOR_CONFIG.body.foregroundCallToAction = StartPage.Config.PARTNER_COLOR_CONFIG.body.foreground;
                    }
                    $("<style type='text/css'>\n\t\t\n\t\t\t\t\t\t\tbody,\n\t\t\t\t\t\t\t#avsMainContainer .page.layoutDocumentProcessing,\n\t\t\t\t\t\t\t#avsMainContainer .page.layoutDocumentProcessing .imageContainer .loadingOverlay,\n\t\t\t\t\t\t\t#avsMainContainer .page.layoutError,\n\t\t\t\t\t\t\t#avsMainContainer .page.layoutStaticPage,\n\t\t\t\t\t\t\t#avsMainContainer .page.layoutTextBlock,\n\t\t\t\t\t\t\t#avsMainContainer .page.layoutTextBlock a,\n\t\t\t\t\t\t\t#avsMainContainer .page .informationArea.layoutBlack,\n\t\t\t\t\t\t\t#avsMainContainer .preloader,\n\t\t\t\t\t\t\t#avsMainContainer .page.layoutDocumentProcessing .processArea .checkOutList .checkOutItem .statusIcon {\n\t\t\t\t\t\t\t\tbackground-color: " + StartPage.Config.PARTNER_COLOR_CONFIG.body.background + ";\n\t\t\t\t\t\t\t\tcolor: " + StartPage.Config.PARTNER_COLOR_CONFIG.body.foreground + ";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t#avsMainContainer .page.layoutDocumentProcessing .imageContainer .loadingOverlay {\n\t\t\t\t\t\t\t\topacity: 0.7\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t#avsMainContainer .page .iconArea .iconItem .iconImage svg {\n\t\t\t\t\t\t\t\tfill: " + StartPage.Config.PARTNER_COLOR_CONFIG.body.foreground + ";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t#avsMainContainer .page .iconArea .iconItem.isSelected .iconImage svg {\n\t\t\t\t\t\t\t\tfill: " + StartPage.Config.PARTNER_COLOR_CONFIG.body.button.foregroundCallToAction + ";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t#avsMainContainer .page .submitArea .button,\n\t\t\t\t\t\t\t#avsMainContainer .page .submitArea .button.layoutRed,\n\t\t\t\t\t\t\t#avsMainContainer .page .submitArea .button.layoutGreen {\n\t\t\t\t\t\t\t\tcolor: " + StartPage.Config.PARTNER_COLOR_CONFIG.body.button.foregroundCallToAction + ";\n\t\t\t\t\t\t\t\tbackground-color: " + StartPage.Config.PARTNER_COLOR_CONFIG.body.button.background + ";\n\t\t\t\t\t\t\t\tborder-color: " + Avs.Helper.Common.hexToRgbA(StartPage.Config.PARTNER_COLOR_CONFIG.body.button.background, 0.4) + ";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t#avsMainContainer .page .iconArea .iconItem.isSelected .iconImage,\n\t\t\t\t\t\t\t#avsMainContainer .page .introIcon,\n\t\t\t\t\t\t\t#avsMainContainer .page .introIcon.layoutRed,\n\t\t\t\t\t\t\t#avsMainContainer .page .introIcon.layoutGreen {\n\t\t\t\t\t\t\t\tfill: " + StartPage.Config.PARTNER_COLOR_CONFIG.body.button.foreground + ";\n\t\t\t\t\t\t\t\tbackground-color: " + StartPage.Config.PARTNER_COLOR_CONFIG.body.button.background + ";\n\t\t\t\t\t\t\t\tborder-color: " + Avs.Helper.Common.hexToRgbA(StartPage.Config.PARTNER_COLOR_CONFIG.body.button.background, 0.4) + ";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t#avsMainContainer .page .termsArea label a {\n\t\t\t\t\t\t\t\tcolor: " + StartPage.Config.PARTNER_COLOR_CONFIG.body.foregroundCallToAction + ";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t#globalIframeCloseButton {\n\t\t\t\t\t\t\t\tbackground-color: " + Avs.Helper.Common.hexToRgbA(StartPage.Config.PARTNER_COLOR_CONFIG.body.background, 0.7) + ";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t#avsMainContainer .page .iconArea .iconItem.isSelected .iconLabel .verificationTypeRadioButton {\n\t\t\t\t\t\t\t\tbackground-color: " + Avs.Helper.Common.hexToRgbA(StartPage.Config.PARTNER_COLOR_CONFIG.body.button.background, 1) + ";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t#avsMainContainer .page .iconArea .iconItem .iconLabel .verificationTypeRadioButton {\n\t\t\t\t\t\t\t\tborder-color: " + StartPage.Config.PARTNER_COLOR_CONFIG.body.button.background + ";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t#avsMainContainer .page .iconArea .iconItem.isSelected .iconLabel .verificationTypeRadioButton:after {\n\t\t\t\t\t\t\t\tbackground-color: " + StartPage.Config.PARTNER_COLOR_CONFIG.body.button.foregroundCallToAction + ";\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t</style>").appendTo("head");
                    // go.cam logo replace disabled for now
                    // $(`.headerLogo img`).attr('src', Config.PARTNER_COLOR_CONFIG.header.logo);
                }
            };
            Method.hideAllStepPages = function () {
                if (!StartPage.Config.START_PAGE_LAYER.hasClass('isHidden')) {
                    StartPage.Config.START_PAGE_LAYER.addClass('isHidden');
                }
                if (!StartPage.Config.SELFIE_AGE_DETECTION_INTRO_LAYER.hasClass('isHidden')) {
                    StartPage.Config.SELFIE_AGE_DETECTION_INTRO_LAYER.addClass('isHidden');
                }
                if (!StartPage.Config.SELFIE_AGE_DETECTION_PAGE_LAYER.hasClass('isHidden')) {
                    StartPage.Config.SELFIE_AGE_DETECTION_PAGE_LAYER.addClass('isHidden');
                }
                if (!StartPage.Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER.hasClass('isHidden')) {
                    StartPage.Config.SCAN_ID_AGE_VERIFICATION_INTRO_LAYER.addClass('isHidden');
                }
                if (!StartPage.Config.SCAN_ID_AGE_VERIFICATION_PAGE_LAYER.hasClass('isHidden')) {
                    StartPage.Config.SCAN_ID_AGE_VERIFICATION_PAGE_LAYER.addClass('isHidden');
                }
                if (!StartPage.Config.RESULT_PAGE_SUCCESS_LAYER.hasClass('isHidden')) {
                    StartPage.Config.RESULT_PAGE_SUCCESS_LAYER.addClass('isHidden');
                }
                if (!StartPage.Config.RESULT_PAGE_FAIL_LAYER.hasClass('isHidden')) {
                    StartPage.Config.RESULT_PAGE_FAIL_LAYER.addClass('isHidden');
                }
            };
            Method.showPageStep = function (step) {
                Method.hideAllStepPages();
                step.removeClass('isHidden');
            };
            Method.setScreenOrientation = function () {
                StartPage.Config.MAIN_CONTAINER_LAYER.removeClass(Avs.Helper.ResponsiveElements.DEVICE_ORIENTATION_PORTRAIT);
                StartPage.Config.MAIN_CONTAINER_LAYER.removeClass(Avs.Helper.ResponsiveElements.DEVICE_ORIENTATION_LANDSCAPE);
                var screenOrientation = Avs.Helper.ResponsiveElements.getDeviceOrientation();
                StartPage.instance.entity.VerificationStepGlobal.screenOrientation = screenOrientation;
                StartPage.Config.MAIN_CONTAINER_LAYER.addClass(screenOrientation);
            };
            Method.preloadFaceApiResources = function () {
                //tiny_face_detector_model-weights_manifest.json
                //tiny_face_detector_model-shard1
                //age_gender_model-weights_manifest.json
                //age_gender_model-shard1
                //face_recognition_model-weights_manifest.json
                //face_recognition_model-shard1
                //face_recognition_model-shard2
                //face_landmark_68_model-weights_manifest.json
                //face_landmark_68_model-shard1
                //face_expression_model-weights_manifest.json
                //face_expression_model-shard1
                var faceApiPreloader = new Avs.Helper.FilePreloader([
                    AvsFactory.SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'tiny_face_detector_model-weights_manifest.json',
                    AvsFactory.SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'tiny_face_detector_model-shard1',
                    AvsFactory.SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'age_gender_model-weights_manifest.json',
                    AvsFactory.SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'age_gender_model-shard1',
                    AvsFactory.SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_recognition_model-weights_manifest.json',
                    AvsFactory.SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_recognition_model-shard1',
                    AvsFactory.SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_recognition_model-shard2',
                    AvsFactory.SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_landmark_68_model-weights_manifest.json',
                    AvsFactory.SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_landmark_68_model-shard1',
                    AvsFactory.SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_expression_model-weights_manifest.json',
                    AvsFactory.SelfieAgeDetectionPage.Config.FACE_API_WEIGHTS_PATH + 'face_expression_model-shard1'
                ], StartPage.instance.event, StartPage.Config.FACE_API_PRELOADER_NAME);
                faceApiPreloader.startPreloading();
            };
            Method.preloadTesseractResources = function () {
                // tesseract-js-core-2.0.0/tesseract-core.asm.js
                // tesseract-js-2.1.1/worker.min.js
                // tesseract-js-core-2.0.0/tessdata/best/fra.traineddata.gz
                var tesseractPreloader = new Avs.Helper.FilePreloader([
                    AvsFactory.ScanIdAgeVerificationPage.Config.TESSERACT_CORE_PATH,
                    AvsFactory.ScanIdAgeVerificationPage.Config.TESSERACT_WORKER_PATH,
                    AvsFactory.ScanIdAgeVerificationPage.Config.TESSERACT_LANGUAGE_PATH + '/fra.traineddata.gz'
                ], StartPage.instance.event, StartPage.Config.TESSERACT_PRELOADER_NAME);
                tesseractPreloader.startPreloading();
            };
            Method.renderError = function (errorCode, errorMessage) {
                StartPage.instance.ui.ErrorMessageArea.show();
                StartPage.instance.ui.ErrorMessageTextArea.setContent(errorCode + ': ' + errorMessage);
                switch (errorCode) {
                    case 25034:
                    case 25039:
                    case 25047:
                        StartPage.instance.ui.ErrorMessageAdditionalTextArea.show();
                        StartPage.instance.ui.ErrorMessageAdditionalTextArea.setContent('Make sure the webcam access it\'s not blocked, <a href="/help/webcamAccess">click here for help</a>');
                        break;
                    default:
                    //
                }
                StartPage.instance.ui.ErrorMessageQrTextArea.hide();
                if (!Application.deviceInfo['os.mobile']) {
                    StartPage.instance.ui.ErrorMessageQrTextArea.show();
                    StartPage.instance.ui.StartPageErrorQrCode.renderTestToOtherDeviceQr();
                    StartPage.instance.startApiPolling(StartPage.instance.entity.VerificationStepGlobal.partnerId, StartPage.instance.entity.VerificationStepGlobal.payload);
                }
                AvsFactory.ResultPageFail.init();
                AvsFactory.ResultPageFail.Method.saveError(errorCode);
            };
            Method.goToSuccessStep = function () {
                StartPage.Method.showPageStep(StartPage.Config.RESULT_PAGE_SUCCESS_LAYER);
                AvsFactory.ResultPageSuccess.init();
            };
            return Method;
        }());
        StartPage.Method = Method;
    })(StartPage = AvsFactory.StartPage || (AvsFactory.StartPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var StartPage;
    (function (StartPage) {
        var Event = /** @class */ (function () {
            function Event() {
            }
            Event.init = function () {
                StartPage.instance.event.on(Avs.Ui.Library.VerificationTypeTabs.ON_TAB_SELECTED, function (event, data) {
                    StartPage.instance.entity.VerificationStepGlobal.verificationType = StartPage.instance.ui.VerificationTypeTabs.tabNumberToVerificationType(data.tabNumber);
                });
                StartPage.instance.event.on(Avs.Helper.FilePreloader.ON_PRELOAD_EVENT + '.' + StartPage.Config.FACE_API_PRELOADER_NAME, function (event, data) {
                    StartPage.instance.ui.FaceApiPreloaderPercentArea.setContent(data.total.progress + '%');
                    if (data.total.progress == 100 && data.total.status === Avs.Helper.FilePreloader.FILE_STATUS_SUCCESS) {
                        StartPage.instance.entity.SelfieAgeDetection.resourcesPreloaded = true;
                        StartPage.instance.ui.FaceApiPreloaderArea.fadeOut();
                        StartPage.instance.postMessage.emit(StartPage.Config.EVENT_ON_RESOURCES_LOADED);
                        return;
                    }
                    if (data.total.status === Avs.Helper.FilePreloader.FILE_STATUS_ERROR) {
                        StartPage.Method.renderError(25032, 'Preloading verification resources failed');
                        return;
                    }
                });
                StartPage.instance.event.on(Avs.Helper.FilePreloader.ON_PRELOAD_EVENT + '.' + StartPage.Config.TESSERACT_PRELOADER_NAME, function (event, data) {
                    StartPage.instance.ui.TesseractPreloaderPercentArea.setContent(data.total.progress + '%');
                    if (data.total.progress == 100 && data.total.status === Avs.Helper.FilePreloader.FILE_STATUS_SUCCESS) {
                        StartPage.instance.entity.ScanIdAgeVerification.resourcesPreloaded = true;
                        StartPage.instance.ui.TesseractPreloaderArea.fadeOut();
                        return;
                    }
                    if (data.total.status === Avs.Helper.FilePreloader.FILE_STATUS_ERROR) {
                        StartPage.Method.renderError(25033, 'Preloading verification resources failed');
                        return;
                    }
                });
                StartPage.instance.event.on(Avs.StartPage.ON_POLL_DATA, function (event, data) {
                    if (typeof data.isValidated !== 'undefined' && data.isValidated) {
                        StartPage.instance.stopApiPolling();
                        StartPage.instance.ui.ErrorMessageArea.hide();
                        StartPage.instance.entity.VerificationStepGlobal.deviceLocationVerification = Avs.Entity.VerificationStepGlobal.DEVICE_LOCATION_VERIFICATION_EXTERNAL;
                        StartPage.Method.goToSuccessStep();
                    }
                });
                StartPage.instance.event.on(Avs.StartPage.ON_POLL_ERROR, function (event, data) {
                    StartPage.instance.debug.logToContainer('Qr verification polling error: ' + data.msg);
                });
            };
            return Event;
        }());
        StartPage.Event = Event;
    })(StartPage = AvsFactory.StartPage || (AvsFactory.StartPage = {}));
})(AvsFactory || (AvsFactory = {}));

"use strict";

"use strict";
function appGetInternalState() {
    var verificationStepGlobal = Avs.Entity.VerificationStepGlobal.getInstance();
    var selfieAgeDetection = Avs.Entity.SelfieAgeDetection.getInstance();
    var scanIdAgeVerification = Avs.Entity.ScanIdAgeVerification.getInstance();
    return {
        verificationStepGlobal: verificationStepGlobal,
        selfieAgeDetection: selfieAgeDetection,
        scanIdAgeVerification: scanIdAgeVerification
    };
}

"use strict";
var AvsFactory;
(function (AvsFactory) {
    var StartPage;
    (function (StartPage) {
        function init() {
            StartPage.instance = new Avs.StartPage({
                debugLevel: StartPage.Config.DEFAULT_DEBUG_LEVEL,
                api: {
                    pollingEndpoint: StartPage.Config.POLLING_BASE_ENDPOINT
                },
                event: {
                    debugLevel: StartPage.Config.DEFAULT_DEBUG_LEVEL
                }
            });
            StartPage.Ui.init();
            StartPage.Event.init();
            StartPage.Binding.init();
            StartPage.Method.init();
        }
        StartPage.init = init;
    })(StartPage = AvsFactory.StartPage || (AvsFactory.StartPage = {}));
})(AvsFactory || (AvsFactory = {}));
