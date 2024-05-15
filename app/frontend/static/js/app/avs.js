"use strict";
var Avs;
(function (Avs) {
    var Config;
    (function (Config) {
        Config.scanIdList = {
            "AT": {
                "countryName": "Austria",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2010,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890.",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 374,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 186,
                                    "height": 74,
                                    "top": 246,
                                    "left": 136
                                },
                                "faceArea": {
                                    "width": 122,
                                    "height": 125,
                                    "top": 129,
                                    "left": 419,
                                    "birthDateAreaDistance": {
                                        "top": 117,
                                        "left": -283
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890.",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 374,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 168,
                                    "height": 66,
                                    "top": 252,
                                    "left": 204
                                },
                                "faceArea": {
                                    "width": 193,
                                    "height": 173,
                                    "top": 148,
                                    "left": 24,
                                    "birthDateAreaDistance": {
                                        "top": 104,
                                        "left": 180
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2014,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890.",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 414,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 196,
                                    "height": 64,
                                    "top": 104,
                                    "left": 389
                                },
                                "faceArea": {
                                    "width": 115,
                                    "height": 117,
                                    "top": 135,
                                    "left": 52,
                                    "birthDateAreaDistance": {
                                        "top": -31,
                                        "left": 337
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2023,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890.",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 423,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 156,
                                    "height": 54,
                                    "top": 166,
                                    "left": 167
                                },
                                "faceArea": {
                                    "width": 158,
                                    "height": 151,
                                    "top": 150,
                                    "left": 32,
                                    "birthDateAreaDistance": {
                                        "top": 16,
                                        "left": 135
                                    }
                                }
                            },
                            "idRegionZoom": 3
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2006,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890.- ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3\\. ([0-9]{4}).*([0-9]{2}).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 372,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 201,
                                    "height": 62,
                                    "top": 144,
                                    "left": 179
                                },
                                "faceArea": {
                                    "width": 112,
                                    "height": 110,
                                    "top": 161,
                                    "left": 49,
                                    "birthDateAreaDistance": {
                                        "top": -17,
                                        "left": 130
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2014,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890.",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3\\.([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 374,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 177,
                                    "height": 66,
                                    "top": 122,
                                    "left": 157
                                },
                                "faceArea": {
                                    "width": 112,
                                    "height": 111,
                                    "top": 149,
                                    "left": 39,
                                    "birthDateAreaDistance": {
                                        "top": -27,
                                        "left": 118
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "BE": {
                "countryName": "Belgium",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 JANFEBMRPYULGSTOCVD",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{1,2}).*(JAN|FEB|MAART|APR|MEI|JUNI|JULI|AUG|SEPT|OCT|NOV|DEC).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "be",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 380,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 180,
                                    "height": 83,
                                    "top": 100,
                                    "left": 198
                                },
                                "faceArea": {
                                    "width": 119,
                                    "height": 100,
                                    "top": 223,
                                    "left": 445,
                                    "birthDateAreaDistance": {
                                        "top": -123,
                                        "left": -247
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2014,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 413,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 175,
                                    "height": 69,
                                    "top": 135,
                                    "left": 311
                                },
                                "faceArea": {
                                    "width": 131,
                                    "height": 120,
                                    "top": 143,
                                    "left": 37,
                                    "birthDateAreaDistance": {
                                        "top": -8,
                                        "left": 274
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2022,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 40,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 407,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 159,
                                    "height": 74,
                                    "top": 119,
                                    "left": 288
                                },
                                "faceArea": {
                                    "width": 119,
                                    "height": 129,
                                    "top": 141,
                                    "left": 42,
                                    "birthDateAreaDistance": {
                                        "top": -22,
                                        "left": 246
                                    }
                                }
                            },
                            "idRegionZoom": 3
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890.",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3\\.([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 387,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 212,
                                    "height": 60,
                                    "top": 94,
                                    "left": 180
                                },
                                "faceArea": {
                                    "width": 105,
                                    "height": 106,
                                    "top": 185,
                                    "left": 73,
                                    "birthDateAreaDistance": {
                                        "top": -91,
                                        "left": 107
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2019,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890.",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3\\.([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 380,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 212,
                                    "height": 65,
                                    "top": 88,
                                    "left": 183
                                },
                                "faceArea": {
                                    "width": 107,
                                    "height": 105,
                                    "top": 172,
                                    "left": 60,
                                    "birthDateAreaDistance": {
                                        "top": -84,
                                        "left": 123
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "BG": {
                "countryName": "Bulgaria",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2010,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. th",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/th ([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 378,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 171,
                                    "height": 48,
                                    "top": 234,
                                    "left": 354
                                },
                                "faceArea": {
                                    "width": 118,
                                    "height": 106,
                                    "top": 150,
                                    "left": 48,
                                    "birthDateAreaDistance": {
                                        "top": 84,
                                        "left": 306
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2010,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 418,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 135,
                                    "height": 58,
                                    "top": 156,
                                    "left": 157
                                },
                                "faceArea": {
                                    "width": 127,
                                    "height": 119,
                                    "top": 152,
                                    "left": 32,
                                    "birthDateAreaDistance": {
                                        "top": 4,
                                        "left": 125
                                    }
                                }
                            },
                            "idRegionZoom": 3
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. a",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/[3|2]{1} ([0-9]{2})\\.([0-9]{2})\\.([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 0,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 388,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 188,
                                    "height": 60,
                                    "top": 157,
                                    "left": 170
                                },
                                "faceArea": {
                                    "width": 124,
                                    "height": 130,
                                    "top": 141,
                                    "left": 39,
                                    "birthDateAreaDistance": {
                                        "top": 16,
                                        "left": 131
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "HR": {
                "countryName": "Croatia",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 163,
                                    "height": 74,
                                    "top": 241,
                                    "left": 221
                                },
                                "faceArea": {
                                    "width": 146,
                                    "height": 131,
                                    "top": 215,
                                    "left": 398,
                                    "birthDateAreaDistance": {
                                        "top": 26,
                                        "left": -177
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 179,
                                    "height": 84,
                                    "top": 174,
                                    "left": 414
                                },
                                "faceArea": {
                                    "width": 165,
                                    "height": 157,
                                    "top": 191,
                                    "left": 31,
                                    "birthDateAreaDistance": {
                                        "top": -17,
                                        "left": 383
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2009,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 421,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 143,
                                    "height": 66,
                                    "top": 161,
                                    "left": 149
                                },
                                "faceArea": {
                                    "width": 123,
                                    "height": 112,
                                    "top": 170,
                                    "left": 37,
                                    "birthDateAreaDistance": {
                                        "top": -9,
                                        "left": 112
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 409,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 155,
                                    "height": 66,
                                    "top": 148,
                                    "left": 133
                                },
                                "faceArea": {
                                    "width": 107,
                                    "height": 101,
                                    "top": 160,
                                    "left": 37,
                                    "birthDateAreaDistance": {
                                        "top": -12,
                                        "left": 96
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3\\. ([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 383,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 170,
                                    "height": 59,
                                    "top": 108,
                                    "left": 160
                                },
                                "faceArea": {
                                    "width": 125,
                                    "height": 121,
                                    "top": 161,
                                    "left": 23,
                                    "birthDateAreaDistance": {
                                        "top": -53,
                                        "left": 137
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "CZ": {
                "countryName": "Czech Republic",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2014,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 388,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 235,
                                    "height": 85,
                                    "top": 111,
                                    "left": 142
                                },
                                "faceArea": {
                                    "width": 151,
                                    "height": 141,
                                    "top": 206,
                                    "left": 28,
                                    "birthDateAreaDistance": {
                                        "top": -95,
                                        "left": 114
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2023,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 376,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 222,
                                    "height": 80,
                                    "top": 104,
                                    "left": 147
                                },
                                "faceArea": {
                                    "width": 139,
                                    "height": 131,
                                    "top": 192,
                                    "left": 35,
                                    "birthDateAreaDistance": {
                                        "top": -88,
                                        "left": 112
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2006,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 CZE",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/CZE([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 411,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 207,
                                    "height": 76,
                                    "top": 324,
                                    "left": 117
                                },
                                "faceArea": {
                                    "width": 114,
                                    "height": 103,
                                    "top": 112,
                                    "left": 55,
                                    "birthDateAreaDistance": {
                                        "top": 212,
                                        "left": 62
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 382,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 235,
                                    "height": 75,
                                    "top": 117,
                                    "left": 133
                                },
                                "faceArea": {
                                    "width": 107,
                                    "height": 103,
                                    "top": 173,
                                    "left": 40,
                                    "birthDateAreaDistance": {
                                        "top": -56,
                                        "left": 93
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "DK": {
                "countryName": "Denmark",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [],
                    "passport": [
                        {
                            "year": 2012,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 407,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 173,
                                    "height": 78,
                                    "top": 130,
                                    "left": 146
                                },
                                "faceArea": {
                                    "width": 102,
                                    "height": 101,
                                    "top": 156,
                                    "left": 46,
                                    "birthDateAreaDistance": {
                                        "top": -26,
                                        "left": 100
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 DNK",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/DNK([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 20,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 415,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 154,
                                    "height": 71,
                                    "top": 339,
                                    "left": 151
                                },
                                "faceArea": {
                                    "width": 103,
                                    "height": 102,
                                    "top": 119,
                                    "left": 36,
                                    "birthDateAreaDistance": {
                                        "top": 220,
                                        "left": 115
                                    }
                                }
                            },
                            "idRegionZoom": 8
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3\\. ([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 175,
                                    "height": 70,
                                    "top": 93,
                                    "left": 146
                                },
                                "faceArea": {
                                    "width": 100,
                                    "height": 94,
                                    "top": 166,
                                    "left": 28,
                                    "birthDateAreaDistance": {
                                        "top": -73,
                                        "left": 118
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2017,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3\\. ([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 70,
                            "contrast": 50,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 377,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 184,
                                    "height": 69,
                                    "top": 84,
                                    "left": 135
                                },
                                "faceArea": {
                                    "width": 105,
                                    "height": 92,
                                    "top": 159,
                                    "left": 37,
                                    "birthDateAreaDistance": {
                                        "top": -75,
                                        "left": 98
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "EE": {
                "countryName": "Estonia",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2011,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 386,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 189,
                                    "height": 73,
                                    "top": 197,
                                    "left": 240
                                },
                                "faceArea": {
                                    "width": 130,
                                    "height": 123,
                                    "top": 143,
                                    "left": 46,
                                    "birthDateAreaDistance": {
                                        "top": 54,
                                        "left": 194
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 384,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 171,
                                    "height": 85,
                                    "top": 154,
                                    "left": 413
                                },
                                "faceArea": {
                                    "width": 145,
                                    "height": 141,
                                    "top": 141,
                                    "left": 51,
                                    "birthDateAreaDistance": {
                                        "top": 13,
                                        "left": 362
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2014,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 EST",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/EST([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 425,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 172,
                                    "height": 64,
                                    "top": 342,
                                    "left": 139
                                },
                                "faceArea": {
                                    "width": 127,
                                    "height": 123,
                                    "top": 151,
                                    "left": 37,
                                    "birthDateAreaDistance": {
                                        "top": 191,
                                        "left": 102
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 EST",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/EST([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 414,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 195,
                                    "height": 74,
                                    "top": 336,
                                    "left": 126
                                },
                                "faceArea": {
                                    "width": 128,
                                    "height": 128,
                                    "top": 133,
                                    "left": 31,
                                    "birthDateAreaDistance": {
                                        "top": 203,
                                        "left": 95
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3\\. ([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 378,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 205,
                                    "height": 65,
                                    "top": 105,
                                    "left": 146
                                },
                                "faceArea": {
                                    "width": 106,
                                    "height": 100,
                                    "top": 163,
                                    "left": 45,
                                    "birthDateAreaDistance": {
                                        "top": -58,
                                        "left": 101
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "FI": {
                "countryName": "Finland",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2017,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 377,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 183,
                                    "height": 78,
                                    "top": 216,
                                    "left": 251
                                },
                                "faceArea": {
                                    "width": 125,
                                    "height": 114,
                                    "top": 156,
                                    "left": 46,
                                    "birthDateAreaDistance": {
                                        "top": 60,
                                        "left": 205
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2023,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 376,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 178,
                                    "height": 68,
                                    "top": 222,
                                    "left": 279
                                },
                                "faceArea": {
                                    "width": 190,
                                    "height": 164,
                                    "top": 139,
                                    "left": 26,
                                    "birthDateAreaDistance": {
                                        "top": 83,
                                        "left": 253
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2017,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 FIN",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/FIN([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 414,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 193,
                                    "height": 63,
                                    "top": 346,
                                    "left": 127
                                },
                                "faceArea": {
                                    "width": 106,
                                    "height": 101,
                                    "top": 160,
                                    "left": 35,
                                    "birthDateAreaDistance": {
                                        "top": 186,
                                        "left": 92
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2023,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 FIN",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/FIN([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 406,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 183,
                                    "height": 68,
                                    "top": 333,
                                    "left": 122
                                },
                                "faceArea": {
                                    "width": 134,
                                    "height": 134,
                                    "top": 123,
                                    "left": 29,
                                    "birthDateAreaDistance": {
                                        "top": 210,
                                        "left": 93
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 .",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3\\. ([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 371,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 190,
                                    "height": 68,
                                    "top": 96,
                                    "left": 170
                                },
                                "faceArea": {
                                    "width": 115,
                                    "height": 115,
                                    "top": 149,
                                    "left": 51,
                                    "birthDateAreaDistance": {
                                        "top": -53,
                                        "left": 119
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2019,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 .",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3\\. ([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 383,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 198,
                                    "height": 72,
                                    "top": 101,
                                    "left": 160
                                },
                                "faceArea": {
                                    "width": 125,
                                    "height": 127,
                                    "top": 162,
                                    "left": 34,
                                    "birthDateAreaDistance": {
                                        "top": -61,
                                        "left": 126
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "FR": {
                "countryName": "France",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 1994,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 568,
                                    "height": 400,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 196,
                                    "height": 64,
                                    "top": 142,
                                    "left": 327
                                },
                                "faceArea": {
                                    "width": 148,
                                    "height": 135,
                                    "top": 136,
                                    "left": 32,
                                    "birthDateAreaDistance": {
                                        "top": 6,
                                        "left": 295
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 173,
                                    "height": 68,
                                    "top": 163,
                                    "left": 397
                                },
                                "faceArea": {
                                    "width": 178,
                                    "height": 163,
                                    "top": 162,
                                    "left": 43,
                                    "birthDateAreaDistance": {
                                        "top": 1,
                                        "left": 354
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 FRA",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/FRA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 445,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 193,
                                    "height": 66,
                                    "top": 360,
                                    "left": 125
                                },
                                "faceArea": {
                                    "width": 118,
                                    "height": 111,
                                    "top": 163,
                                    "left": 46,
                                    "birthDateAreaDistance": {
                                        "top": 197,
                                        "left": 79
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2019,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 FRA",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/FRA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 413,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 175,
                                    "height": 62,
                                    "top": 344,
                                    "left": 128
                                },
                                "faceArea": {
                                    "width": 132,
                                    "height": 126,
                                    "top": 146,
                                    "left": 36,
                                    "birthDateAreaDistance": {
                                        "top": 198,
                                        "left": 92
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3 ([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 60,
                            "contrast": 50,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 204,
                                    "height": 64,
                                    "top": 102,
                                    "left": 151
                                },
                                "faceArea": {
                                    "width": 113,
                                    "height": 102,
                                    "top": 151,
                                    "left": 41,
                                    "birthDateAreaDistance": {
                                        "top": -49,
                                        "left": 110
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 140,
                            "contrast": 100,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 381,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 181,
                                    "height": 51,
                                    "top": 112,
                                    "left": 156
                                },
                                "faceArea": {
                                    "width": 116,
                                    "height": 111,
                                    "top": 155,
                                    "left": 39,
                                    "birthDateAreaDistance": {
                                        "top": -43,
                                        "left": 117
                                    }
                                }
                            },
                            "idRegionZoom": 4
                        }
                    ]
                }
            },
            "DE": {
                "countryName": "Germany",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2010,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 30,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 381,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 213,
                                    "height": 69,
                                    "top": 150,
                                    "left": 231
                                },
                                "faceArea": {
                                    "width": 195,
                                    "height": 174,
                                    "top": 158,
                                    "left": 34,
                                    "birthDateAreaDistance": {
                                        "top": -8,
                                        "left": 197
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 50,
                            "contrast": 60,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 368,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 199,
                                    "height": 68,
                                    "top": 183,
                                    "left": 219
                                },
                                "faceArea": {
                                    "width": 194,
                                    "height": 180,
                                    "top": 154,
                                    "left": 37,
                                    "birthDateAreaDistance": {
                                        "top": 29,
                                        "left": 182
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2014,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 30,
                            "contrast": 50,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 300,
                                    "height": 219,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 98,
                                    "height": 46,
                                    "top": 66,
                                    "left": 145
                                },
                                "faceArea": {
                                    "width": 63,
                                    "height": 59,
                                    "top": 54,
                                    "left": 11,
                                    "birthDateAreaDistance": {
                                        "top": 12,
                                        "left": 134
                                    }
                                }
                            },
                            "idRegionZoom": 4
                        },
                        {
                            "year": 2017,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 D",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/D([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 420,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 188,
                                    "height": 64,
                                    "top": 346,
                                    "left": 112
                                },
                                "faceArea": {
                                    "width": 138,
                                    "height": 140,
                                    "top": 129,
                                    "left": 22,
                                    "birthDateAreaDistance": {
                                        "top": 217,
                                        "left": 90
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 .",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 383,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 202,
                                    "height": 60,
                                    "top": 88,
                                    "left": 131
                                },
                                "faceArea": {
                                    "width": 116,
                                    "height": 107,
                                    "top": 158,
                                    "left": 25,
                                    "birthDateAreaDistance": {
                                        "top": -70,
                                        "left": 106
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 378,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 209,
                                    "height": 63,
                                    "top": 86,
                                    "left": 130
                                },
                                "faceArea": {
                                    "width": 118,
                                    "height": 108,
                                    "top": 148,
                                    "left": 24,
                                    "birthDateAreaDistance": {
                                        "top": -62,
                                        "left": 106
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "EL": {
                "countryName": "Greece",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2010,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "0123456789 IANPHEVRMTOSULGKDianphevrmtosulgkd",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*(Ian|Phevr|Mart|Apr|Maios|Ioun|Ioul|Aug|Sept|Okt|Noem|Dek).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 378,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 236,
                                    "height": 76,
                                    "top": 171,
                                    "left": 82
                                },
                                "faceArea": {
                                    "width": 102,
                                    "height": 94,
                                    "top": 212,
                                    "left": 446,
                                    "birthDateAreaDistance": {
                                        "top": -41,
                                        "left": -364
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2023,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 196,
                                    "height": 73,
                                    "top": 132,
                                    "left": 327
                                },
                                "faceArea": {
                                    "width": 174,
                                    "height": 157,
                                    "top": 147,
                                    "left": 33,
                                    "birthDateAreaDistance": {
                                        "top": -15,
                                        "left": 294
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2020,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 GRC",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/GRC([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 410,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 176,
                                    "height": 61,
                                    "top": 346,
                                    "left": 125
                                },
                                "faceArea": {
                                    "width": 135,
                                    "height": 130,
                                    "top": 169,
                                    "left": 44,
                                    "birthDateAreaDistance": {
                                        "top": 177,
                                        "left": 81
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 30,
                            "contrast": 50,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 374,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 187,
                                    "height": 55,
                                    "top": 130,
                                    "left": 139
                                },
                                "faceArea": {
                                    "width": 128,
                                    "height": 105,
                                    "top": 147,
                                    "left": 22,
                                    "birthDateAreaDistance": {
                                        "top": -17,
                                        "left": 117
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2023,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3\\. ([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 378,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 234,
                                    "height": 66,
                                    "top": 113,
                                    "left": 206
                                },
                                "faceArea": {
                                    "width": 166,
                                    "height": 160,
                                    "top": 146,
                                    "left": 41,
                                    "birthDateAreaDistance": {
                                        "top": -33,
                                        "left": 165
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "HU": {
                "countryName": "Hungary",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2016,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 376,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 238,
                                    "height": 76,
                                    "top": 155,
                                    "left": 362
                                },
                                "faceArea": {
                                    "width": 181,
                                    "height": 148,
                                    "top": 167,
                                    "left": 33,
                                    "birthDateAreaDistance": {
                                        "top": -12,
                                        "left": 329
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2012,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 HUN",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/HUN([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 417,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 188,
                                    "height": 71,
                                    "top": 340,
                                    "left": 117
                                },
                                "faceArea": {
                                    "width": 106,
                                    "height": 99,
                                    "top": 157,
                                    "left": 34,
                                    "birthDateAreaDistance": {
                                        "top": 183,
                                        "left": 83
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{4}).*([0-9]{2}).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 380,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 182,
                                    "height": 62,
                                    "top": 135,
                                    "left": 137
                                },
                                "faceArea": {
                                    "width": 98,
                                    "height": 96,
                                    "top": 157,
                                    "left": 43,
                                    "birthDateAreaDistance": {
                                        "top": -22,
                                        "left": 94
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "IS": {
                "countryName": "Iceland",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [],
                    "passport": [
                        {
                            "year": 2016,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ISL",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/ISL([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 30,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 421,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 204,
                                    "height": 65,
                                    "top": 353,
                                    "left": 107
                                },
                                "faceArea": {
                                    "width": 103,
                                    "height": 91,
                                    "top": 146,
                                    "left": 47,
                                    "birthDateAreaDistance": {
                                        "top": 207,
                                        "left": 60
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2006,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 375,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 258,
                                    "height": 100,
                                    "top": 84,
                                    "left": 141
                                },
                                "faceArea": {
                                    "width": 92,
                                    "height": 78,
                                    "top": 136,
                                    "left": 39,
                                    "birthDateAreaDistance": {
                                        "top": -52,
                                        "left": 102
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 368,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 215,
                                    "height": 73,
                                    "top": 113,
                                    "left": 148
                                },
                                "faceArea": {
                                    "width": 104,
                                    "height": 104,
                                    "top": 155,
                                    "left": 49,
                                    "birthDateAreaDistance": {
                                        "top": -42,
                                        "left": 99
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "IE": {
                "countryName": "Ireland",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [],
                    "passport": [
                        {
                            "year": 2006,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 IRL",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/IRL([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 432,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 205,
                                    "height": 70,
                                    "top": 353,
                                    "left": 118
                                },
                                "faceArea": {
                                    "width": 127,
                                    "height": 121,
                                    "top": 129,
                                    "left": 43,
                                    "birthDateAreaDistance": {
                                        "top": 224,
                                        "left": 75
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 IRL",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/IRL([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 431,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 186,
                                    "height": 71,
                                    "top": 351,
                                    "left": 115
                                },
                                "faceArea": {
                                    "width": 123,
                                    "height": 124,
                                    "top": 127,
                                    "left": 38,
                                    "birthDateAreaDistance": {
                                        "top": 224,
                                        "left": 77
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 378,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 224,
                                    "height": 56,
                                    "top": 77,
                                    "left": 134
                                },
                                "faceArea": {
                                    "width": 103,
                                    "height": 104,
                                    "top": 159,
                                    "left": 44,
                                    "birthDateAreaDistance": {
                                        "top": -82,
                                        "left": 90
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2017,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 220,
                                    "height": 66,
                                    "top": 72,
                                    "left": 124
                                },
                                "faceArea": {
                                    "width": 98,
                                    "height": 103,
                                    "top": 157,
                                    "left": 47,
                                    "birthDateAreaDistance": {
                                        "top": -85,
                                        "left": 77
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "IT": {
                "countryName": "Italy",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2016,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 386,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 180,
                                    "height": 62,
                                    "top": 175,
                                    "left": 409
                                },
                                "faceArea": {
                                    "width": 124,
                                    "height": 120,
                                    "top": 179,
                                    "left": 46,
                                    "birthDateAreaDistance": {
                                        "top": -4,
                                        "left": 363
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2022,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 388,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 182,
                                    "height": 66,
                                    "top": 169,
                                    "left": 409
                                },
                                "faceArea": {
                                    "width": 122,
                                    "height": 121,
                                    "top": 189,
                                    "left": 50,
                                    "birthDateAreaDistance": {
                                        "top": -20,
                                        "left": 359
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2010,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 TA",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/TA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 0,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 422,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 202,
                                    "height": 72,
                                    "top": 334,
                                    "left": 129
                                },
                                "faceArea": {
                                    "width": 117,
                                    "height": 103,
                                    "top": 147,
                                    "left": 40,
                                    "birthDateAreaDistance": {
                                        "top": 187,
                                        "left": 89
                                    }
                                }
                            },
                            "idRegionZoom": 1
                        },
                        {
                            "year": 2023,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 TA",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/TA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 411,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 183,
                                    "height": 62,
                                    "top": 346,
                                    "left": 113
                                },
                                "faceArea": {
                                    "width": 102,
                                    "height": 102,
                                    "top": 141,
                                    "left": 43,
                                    "birthDateAreaDistance": {
                                        "top": 205,
                                        "left": 70
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2002,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 252,
                                    "height": 80,
                                    "top": 64,
                                    "left": 141
                                },
                                "faceArea": {
                                    "width": 86,
                                    "height": 73,
                                    "top": 142,
                                    "left": 49,
                                    "birthDateAreaDistance": {
                                        "top": -78,
                                        "left": 92
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. /",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": -20,
                            "contrast": -20,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 381,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 236,
                                    "height": 70,
                                    "top": 73,
                                    "left": 149
                                },
                                "faceArea": {
                                    "width": 113,
                                    "height": 105,
                                    "top": 137,
                                    "left": 43,
                                    "birthDateAreaDistance": {
                                        "top": -64,
                                        "left": 106
                                    }
                                }
                            },
                            "idRegionZoom": 0
                        }
                    ]
                }
            },
            "LV": {
                "countryName": "Latvia",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2012,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 401,
                                    "height": 250,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 171,
                                    "height": 52,
                                    "top": 141,
                                    "left": 129
                                },
                                "faceArea": {
                                    "width": 114,
                                    "height": 107,
                                    "top": 103,
                                    "left": 29,
                                    "birthDateAreaDistance": {
                                        "top": 38,
                                        "left": 100
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 382,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 209,
                                    "height": 69,
                                    "top": 215,
                                    "left": 186
                                },
                                "faceArea": {
                                    "width": 161,
                                    "height": 149,
                                    "top": 135,
                                    "left": 47,
                                    "birthDateAreaDistance": {
                                        "top": 80,
                                        "left": 139
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2007,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 LVA",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/LVA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 448,
                                    "height": 316,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 163,
                                    "height": 55,
                                    "top": 256,
                                    "left": 82
                                },
                                "faceArea": {
                                    "width": 74,
                                    "height": 77,
                                    "top": 104,
                                    "left": 34,
                                    "birthDateAreaDistance": {
                                        "top": 152,
                                        "left": 48
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 LVA",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/LVA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 426,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 196,
                                    "height": 72,
                                    "top": 346,
                                    "left": 117
                                },
                                "faceArea": {
                                    "width": 116,
                                    "height": 116,
                                    "top": 148,
                                    "left": 38,
                                    "birthDateAreaDistance": {
                                        "top": 198,
                                        "left": 79
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2004,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2})\\.([0-9]{2})\\.([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 40,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 452,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 212,
                                    "height": 56,
                                    "top": 139,
                                    "left": 130
                                },
                                "faceArea": {
                                    "width": 107,
                                    "height": 89,
                                    "top": 193,
                                    "left": 51,
                                    "birthDateAreaDistance": {
                                        "top": -54,
                                        "left": 79
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 378,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 229,
                                    "height": 67,
                                    "top": 98,
                                    "left": 143
                                },
                                "faceArea": {
                                    "width": 112,
                                    "height": 105,
                                    "top": 164,
                                    "left": 41,
                                    "birthDateAreaDistance": {
                                        "top": -66,
                                        "left": 102
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "LI": {
                "countryName": "Liechtenstein",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 1995,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 20,
                            "contrast": 120,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 372,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 218,
                                    "height": 80,
                                    "top": 281,
                                    "left": 165
                                },
                                "faceArea": {
                                    "width": 143,
                                    "height": 127,
                                    "top": 185,
                                    "left": 41,
                                    "birthDateAreaDistance": {
                                        "top": 96,
                                        "left": 124
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2009,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 40,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 375,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 205,
                                    "height": 78,
                                    "top": 283,
                                    "left": 187
                                },
                                "faceArea": {
                                    "width": 124,
                                    "height": 122,
                                    "top": 173,
                                    "left": 52,
                                    "birthDateAreaDistance": {
                                        "top": 110,
                                        "left": 135
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2006,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 416,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 181,
                                    "height": 65,
                                    "top": 119,
                                    "left": 142
                                },
                                "faceArea": {
                                    "width": 126,
                                    "height": 128,
                                    "top": 94,
                                    "left": 40,
                                    "birthDateAreaDistance": {
                                        "top": 25,
                                        "left": 102
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2003,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 377,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 235,
                                    "height": 68,
                                    "top": 124,
                                    "left": 145
                                },
                                "faceArea": {
                                    "width": 122,
                                    "height": 130,
                                    "top": 160,
                                    "left": 46,
                                    "birthDateAreaDistance": {
                                        "top": -36,
                                        "left": 99
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "LT": {
                "countryName": "Lithuania",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2012,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 377,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 174,
                                    "height": 76,
                                    "top": 198,
                                    "left": 4
                                },
                                "faceArea": {
                                    "width": 115,
                                    "height": 110,
                                    "top": 188,
                                    "left": 424,
                                    "birthDateAreaDistance": {
                                        "top": 10,
                                        "left": -420
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 40,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 378,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 182,
                                    "height": 71,
                                    "top": 217,
                                    "left": 412
                                },
                                "faceArea": {
                                    "width": 158,
                                    "height": 135,
                                    "top": 181,
                                    "left": 25,
                                    "birthDateAreaDistance": {
                                        "top": 36,
                                        "left": 387
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2011,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 LTU",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/LTU([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 404,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 203,
                                    "height": 65,
                                    "top": 335,
                                    "left": 92
                                },
                                "faceArea": {
                                    "width": 128,
                                    "height": 109,
                                    "top": 146,
                                    "left": 40,
                                    "birthDateAreaDistance": {
                                        "top": 189,
                                        "left": 52
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2019,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 LTU",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/LTU([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 410,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 216,
                                    "height": 66,
                                    "top": 332,
                                    "left": 107
                                },
                                "faceArea": {
                                    "width": 113,
                                    "height": 113,
                                    "top": 136,
                                    "left": 39,
                                    "birthDateAreaDistance": {
                                        "top": 196,
                                        "left": 68
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2014,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 20,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 384,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 236,
                                    "height": 70,
                                    "top": 105,
                                    "left": 117
                                },
                                "faceArea": {
                                    "width": 90,
                                    "height": 84,
                                    "top": 162,
                                    "left": 36,
                                    "birthDateAreaDistance": {
                                        "top": -57,
                                        "left": 81
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 30,
                            "contrast": 60,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 215,
                                    "height": 67,
                                    "top": 117,
                                    "left": 128
                                },
                                "faceArea": {
                                    "width": 114,
                                    "height": 106,
                                    "top": 139,
                                    "left": 34,
                                    "birthDateAreaDistance": {
                                        "top": -22,
                                        "left": 94
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "LU": {
                "countryName": "Luxembourg",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2014,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 216,
                                    "height": 72,
                                    "top": 230,
                                    "left": 168
                                },
                                "faceArea": {
                                    "width": 122,
                                    "height": 122,
                                    "top": 147,
                                    "left": 41,
                                    "birthDateAreaDistance": {
                                        "top": 83,
                                        "left": 127
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 30,
                            "contrast": 50,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 377,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 237,
                                    "height": 78,
                                    "top": 230,
                                    "left": 158
                                },
                                "faceArea": {
                                    "width": 141,
                                    "height": 150,
                                    "top": 148,
                                    "left": 42,
                                    "birthDateAreaDistance": {
                                        "top": 82,
                                        "left": 116
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 LUX",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/LUX([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 421,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 228,
                                    "height": 83,
                                    "top": 334,
                                    "left": 94
                                },
                                "faceArea": {
                                    "width": 115,
                                    "height": 100,
                                    "top": 164,
                                    "left": 30,
                                    "birthDateAreaDistance": {
                                        "top": 170,
                                        "left": 64
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 597,
                                    "height": 400,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 166,
                                    "height": 63,
                                    "top": 105,
                                    "left": 125
                                },
                                "faceArea": {
                                    "width": 91,
                                    "height": 85,
                                    "top": 152,
                                    "left": 43,
                                    "birthDateAreaDistance": {
                                        "top": -47,
                                        "left": 82
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "MT": {
                "countryName": "Malta",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2020,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 378,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 238,
                                    "height": 75,
                                    "top": 192,
                                    "left": 355
                                },
                                "faceArea": {
                                    "width": 151,
                                    "height": 138,
                                    "top": 171,
                                    "left": 36,
                                    "birthDateAreaDistance": {
                                        "top": 21,
                                        "left": 319
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2008,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 MLT",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/MLT([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 408,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 212,
                                    "height": 76,
                                    "top": 325,
                                    "left": 105
                                },
                                "faceArea": {
                                    "width": 145,
                                    "height": 143,
                                    "top": 115,
                                    "left": 40,
                                    "birthDateAreaDistance": {
                                        "top": 210,
                                        "left": 65
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2019,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 MLT",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/MLT([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 415,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 215,
                                    "height": 77,
                                    "top": 331,
                                    "left": 108
                                },
                                "faceArea": {
                                    "width": 138,
                                    "height": 133,
                                    "top": 130,
                                    "left": 36,
                                    "birthDateAreaDistance": {
                                        "top": 201,
                                        "left": 72
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2003,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 384,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 210,
                                    "height": 56,
                                    "top": 72,
                                    "left": 178
                                },
                                "faceArea": {
                                    "width": 114,
                                    "height": 108,
                                    "top": 198,
                                    "left": 52,
                                    "birthDateAreaDistance": {
                                        "top": -126,
                                        "left": 126
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2020,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 369,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 224,
                                    "height": 63,
                                    "top": 60,
                                    "left": 115
                                },
                                "faceArea": {
                                    "width": 92,
                                    "height": 84,
                                    "top": 161,
                                    "left": 30,
                                    "birthDateAreaDistance": {
                                        "top": -101,
                                        "left": 85
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "NL": {
                "countryName": "Netherlands",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2017,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "0123456789 / JANFEBMRPYULGSTOCVD",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{1,2}).*(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEPT|OCT|NOV|DEC).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 359,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 238,
                                    "height": 71,
                                    "top": 175,
                                    "left": 176
                                },
                                "faceArea": {
                                    "width": 122,
                                    "height": 117,
                                    "top": 130,
                                    "left": 44,
                                    "birthDateAreaDistance": {
                                        "top": 45,
                                        "left": 132
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "0123456789 / JANFEBMRPYULGSTOCVD",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{1,2}).*(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEPT|OCT|NOV|DEC).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 384,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 254,
                                    "height": 74,
                                    "top": 183,
                                    "left": 164
                                },
                                "faceArea": {
                                    "width": 129,
                                    "height": 125,
                                    "top": 137,
                                    "left": 41,
                                    "birthDateAreaDistance": {
                                        "top": 46,
                                        "left": 123
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2014,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 NLD",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/NLD([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 440,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 201,
                                    "height": 71,
                                    "top": 354,
                                    "left": 117
                                },
                                "faceArea": {
                                    "width": 116,
                                    "height": 118,
                                    "top": 142,
                                    "left": 44,
                                    "birthDateAreaDistance": {
                                        "top": 212,
                                        "left": 73
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 NLD",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/NLD([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 436,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 198,
                                    "height": 79,
                                    "top": 349,
                                    "left": 116
                                },
                                "faceArea": {
                                    "width": 113,
                                    "height": 114,
                                    "top": 148,
                                    "left": 44,
                                    "birthDateAreaDistance": {
                                        "top": 201,
                                        "left": 72
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 380,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 215,
                                    "height": 55,
                                    "top": 115,
                                    "left": 133
                                },
                                "faceArea": {
                                    "width": 114,
                                    "height": 106,
                                    "top": 149,
                                    "left": 43,
                                    "birthDateAreaDistance": {
                                        "top": -34,
                                        "left": 90
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2014,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/[3|1]{1}.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 70,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 382,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 210,
                                    "height": 58,
                                    "top": 154,
                                    "left": 147
                                },
                                "faceArea": {
                                    "width": 127,
                                    "height": 114,
                                    "top": 146,
                                    "left": 51,
                                    "birthDateAreaDistance": {
                                        "top": 8,
                                        "left": 96
                                    }
                                }
                            },
                            "idRegionZoom": 1
                        }
                    ]
                }
            },
            "NO": {
                "countryName": "Norway",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2020,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "0123456789 / JANFEBMRPYULGSTOCVD",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{1,2}).*(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEPT|OCT|NOV|DEC).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 382,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 283,
                                    "height": 84,
                                    "top": 137,
                                    "left": 188
                                },
                                "faceArea": {
                                    "width": 200,
                                    "height": 193,
                                    "top": 151,
                                    "left": 42,
                                    "birthDateAreaDistance": {
                                        "top": -14,
                                        "left": 146
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "0123456789 / JANFEBMRPYULGSTOCVD",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{1,2}).*(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEPT|OCT|NOV|DEC).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 376,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 245,
                                    "height": 80,
                                    "top": 135,
                                    "left": 196
                                },
                                "faceArea": {
                                    "width": 193,
                                    "height": 172,
                                    "top": 160,
                                    "left": 35,
                                    "birthDateAreaDistance": {
                                        "top": -25,
                                        "left": 161
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 NOR",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/NOR([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 415,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 202,
                                    "height": 74,
                                    "top": 334,
                                    "left": 112
                                },
                                "faceArea": {
                                    "width": 121,
                                    "height": 117,
                                    "top": 150,
                                    "left": 40,
                                    "birthDateAreaDistance": {
                                        "top": 184,
                                        "left": 72
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2020,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 NOR",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/OR([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 416,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 229,
                                    "height": 77,
                                    "top": 334,
                                    "left": 109
                                },
                                "faceArea": {
                                    "width": 129,
                                    "height": 129,
                                    "top": 157,
                                    "left": 30,
                                    "birthDateAreaDistance": {
                                        "top": 177,
                                        "left": 79
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 399,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 216,
                                    "height": 65,
                                    "top": 94,
                                    "left": 131
                                },
                                "faceArea": {
                                    "width": 113,
                                    "height": 106,
                                    "top": 163,
                                    "left": 35,
                                    "birthDateAreaDistance": {
                                        "top": -69,
                                        "left": 96
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2023,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 381,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 232,
                                    "height": 67,
                                    "top": 83,
                                    "left": 110
                                },
                                "faceArea": {
                                    "width": 124,
                                    "height": 113,
                                    "top": 147,
                                    "left": 24,
                                    "birthDateAreaDistance": {
                                        "top": -64,
                                        "left": 86
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "PL": {
                "countryName": "Poland",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 198,
                                    "height": 63,
                                    "top": 311,
                                    "left": 169
                                },
                                "faceArea": {
                                    "width": 151,
                                    "height": 147,
                                    "top": 197,
                                    "left": 33,
                                    "birthDateAreaDistance": {
                                        "top": 114,
                                        "left": 136
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 375,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 226,
                                    "height": 82,
                                    "top": 139,
                                    "left": 348
                                },
                                "faceArea": {
                                    "width": 142,
                                    "height": 131,
                                    "top": 186,
                                    "left": 34,
                                    "birthDateAreaDistance": {
                                        "top": -47,
                                        "left": 314
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2011,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 POL",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/P[O|0]{1}L([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 418,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 201,
                                    "height": 71,
                                    "top": 337,
                                    "left": 118
                                },
                                "faceArea": {
                                    "width": 116,
                                    "height": 109,
                                    "top": 171,
                                    "left": 26,
                                    "birthDateAreaDistance": {
                                        "top": 166,
                                        "left": 92
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2022,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 POL",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/P[O|0]{1}L([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 427,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 227,
                                    "height": 74,
                                    "top": 349,
                                    "left": 121
                                },
                                "faceArea": {
                                    "width": 133,
                                    "height": 117,
                                    "top": 165,
                                    "left": 32,
                                    "birthDateAreaDistance": {
                                        "top": 184,
                                        "left": 89
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 377,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 246,
                                    "height": 67,
                                    "top": 97,
                                    "left": 133
                                },
                                "faceArea": {
                                    "width": 123,
                                    "height": 117,
                                    "top": 157,
                                    "left": 37,
                                    "birthDateAreaDistance": {
                                        "top": -60,
                                        "left": 96
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2019,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 257,
                                    "height": 75,
                                    "top": 98,
                                    "left": 140
                                },
                                "faceArea": {
                                    "width": 117,
                                    "height": 120,
                                    "top": 159,
                                    "left": 36,
                                    "birthDateAreaDistance": {
                                        "top": -61,
                                        "left": 104
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "PT": {
                "countryName": "Portugal",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2009,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 397,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 190,
                                    "height": 63,
                                    "top": 195,
                                    "left": 281
                                },
                                "faceArea": {
                                    "width": 112,
                                    "height": 109,
                                    "top": 238,
                                    "left": 437,
                                    "birthDateAreaDistance": {
                                        "top": -43,
                                        "left": -156
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 383,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 193,
                                    "height": 70,
                                    "top": 186,
                                    "left": 284
                                },
                                "faceArea": {
                                    "width": 98,
                                    "height": 103,
                                    "top": 233,
                                    "left": 461,
                                    "birthDateAreaDistance": {
                                        "top": -47,
                                        "left": -177
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2009,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 PRT",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/PRT([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 407,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 213,
                                    "height": 71,
                                    "top": 332,
                                    "left": 107
                                },
                                "faceArea": {
                                    "width": 98,
                                    "height": 94,
                                    "top": 171,
                                    "left": 55,
                                    "birthDateAreaDistance": {
                                        "top": 161,
                                        "left": 52
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2017,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 PRT",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/PRT([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 416,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 222,
                                    "height": 82,
                                    "top": 329,
                                    "left": 96
                                },
                                "faceArea": {
                                    "width": 112,
                                    "height": 111,
                                    "top": 149,
                                    "left": 42,
                                    "birthDateAreaDistance": {
                                        "top": 180,
                                        "left": 54
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 1999,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 381,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 245,
                                    "height": 67,
                                    "top": 77,
                                    "left": 119
                                },
                                "faceArea": {
                                    "width": 116,
                                    "height": 113,
                                    "top": 193,
                                    "left": 43,
                                    "birthDateAreaDistance": {
                                        "top": -116,
                                        "left": 76
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 377,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 249,
                                    "height": 70,
                                    "top": 76,
                                    "left": 109
                                },
                                "faceArea": {
                                    "width": 108,
                                    "height": 90,
                                    "top": 177,
                                    "left": 24,
                                    "birthDateAreaDistance": {
                                        "top": -101,
                                        "left": 85
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "CY": {
                "countryName": "Republic of Cyprus",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 376,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 168,
                                    "height": 56,
                                    "top": 235,
                                    "left": 204
                                },
                                "faceArea": {
                                    "width": 143,
                                    "height": 145,
                                    "top": 182,
                                    "left": 43,
                                    "birthDateAreaDistance": {
                                        "top": 53,
                                        "left": 161
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2020,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 40,
                            "contrast": 50,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 521,
                                    "height": 321,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 197,
                                    "height": 58,
                                    "top": 186,
                                    "left": 130
                                },
                                "faceArea": {
                                    "width": 143,
                                    "height": 134,
                                    "top": 137,
                                    "left": 29,
                                    "birthDateAreaDistance": {
                                        "top": 49,
                                        "left": 101
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2010,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 CYP",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/CYP([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 390,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 182,
                                    "height": 55,
                                    "top": 333,
                                    "left": 127
                                },
                                "faceArea": {
                                    "width": 128,
                                    "height": 129,
                                    "top": 142,
                                    "left": 35,
                                    "birthDateAreaDistance": {
                                        "top": 191,
                                        "left": 92
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2020,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 CYP",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/CYP([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 413,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 193,
                                    "height": 59,
                                    "top": 341,
                                    "left": 124
                                },
                                "faceArea": {
                                    "width": 128,
                                    "height": 120,
                                    "top": 130,
                                    "left": 44,
                                    "birthDateAreaDistance": {
                                        "top": 211,
                                        "left": 80
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 382,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 226,
                                    "height": 61,
                                    "top": 148,
                                    "left": 144
                                },
                                "faceArea": {
                                    "width": 120,
                                    "height": 116,
                                    "top": 149,
                                    "left": 47,
                                    "birthDateAreaDistance": {
                                        "top": -1,
                                        "left": 97
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "RO": {
                "countryName": "Romania",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2017,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ROU",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/ROU([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 422,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 232,
                                    "height": 77,
                                    "top": 334,
                                    "left": 148
                                },
                                "faceArea": {
                                    "width": 113,
                                    "height": 108,
                                    "top": 91,
                                    "left": 39,
                                    "birthDateAreaDistance": {
                                        "top": 243,
                                        "left": 109
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ROU",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/[O|0]{1}U([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 423,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 237,
                                    "height": 79,
                                    "top": 335,
                                    "left": 142
                                },
                                "faceArea": {
                                    "width": 132,
                                    "height": 131,
                                    "top": 94,
                                    "left": 28,
                                    "birthDateAreaDistance": {
                                        "top": 241,
                                        "left": 114
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2023,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 377,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 200,
                                    "height": 76,
                                    "top": 143,
                                    "left": 397
                                },
                                "faceArea": {
                                    "width": 169,
                                    "height": 157,
                                    "top": 156,
                                    "left": 32,
                                    "birthDateAreaDistance": {
                                        "top": -13,
                                        "left": 365
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2019,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ROU",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/[O|0]{1}U([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 30,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 421,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 198,
                                    "height": 73,
                                    "top": 344,
                                    "left": 124
                                },
                                "faceArea": {
                                    "width": 123,
                                    "height": 117,
                                    "top": 144,
                                    "left": 40,
                                    "birthDateAreaDistance": {
                                        "top": 200,
                                        "left": 84
                                    }
                                }
                            },
                            "idRegionZoom": 1
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2007,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 40,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 374,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 259,
                                    "height": 58,
                                    "top": 70,
                                    "left": 117
                                },
                                "faceArea": {
                                    "width": 95,
                                    "height": 91,
                                    "top": 143,
                                    "left": 45,
                                    "birthDateAreaDistance": {
                                        "top": -73,
                                        "left": 72
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 546,
                                    "height": 350,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 258,
                                    "height": 65,
                                    "top": 66,
                                    "left": 119
                                },
                                "faceArea": {
                                    "width": 76,
                                    "height": 67,
                                    "top": 125,
                                    "left": 45,
                                    "birthDateAreaDistance": {
                                        "top": -59,
                                        "left": 74
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "SK": {
                "countryName": "Slovakia",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 378,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 235,
                                    "height": 73,
                                    "top": 112,
                                    "left": 354
                                },
                                "faceArea": {
                                    "width": 138,
                                    "height": 127,
                                    "top": 156,
                                    "left": 42,
                                    "birthDateAreaDistance": {
                                        "top": -44,
                                        "left": 312
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2022,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 213,
                                    "height": 67,
                                    "top": 201,
                                    "left": 148
                                },
                                "faceArea": {
                                    "width": 137,
                                    "height": 153,
                                    "top": 97,
                                    "left": 19,
                                    "birthDateAreaDistance": {
                                        "top": 104,
                                        "left": 129
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2008,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 SVK",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/SVK([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 50,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 437,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 195,
                                    "height": 64,
                                    "top": 351,
                                    "left": 114
                                },
                                "faceArea": {
                                    "width": 106,
                                    "height": 101,
                                    "top": 141,
                                    "left": 59,
                                    "birthDateAreaDistance": {
                                        "top": 210,
                                        "left": 55
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2014,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 SVK",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/SVK([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 441,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 218,
                                    "height": 75,
                                    "top": 358,
                                    "left": 101
                                },
                                "faceArea": {
                                    "width": 117,
                                    "height": 110,
                                    "top": 137,
                                    "left": 46,
                                    "birthDateAreaDistance": {
                                        "top": 221,
                                        "left": 55
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 377,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 237,
                                    "height": 70,
                                    "top": 89,
                                    "left": 122
                                },
                                "faceArea": {
                                    "width": 109,
                                    "height": 105,
                                    "top": 142,
                                    "left": 34,
                                    "birthDateAreaDistance": {
                                        "top": -53,
                                        "left": 88
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 20,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 381,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 218,
                                    "height": 65,
                                    "top": 90,
                                    "left": 129
                                },
                                "faceArea": {
                                    "width": 100,
                                    "height": 107,
                                    "top": 141,
                                    "left": 48,
                                    "birthDateAreaDistance": {
                                        "top": -51,
                                        "left": 81
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "SI": {
                "countryName": "Slovenia",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 1998,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 378,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 212,
                                    "height": 73,
                                    "top": 259,
                                    "left": 226
                                },
                                "faceArea": {
                                    "width": 111,
                                    "height": 105,
                                    "top": 203,
                                    "left": 62,
                                    "birthDateAreaDistance": {
                                        "top": 56,
                                        "left": 164
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2022,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 527,
                                    "height": 336,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 185,
                                    "height": 69,
                                    "top": 129,
                                    "left": 310
                                },
                                "faceArea": {
                                    "width": 141,
                                    "height": 136,
                                    "top": 155,
                                    "left": 34,
                                    "birthDateAreaDistance": {
                                        "top": -26,
                                        "left": 276
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2006,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 SVN",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/SVN([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 427,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 211,
                                    "height": 69,
                                    "top": 344,
                                    "left": 115
                                },
                                "faceArea": {
                                    "width": 119,
                                    "height": 109,
                                    "top": 162,
                                    "left": 42,
                                    "birthDateAreaDistance": {
                                        "top": 182,
                                        "left": 73
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2016,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 SVN",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/SVN([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 442,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 197,
                                    "height": 72,
                                    "top": 349,
                                    "left": 111
                                },
                                "faceArea": {
                                    "width": 115,
                                    "height": 103,
                                    "top": 165,
                                    "left": 50,
                                    "birthDateAreaDistance": {
                                        "top": 184,
                                        "left": 61
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2009,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 199,
                                    "height": 72,
                                    "top": 135,
                                    "left": 131
                                },
                                "faceArea": {
                                    "width": 101,
                                    "height": 89,
                                    "top": 166,
                                    "left": 41,
                                    "birthDateAreaDistance": {
                                        "top": -31,
                                        "left": 90
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 385,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 232,
                                    "height": 61,
                                    "top": 80,
                                    "left": 124
                                },
                                "faceArea": {
                                    "width": 105,
                                    "height": 86,
                                    "top": 162,
                                    "left": 37,
                                    "birthDateAreaDistance": {
                                        "top": -82,
                                        "left": 87
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "ES": {
                "countryName": "Spain",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 381,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 206,
                                    "height": 64,
                                    "top": 210,
                                    "left": 189
                                },
                                "faceArea": {
                                    "width": 160,
                                    "height": 154,
                                    "top": 132,
                                    "left": 29,
                                    "birthDateAreaDistance": {
                                        "top": 78,
                                        "left": 160
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 384,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 184,
                                    "height": 64,
                                    "top": 175,
                                    "left": 403
                                },
                                "faceArea": {
                                    "width": 164,
                                    "height": 152,
                                    "top": 168,
                                    "left": 28,
                                    "birthDateAreaDistance": {
                                        "top": 7,
                                        "left": 375
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2006,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ESP",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/ESP([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 410,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 220,
                                    "height": 70,
                                    "top": 331,
                                    "left": 107
                                },
                                "faceArea": {
                                    "width": 113,
                                    "height": 108,
                                    "top": 171,
                                    "left": 41,
                                    "birthDateAreaDistance": {
                                        "top": 160,
                                        "left": 66
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ESP",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/ESP([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 419,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 233,
                                    "height": 68,
                                    "top": 342,
                                    "left": 110
                                },
                                "faceArea": {
                                    "width": 118,
                                    "height": 130,
                                    "top": 138,
                                    "left": 31,
                                    "birthDateAreaDistance": {
                                        "top": 204,
                                        "left": 79
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 376,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 225,
                                    "height": 58,
                                    "top": 112,
                                    "left": 120
                                },
                                "faceArea": {
                                    "width": 122,
                                    "height": 118,
                                    "top": 175,
                                    "left": 37,
                                    "birthDateAreaDistance": {
                                        "top": -63,
                                        "left": 83
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "SE": {
                "countryName": "Sweden",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2012,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "0123456789 / JANFEBMRPYULGSTOCVD",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{1,2}).*(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEPT|OCT|NOV|DEC).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 20,
                            "contrast": 60,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 386,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 237,
                                    "height": 65,
                                    "top": 140,
                                    "left": 131
                                },
                                "faceArea": {
                                    "width": 111,
                                    "height": 104,
                                    "top": 139,
                                    "left": 420,
                                    "birthDateAreaDistance": {
                                        "top": 1,
                                        "left": -289
                                    }
                                }
                            },
                            "idRegionZoom": 3
                        },
                        {
                            "year": 2022,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "0123456789 / JANFEBMRPYULGSTOCVD",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{1,2}).*(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEPT|OCT|NOV|DEC).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 382,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 232,
                                    "height": 87,
                                    "top": 110,
                                    "left": 362
                                },
                                "faceArea": {
                                    "width": 132,
                                    "height": 130,
                                    "top": 168,
                                    "left": 39,
                                    "birthDateAreaDistance": {
                                        "top": -58,
                                        "left": 323
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2012,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 SWE",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/SWE([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 418,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 219,
                                    "height": 65,
                                    "top": 348,
                                    "left": 105
                                },
                                "faceArea": {
                                    "width": 118,
                                    "height": 99,
                                    "top": 168,
                                    "left": 25,
                                    "birthDateAreaDistance": {
                                        "top": 180,
                                        "left": 80
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2022,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 SWE",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/SWE([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 430,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 210,
                                    "height": 76,
                                    "top": 350,
                                    "left": 115
                                },
                                "faceArea": {
                                    "width": 117,
                                    "height": 112,
                                    "top": 155,
                                    "left": 41,
                                    "birthDateAreaDistance": {
                                        "top": 195,
                                        "left": 74
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2013,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 234,
                                    "height": 59,
                                    "top": 88,
                                    "left": 110
                                },
                                "faceArea": {
                                    "width": 114,
                                    "height": 105,
                                    "top": 142,
                                    "left": 40,
                                    "birthDateAreaDistance": {
                                        "top": -54,
                                        "left": 70
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2016,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 238,
                                    "height": 62,
                                    "top": 72,
                                    "left": 131
                                },
                                "faceArea": {
                                    "width": 118,
                                    "height": 119,
                                    "top": 158,
                                    "left": 49,
                                    "birthDateAreaDistance": {
                                        "top": -86,
                                        "left": 82
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "CH": {
                "countryName": "Switzerland",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2005,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 60,
                            "contrast": 60,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 377,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 183,
                                    "height": 66,
                                    "top": 297,
                                    "left": 180
                                },
                                "faceArea": {
                                    "width": 104,
                                    "height": 100,
                                    "top": 201,
                                    "left": 68,
                                    "birthDateAreaDistance": {
                                        "top": 96,
                                        "left": 112
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2023,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 377,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 210,
                                    "height": 58,
                                    "top": 316,
                                    "left": 171
                                },
                                "faceArea": {
                                    "width": 144,
                                    "height": 134,
                                    "top": 126,
                                    "left": 39,
                                    "birthDateAreaDistance": {
                                        "top": 190,
                                        "left": 132
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2010,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 CHE",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/CHE([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 429,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 190,
                                    "height": 69,
                                    "top": 349,
                                    "left": 115
                                },
                                "faceArea": {
                                    "width": 99,
                                    "height": 97,
                                    "top": 164,
                                    "left": 60,
                                    "birthDateAreaDistance": {
                                        "top": 185,
                                        "left": 55
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2022,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 CHE",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/CHE([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 429,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 203,
                                    "height": 76,
                                    "top": 349,
                                    "left": 100
                                },
                                "faceArea": {
                                    "width": 116,
                                    "height": 117,
                                    "top": 158,
                                    "left": 40,
                                    "birthDateAreaDistance": {
                                        "top": 191,
                                        "left": 60
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2003,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/[3|2]{1}.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 30,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 561,
                                    "height": 350,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 254,
                                    "height": 61,
                                    "top": 118,
                                    "left": 148
                                },
                                "faceArea": {
                                    "width": 120,
                                    "height": 112,
                                    "top": 138,
                                    "left": 36,
                                    "birthDateAreaDistance": {
                                        "top": -20,
                                        "left": 112
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2023,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 377,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 229,
                                    "height": 68,
                                    "top": 163,
                                    "left": 145
                                },
                                "faceArea": {
                                    "width": 112,
                                    "height": 103,
                                    "top": 167,
                                    "left": 43,
                                    "birthDateAreaDistance": {
                                        "top": -4,
                                        "left": 102
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "UK": {
                "countryName": "United Kingdom",
                "hasMultipleState": false,
                "idConfig": {
                    "idCard": [
                        {
                            "year": 2009,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890- ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 379,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 275,
                                    "height": 84,
                                    "top": 212,
                                    "left": 141
                                },
                                "faceArea": {
                                    "width": 166,
                                    "height": 156,
                                    "top": 210,
                                    "left": 17,
                                    "birthDateAreaDistance": {
                                        "top": 2,
                                        "left": 124
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "passport": [
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 GBR",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/GBR([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 423,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 231,
                                    "height": 67,
                                    "top": 347,
                                    "left": 113
                                },
                                "faceArea": {
                                    "width": 139,
                                    "height": 129,
                                    "top": 138,
                                    "left": 44,
                                    "birthDateAreaDistance": {
                                        "top": 209,
                                        "left": 69
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2020,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890 GBR",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/GBR([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 3,
                                    "month": 2,
                                    "year": 1
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 414,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 200,
                                    "height": 72,
                                    "top": 333,
                                    "left": 122
                                },
                                "faceArea": {
                                    "width": 122,
                                    "height": 125,
                                    "top": 135,
                                    "left": 43,
                                    "birthDateAreaDistance": {
                                        "top": 198,
                                        "left": 79
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ],
                    "driverLicence": [
                        {
                            "year": 2015,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 374,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 241,
                                    "height": 64,
                                    "top": 88,
                                    "left": 130
                                },
                                "faceArea": {
                                    "width": 94,
                                    "height": 93,
                                    "top": 144,
                                    "left": 56,
                                    "birthDateAreaDistance": {
                                        "top": -56,
                                        "left": 74
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        },
                        {
                            "year": 2021,
                            "tesseractConfig": {
                                "tessedit_char_whitelist": "1234567890. ",
                                "tessedit_ocr_engine_mode": 2
                            },
                            "stripWhiteSpace": false,
                            "textMatcherRule": [
                                "/3.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                            ],
                            "dateComponentsPosition": [
                                {
                                    "day": 1,
                                    "month": 2,
                                    "year": 3
                                }
                            ],
                            "monthNameLanguage": "en",
                            "brightness": 10,
                            "contrast": 40,
                            "threshold": 0,
                            "idSizeList": {
                                "container": {
                                    "width": 600,
                                    "height": 369,
                                    "ratioType": 1
                                },
                                "birthDateArea": {
                                    "width": 291,
                                    "height": 67,
                                    "top": 104,
                                    "left": 131
                                },
                                "faceArea": {
                                    "width": 100,
                                    "height": 90,
                                    "top": 128,
                                    "left": 46,
                                    "birthDateAreaDistance": {
                                        "top": -24,
                                        "left": 85
                                    }
                                }
                            },
                            "idRegionZoom": 2
                        }
                    ]
                }
            },
            "US": {
                "countryName": "United States",
                "hasMultipleState": true,
                "stateList": {
                    "AR": {
                        "stateName": "Arkansas",
                        "idConfig": {
                            "idCard": [],
                            "passport": [
                                {
                                    "year": 2006,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 427,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 210,
                                            "height": 56,
                                            "top": 370,
                                            "left": 112
                                        },
                                        "faceArea": {
                                            "width": 119,
                                            "height": 105,
                                            "top": 159,
                                            "left": 50,
                                            "birthDateAreaDistance": {
                                                "top": 211,
                                                "left": 62
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                },
                                {
                                    "year": 2020,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 414,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 193,
                                            "height": 64,
                                            "top": 346,
                                            "left": 128
                                        },
                                        "faceArea": {
                                            "width": 111,
                                            "height": 91,
                                            "top": 176,
                                            "left": 32,
                                            "birthDateAreaDistance": {
                                                "top": 170,
                                                "left": 96
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ],
                            "driverLicence": [
                                {
                                    "year": 2011,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 DOB",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/DOB.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 2,
                                            "month": 1,
                                            "year": 3
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 500,
                                            "height": 325,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 227,
                                            "height": 69,
                                            "top": 47,
                                            "left": 152
                                        },
                                        "faceArea": {
                                            "width": 97,
                                            "height": 99,
                                            "top": 166,
                                            "left": 61,
                                            "birthDateAreaDistance": {
                                                "top": -119,
                                                "left": 91
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                },
                                {
                                    "year": 2018,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 /",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/.*([0-9]{2}).*([0-9]{2}).*([0-9]{4})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 2,
                                            "month": 1,
                                            "year": 3
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 20,
                                    "contrast": 20,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 554,
                                            "height": 350,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 210,
                                            "height": 62,
                                            "top": 51,
                                            "left": 340
                                        },
                                        "faceArea": {
                                            "width": 136,
                                            "height": 137,
                                            "top": 121,
                                            "left": 41,
                                            "birthDateAreaDistance": {
                                                "top": -70,
                                                "left": 299
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ]
                        }
                    },
                    "LA": {
                        "stateName": "Louisiana",
                        "idConfig": {
                            "idCard": [],
                            "passport": [
                                {
                                    "year": 2006,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 427,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 210,
                                            "height": 56,
                                            "top": 370,
                                            "left": 112
                                        },
                                        "faceArea": {
                                            "width": 119,
                                            "height": 105,
                                            "top": 159,
                                            "left": 50,
                                            "birthDateAreaDistance": {
                                                "top": 211,
                                                "left": 62
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                },
                                {
                                    "year": 2020,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 414,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 193,
                                            "height": 64,
                                            "top": 346,
                                            "left": 128
                                        },
                                        "faceArea": {
                                            "width": 111,
                                            "height": 91,
                                            "top": 176,
                                            "left": 32,
                                            "birthDateAreaDistance": {
                                                "top": 170,
                                                "left": 96
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ],
                            "driverLicence": [
                                {
                                    "year": 1,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 -",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/.*([0-9]{2})\\-([0-9]{2})\\-([0-9]{4})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 2,
                                            "month": 1,
                                            "year": 3
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 554,
                                            "height": 350,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 207,
                                            "height": 59,
                                            "top": 109,
                                            "left": 149
                                        },
                                        "faceArea": {
                                            "width": 154,
                                            "height": 138,
                                            "top": 147,
                                            "left": 30,
                                            "birthDateAreaDistance": {
                                                "top": -38,
                                                "left": 119
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ]
                        }
                    },
                    "MS": {
                        "stateName": "Mississippi",
                        "idConfig": {
                            "idCard": [],
                            "passport": [
                                {
                                    "year": 2006,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 427,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 210,
                                            "height": 56,
                                            "top": 370,
                                            "left": 112
                                        },
                                        "faceArea": {
                                            "width": 119,
                                            "height": 105,
                                            "top": 159,
                                            "left": 50,
                                            "birthDateAreaDistance": {
                                                "top": 211,
                                                "left": 62
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                },
                                {
                                    "year": 2020,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 414,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 193,
                                            "height": 64,
                                            "top": 346,
                                            "left": 128
                                        },
                                        "faceArea": {
                                            "width": 111,
                                            "height": 91,
                                            "top": 176,
                                            "left": 32,
                                            "birthDateAreaDistance": {
                                                "top": 170,
                                                "left": 96
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ],
                            "driverLicence": [
                                {
                                    "year": 1,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 /",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/.*([0-9]{2})\\/([0-9]{2})\\/([0-9]{4})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 2,
                                            "month": 1,
                                            "year": 3
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 40,
                                    "contrast": 70,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 590,
                                            "height": 363,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 228,
                                            "height": 66,
                                            "top": 123,
                                            "left": 260
                                        },
                                        "faceArea": {
                                            "width": 126,
                                            "height": 114,
                                            "top": 180,
                                            "left": 35,
                                            "birthDateAreaDistance": {
                                                "top": -57,
                                                "left": 225
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ]
                        }
                    },
                    "MT": {
                        "stateName": "Montana",
                        "idConfig": {
                            "idCard": [],
                            "passport": [
                                {
                                    "year": 2006,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 427,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 210,
                                            "height": 56,
                                            "top": 370,
                                            "left": 112
                                        },
                                        "faceArea": {
                                            "width": 119,
                                            "height": 105,
                                            "top": 159,
                                            "left": 50,
                                            "birthDateAreaDistance": {
                                                "top": 211,
                                                "left": 62
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                },
                                {
                                    "year": 2020,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 414,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 193,
                                            "height": 64,
                                            "top": 346,
                                            "left": 128
                                        },
                                        "faceArea": {
                                            "width": 111,
                                            "height": 91,
                                            "top": 176,
                                            "left": 32,
                                            "birthDateAreaDistance": {
                                                "top": 170,
                                                "left": 96
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ],
                            "driverLicence": [
                                {
                                    "year": 1,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 DOB/",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/.*([0-9]{2})\\/([0-9]{2})\\/([0-9]{4})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 2,
                                            "month": 1,
                                            "year": 3
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 535,
                                            "height": 350,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 233,
                                            "height": 56,
                                            "top": 135,
                                            "left": 166
                                        },
                                        "faceArea": {
                                            "width": 121,
                                            "height": 126,
                                            "top": 136,
                                            "left": 45,
                                            "birthDateAreaDistance": {
                                                "top": -1,
                                                "left": 121
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ]
                        }
                    },
                    "NC": {
                        "stateName": "North Carolina",
                        "idConfig": {
                            "idCard": [],
                            "passport": [
                                {
                                    "year": 2006,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 427,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 210,
                                            "height": 56,
                                            "top": 370,
                                            "left": 112
                                        },
                                        "faceArea": {
                                            "width": 119,
                                            "height": 105,
                                            "top": 159,
                                            "left": 50,
                                            "birthDateAreaDistance": {
                                                "top": 211,
                                                "left": 62
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                },
                                {
                                    "year": 2020,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 414,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 193,
                                            "height": 64,
                                            "top": 346,
                                            "left": 128
                                        },
                                        "faceArea": {
                                            "width": 111,
                                            "height": 91,
                                            "top": 176,
                                            "left": 32,
                                            "birthDateAreaDistance": {
                                                "top": 170,
                                                "left": 96
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ],
                            "driverLicence": [
                                {
                                    "year": 1,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 /",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/.*([0-9]{2})\\/([0-9]{2})\\/([0-9]{4})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 2,
                                            "month": 1,
                                            "year": 3
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 549,
                                            "height": 350,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 165,
                                            "height": 47,
                                            "top": 76,
                                            "left": 381
                                        },
                                        "faceArea": {
                                            "width": 127,
                                            "height": 128,
                                            "top": 146,
                                            "left": 34,
                                            "birthDateAreaDistance": {
                                                "top": -70,
                                                "left": 347
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ]
                        }
                    },
                    "TX": {
                        "stateName": "Texas",
                        "idConfig": {
                            "idCard": [],
                            "passport": [
                                {
                                    "year": 2006,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 427,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 210,
                                            "height": 56,
                                            "top": 370,
                                            "left": 112
                                        },
                                        "faceArea": {
                                            "width": 119,
                                            "height": 105,
                                            "top": 159,
                                            "left": 50,
                                            "birthDateAreaDistance": {
                                                "top": 211,
                                                "left": 62
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                },
                                {
                                    "year": 2020,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 414,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 193,
                                            "height": 64,
                                            "top": 346,
                                            "left": 128
                                        },
                                        "faceArea": {
                                            "width": 111,
                                            "height": 91,
                                            "top": 176,
                                            "left": 32,
                                            "birthDateAreaDistance": {
                                                "top": 170,
                                                "left": 96
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ],
                            "driverLicence": [
                                {
                                    "year": 2020,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 /",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/.*([0-9]{2})\\/([0-9]{2})\\/([0-9]{4})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 2,
                                            "month": 1,
                                            "year": 3
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 60,
                                    "contrast": 80,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 548,
                                            "height": 350,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 218,
                                            "height": 66,
                                            "top": 107,
                                            "left": 140
                                        },
                                        "faceArea": {
                                            "width": 124,
                                            "height": 124,
                                            "top": 138,
                                            "left": 9,
                                            "birthDateAreaDistance": {
                                                "top": -31,
                                                "left": 131
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ]
                        }
                    },
                    "UT": {
                        "stateName": "Utah",
                        "idConfig": {
                            "idCard": [],
                            "passport": [
                                {
                                    "year": 2006,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 427,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 210,
                                            "height": 56,
                                            "top": 370,
                                            "left": 112
                                        },
                                        "faceArea": {
                                            "width": 119,
                                            "height": 105,
                                            "top": 159,
                                            "left": 50,
                                            "birthDateAreaDistance": {
                                                "top": 211,
                                                "left": 62
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                },
                                {
                                    "year": 2020,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 414,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 193,
                                            "height": 64,
                                            "top": 346,
                                            "left": 128
                                        },
                                        "faceArea": {
                                            "width": 111,
                                            "height": 91,
                                            "top": 176,
                                            "left": 32,
                                            "birthDateAreaDistance": {
                                                "top": 170,
                                                "left": 96
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ],
                            "driverLicence": [
                                {
                                    "year": 1,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 /",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/([0-9]{2})\\/([0-9]{2})\\/([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 2,
                                            "month": 1,
                                            "year": 3
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 546,
                                            "height": 350,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 204,
                                            "height": 63,
                                            "top": 240,
                                            "left": 262
                                        },
                                        "faceArea": {
                                            "width": 120,
                                            "height": 123,
                                            "top": 127,
                                            "left": 62,
                                            "birthDateAreaDistance": {
                                                "top": 113,
                                                "left": 200
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ]
                        }
                    },
                    "VA": {
                        "stateName": "Virginia",
                        "idConfig": {
                            "idCard": [],
                            "passport": [
                                {
                                    "year": 2006,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 427,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 210,
                                            "height": 56,
                                            "top": 370,
                                            "left": 112
                                        },
                                        "faceArea": {
                                            "width": 119,
                                            "height": 105,
                                            "top": 159,
                                            "left": 50,
                                            "birthDateAreaDistance": {
                                                "top": 211,
                                                "left": 62
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                },
                                {
                                    "year": 2020,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 USA",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/USA([0-9]{2})([0-9]{2})([0-9]{2})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 3,
                                            "month": 2,
                                            "year": 1
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 600,
                                            "height": 414,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 193,
                                            "height": 64,
                                            "top": 346,
                                            "left": 128
                                        },
                                        "faceArea": {
                                            "width": 111,
                                            "height": 91,
                                            "top": 176,
                                            "left": 32,
                                            "birthDateAreaDistance": {
                                                "top": 170,
                                                "left": 96
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ],
                            "driverLicence": [
                                {
                                    "year": 1,
                                    "tesseractConfig": {
                                        "tessedit_char_whitelist": "1234567890 /",
                                        "tessedit_ocr_engine_mode": 2
                                    },
                                    "stripWhiteSpace": false,
                                    "textMatcherRule": [
                                        "/([0-9]{2})\\/([0-9]{2})\\/([0-9]{4})/gi"
                                    ],
                                    "dateComponentsPosition": [
                                        {
                                            "day": 2,
                                            "month": 1,
                                            "year": 3
                                        }
                                    ],
                                    "monthNameLanguage": "en",
                                    "brightness": 10,
                                    "contrast": 40,
                                    "threshold": 0,
                                    "idSizeList": {
                                        "container": {
                                            "width": 546,
                                            "height": 350,
                                            "ratioType": 1
                                        },
                                        "birthDateArea": {
                                            "width": 201,
                                            "height": 63,
                                            "top": 231,
                                            "left": 272
                                        },
                                        "faceArea": {
                                            "width": 135,
                                            "height": 120,
                                            "top": 138,
                                            "left": 24,
                                            "birthDateAreaDistance": {
                                                "top": 93,
                                                "left": 248
                                            }
                                        }
                                    },
                                    "idRegionZoom": 2
                                }
                            ]
                        }
                    }
                }
            }
        };
    })(Config = Avs.Config || (Avs.Config = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var DataChannel;
    (function (DataChannel) {
        /**
         * Http requests data channel handler
         *
         */
        var Http = /** @class */ (function () {
            function Http(config, event) {
                if (typeof Avs.Helper.Ajax === 'undefined') {
                    this.debug.error(25002, 'Core ajax library not loaded');
                    throw new Error('Core ajax library not loaded.');
                }
                this.config = config;
                this.debug = new Avs.Debug.Log(this.config.debugLevel || Avs.Debug.Log.LOG_LEVEL_ERROR);
                this.debug.info('Http datachannel created.');
            }
            Http.prototype.request = function (requestPath, data) {
                return Avs.Helper.Ajax.post(this.config.apiEndpoint + requestPath, data);
            };
            Http.prototype.requestRaw = function (requestPath, data, type) {
                var requestType = type || 'post';
                return $.ajax({
                    type: requestType,
                    dataType: 'json',
                    data: data || {},
                    url: this.config.apiEndpoint + requestPath
                });
            };
            return Http;
        }());
        DataChannel.Http = Http;
    })(DataChannel = Avs.DataChannel || (Avs.DataChannel = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var DataChannel;
    (function (DataChannel) {
        var Webrtc = /** @class */ (function () {
            function Webrtc(config, event, api) {
                this.config = config;
                this.debug = new Avs.Debug.Log(this.config.debugLevel || Avs.Debug.Log.LOG_LEVEL_ERROR);
                this.debug.info('Webrtc datachannel created.');
                this.options = this.config.options;
                this.event = event;
                this.api = api;
                this.videoElement = config.options.localVideo;
                this.currentFallbackStep = 0;
                this.resolutionFallbackList = [
                    {
                        width: Webrtc.DEFAULT_RESOLUTION_WIDTH_MIN,
                        height: Webrtc.DEFAULT_RESOLUTION_HEIGHT_MIN
                    },
                    {
                        width: Webrtc.RESOLUTION_DOWNGRADE_STEP_1_WIDTH,
                        height: Webrtc.RESOLUTION_DOWNGRADE_STEP_1_HEIGHT
                    },
                    {
                        width: Webrtc.RESOLUTION_DOWNGRADE_STEP_2_WIDTH,
                        height: Webrtc.RESOLUTION_DOWNGRADE_STEP_2_HEIGHT
                    }
                ];
                this.eventNamesPrefix = this.config.options.eventNamesPrefix
                    ? this.config.options.eventNamesPrefix + '.'
                    : '';
            }
            Webrtc.prototype.init = function () {
                this.startStreaming();
            };
            Webrtc.prototype.startStreaming = function () {
                var _this = this;
                var streamVideoInputDevice = this.config.options.streamVideoInputDevice;
                var facingMode = this.config.options.facingMode;
                this.debug.info('Trying to start the stream using resolution: ' + JSON.stringify(this.resolutionFallbackList[this.currentFallbackStep]));
                var videoConstraints = {
                    width: { exact: this.resolutionFallbackList[this.currentFallbackStep].width },
                    height: { exact: this.resolutionFallbackList[this.currentFallbackStep].height }
                };
                if (streamVideoInputDevice !== null) {
                    videoConstraints.deviceId = { exact: streamVideoInputDevice };
                }
                if (facingMode !== null) {
                    delete videoConstraints.deviceId;
                    videoConstraints.facingMode = { exact: facingMode };
                }
                navigator.mediaDevices.getUserMedia({
                    video: videoConstraints
                }).then(function (stream) {
                    _this.streamInstance = stream;
                    _this.videoElement.srcObject = stream;
                    _this.videoElement.onplay = function () {
                        setTimeout(function () {
                            _this.event.emit(_this.eventNamesPrefix + Webrtc.ON_VIDEO_PLAY);
                        }, Webrtc.ON_VIDEO_PLAY_DELAY_MS);
                    };
                }, function (error) {
                    if (_this.currentFallbackStep < _this.resolutionFallbackList.length - 1) {
                        _this.currentFallbackStep++;
                        _this.startStreaming();
                    }
                    else {
                        _this.debug.error(25003, 'Webcam initialization error', error);
                        _this.event.emit(_this.eventNamesPrefix + Webrtc.ON_WEBCAM_INIT_ERROR, {
                            code: 25003,
                            msg: 'Webcam initialization error'
                        });
                    }
                });
            };
            Webrtc.prototype.stopStreaming = function () {
                this.streamInstance.getTracks().forEach(function (track) {
                    track.stop();
                });
            };
            Webrtc.DEFAULT_RESOLUTION_WIDTH_MIN = 1280;
            Webrtc.DEFAULT_RESOLUTION_HEIGHT_MIN = 720;
            Webrtc.RESOLUTION_DOWNGRADE_STEP_1_WIDTH = 800;
            Webrtc.RESOLUTION_DOWNGRADE_STEP_1_HEIGHT = 600;
            Webrtc.RESOLUTION_DOWNGRADE_STEP_2_WIDTH = 640;
            Webrtc.RESOLUTION_DOWNGRADE_STEP_2_HEIGHT = 480;
            Webrtc.ON_VIDEO_PLAY = 'Avs.Datachannel.WebRtc.onVideoPlay';
            Webrtc.ON_WEBCAM_INIT_ERROR = 'Avs.Datachannel.WebRtc.onStreamingError';
            Webrtc.ON_VIDEO_PLAY_DELAY_MS = 1000;
            return Webrtc;
        }());
        DataChannel.Webrtc = Webrtc;
    })(DataChannel = Avs.DataChannel || (Avs.DataChannel = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Debug;
    (function (Debug) {
        /**
         * Logger class activated based on a specified debug level
         *
         */
        var Log = /** @class */ (function () {
            function Log(debugLevel) {
                this.debugLevel = Log.LOG_LEVEL_ERROR;
                this.container = $(Log.CONTAINER_SELECTOR);
                if (debugLevel) {
                    this.debugLevel = debugLevel;
                }
            }
            Log.prototype.error = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                if (this.debugLevel >= Log.LOG_LEVEL_ERROR) {
                    console.error.apply(console, arguments);
                }
            };
            Log.prototype.warn = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                if (this.debugLevel >= Log.LOG_LEVEL_WARN) {
                    console.warn.apply(console, arguments);
                }
            };
            Log.prototype.info = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                if (this.debugLevel >= Log.LOG_LEVEL_INFO) {
                    console.log.apply(console, arguments);
                }
            };
            Log.prototype.logToContainer = function (content) {
                if (this.container.length && !this.container.hasClass('isHidden')) {
                    this.container.append(content);
                    this.container.get(0).scrollTop = this.container.get(0).scrollHeight;
                }
            };
            Log.genericLog = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                var debug = new Debug.Log(Debug.Log.LOG_LEVEL_INFO);
                debug.info(params);
            };
            Log.LOG_LEVEL_ERROR = 1;
            Log.LOG_LEVEL_WARN = 2;
            Log.LOG_LEVEL_INFO = 4;
            Log.CONTAINER_SELECTOR = '#debugArea';
            return Log;
        }());
        Debug.Log = Log;
    })(Debug = Avs.Debug || (Avs.Debug = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Entity;
    (function (Entity) {
        var ScanIdAgeVerification = /** @class */ (function () {
            function ScanIdAgeVerification() {
                this.idCountry = null;
                this.idState = null;
                this.idTypeString = null;
                this.idVariantCurrent = 0;
                this.initialValues();
            }
            ScanIdAgeVerification.getInstance = function () {
                if (!this.instance) {
                    this.instance = new ScanIdAgeVerification();
                }
                return this.instance;
            };
            ScanIdAgeVerification.prototype.initialValues = function () {
                this.videoDeviceId = null;
                this.facingMode = null;
                this.validScanNumber = 0;
                this.totalScanNumber = 0;
                this.validScanValueList = [];
                this.lowestScanValue = 0;
                this.validFaceNumber = 0;
                this.totalFaceNumber = 0;
                this.validCanvasFaceList = [];
                this.validFaceList = [];
                this.workingBrightnessValue = null;
                this.workingContrastValue = null;
                this.totalValidFaceMatch = 0;
                this.resourcesPreloaded = false;
            };
            ScanIdAgeVerification.prototype.setLowestScanValue = function () {
                this.lowestScanValue = Math.min.apply(Math, this.validScanValueList);
            };
            ScanIdAgeVerification.prototype.getIdTypeConfig = function () {
                if (this.idState !== null) {
                    return Avs.Config.scanIdList[this.idCountry]['stateList'][this.idState]['idConfig'][this.idTypeString][this.idVariantCurrent];
                }
                return Avs.Config.scanIdList[this.idCountry]['idConfig'][this.idTypeString][this.idVariantCurrent];
            };
            ScanIdAgeVerification.prototype.incrementIdVariantCurrent = function () {
                var totalIdVariantNumber = 0;
                if (this.idState !== null) {
                    totalIdVariantNumber = Avs.Config.scanIdList[this.idCountry]['stateList'][this.idState]['idConfig'][this.idTypeString].length;
                }
                else {
                    totalIdVariantNumber = Avs.Config.scanIdList[this.idCountry]['idConfig'][this.idTypeString].length;
                }
                this.idVariantCurrent = (this.idVariantCurrent + 1) % totalIdVariantNumber;
            };
            // TODO: make this dynamic, not static (extract from DB maybe)
            ScanIdAgeVerification.prototype.getStateMajorityList = function () {
                return {
                    "US": {
                        "AR": 18,
                        "LA": 18,
                        "MS": 21,
                        "MT": 18,
                        "NC": 18,
                        "TX": 18,
                        "UT": 18,
                        "VA": 18
                    }
                };
            };
            ScanIdAgeVerification.RATIO_TYPE_LANDSCAPE = 1;
            ScanIdAgeVerification.RATIO_TYPE_PORTRAIT = 2;
            return ScanIdAgeVerification;
        }());
        Entity.ScanIdAgeVerification = ScanIdAgeVerification;
    })(Entity = Avs.Entity || (Avs.Entity = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Entity;
    (function (Entity) {
        var SelfieAgeDetection = /** @class */ (function () {
            function SelfieAgeDetection() {
                this.initialValues();
            }
            SelfieAgeDetection.getInstance = function () {
                if (!this.instance) {
                    this.instance = new SelfieAgeDetection();
                }
                return this.instance;
            };
            SelfieAgeDetection.prototype.initialValues = function () {
                this.videoDeviceId = null;
                this.facingMode = null;
                this.totalScanNumber = 0;
                this.totalExpressionScanNumber = 0;
                this.validScanNumber = 0;
                this.averageAge = 0;
                this.totalInvalidFaceMatch = 0;
                this.ageResultList = [];
                this.validCanvasFaceList = [];
                this.validFaceList = [];
                this.resourcesPreloaded = false;
                this.validateSmileExpression = null;
            };
            return SelfieAgeDetection;
        }());
        Entity.SelfieAgeDetection = SelfieAgeDetection;
    })(Entity = Avs.Entity || (Avs.Entity = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Entity;
    (function (Entity) {
        /**
         * Handles UI entity
         *
         */
        var Ui = /** @class */ (function () {
            function Ui() {
                this.initialValues();
            }
            Ui.getInstance = function () {
                if (!this.instance) {
                    this.instance = new Ui();
                }
                return this.instance;
            };
            Ui.prototype.initialValues = function () {
                this.states = {};
            };
            return Ui;
        }());
        Entity.Ui = Ui;
    })(Entity = Avs.Entity || (Avs.Entity = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Entity;
    (function (Entity) {
        var VerificationStepGlobal = /** @class */ (function () {
            function VerificationStepGlobal() {
                this.initialValues();
            }
            VerificationStepGlobal.getInstance = function () {
                if (!this.instance) {
                    this.instance = new VerificationStepGlobal();
                }
                return this.instance;
            };
            VerificationStepGlobal.prototype.initialValues = function () {
                this.termsAndConditionAgreement = false;
                this.verificationType = VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL;
                this.faceApiType = VerificationStepGlobal.FACE_API_TYPE_FAST;
                this.tesseractType = VerificationStepGlobal.TESSERACT_TYPE_PRECISE_FR;
                this.screenOrientation = Avs.Helper.ResponsiveElements.DEVICE_ORIENTATION_PORTRAIT;
                this.stepId = VerificationStepGlobal.STEP_START_PAGE;
                this.partnerId = null;
                this.payload = null;
                this.successPayload = null;
                this.deviceLocationVerification = VerificationStepGlobal.DEVICE_LOCATION_VERIFICATION_INTERNAL;
                this.sessionId = null;
                this.isVerified = false;
                this.scanIdAgeVerificationInVideoBypassMode = false;
            };
            VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL = 1;
            VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_FORCED = 2;
            VerificationStepGlobal.VERIFICATION_TYPE_CREDIT_CARD = 3;
            VerificationStepGlobal.VERIFICATION_TYPE_SCAN_ID = 4;
            VerificationStepGlobal.FACE_API_TYPE_FAST = 1;
            VerificationStepGlobal.FACE_API_TYPE_PRECISE = 2;
            VerificationStepGlobal.TESSERACT_TYPE_FAST_EN = 1;
            VerificationStepGlobal.TESSERACT_TYPE_PRECISE_EN = 2;
            VerificationStepGlobal.TESSERACT_TYPE_FAST_FR = 3;
            VerificationStepGlobal.TESSERACT_TYPE_PRECISE_FR = 4;
            VerificationStepGlobal.STEP_START_PAGE = 1;
            VerificationStepGlobal.STEP_SELFIE_AGE_DETECTION_INTRO = 2;
            VerificationStepGlobal.STEP_SELFIE_AGE_DETECTION_PAGE = 3;
            VerificationStepGlobal.STEP_SCAN_ID_AGE_VERIFICATION_INTRO = 4;
            VerificationStepGlobal.STEP_SCAN_ID_AGE_VERIFICATION_PAGE = 5;
            VerificationStepGlobal.STEP_CREDIT_CARD_AGE_VERIFICATION_INTRO = 6;
            VerificationStepGlobal.STEP_CREDIT_CARD_AGE_VERIFICATION_PAGE = 7;
            VerificationStepGlobal.DEVICE_LOCATION_VERIFICATION_INTERNAL = 0;
            VerificationStepGlobal.DEVICE_LOCATION_VERIFICATION_EXTERNAL = 1;
            return VerificationStepGlobal;
        }());
        Entity.VerificationStepGlobal = VerificationStepGlobal;
    })(Entity = Avs.Entity || (Avs.Entity = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Event;
    (function (Event) {
        /**
         * Custom event library used for internal communication
         *
         */
        var Listener = /** @class */ (function () {
            function Listener(config) {
                this.config = config;
                this.debug = new Avs.Debug.Log(this.config.debugLevel || 0);
                this.eventListBefore = {};
                this.eventListAfter = {};
                this.eventList = {};
                this.eventListened = {};
                this.logIdStr = '';
            }
            Listener.prototype.logEvent = function (eventName, msg) {
                this.debug.info('[event-' + eventName + '] ' + msg);
            };
            Listener.prototype.logSetId = function (id) {
                this.logIdStr = id + ' - ';
            };
            Listener.prototype.log = function (msg) {
                this.debug.info(this.logIdStr + msg);
            };
            Listener.prototype.notice = function (msg) {
                this.debug.info(this.logIdStr + msg);
            };
            Listener.prototype.warn = function (msg) {
                this.debug.warn(this.logIdStr + msg);
            };
            Listener.prototype.error = function (msg) {
                this.debug.error(25010, this.logIdStr + msg);
            };
            Listener.prototype.destroy = function () {
                this.notice('destroy (delayed)');
                window.setTimeout(this.observerClearAll.bind(this), 5000);
            };
            Listener.prototype.observerClearAll = function () {
                if (this.fireListener) {
                    // au cas où il y a des références circulaires
                    this.fireListener.removeAllContext(this);
                }
                this.fireListener = null;
                this.eventListBefore = {};
                this.eventListAfter = {};
                this.eventList = {};
                this.notice('observerClearAll');
            };
            Listener.prototype.removeAllContext = function (context) {
                this.removeContextFromList(context, this.eventListBefore);
                this.removeContextFromList(context, this.eventList);
                this.removeContextFromList(context, this.eventListAfter);
                // todo: à voir si il faut mettre à jour this.eventListened aussi
            };
            Listener.prototype.removeContextFromList = function (context, eventList) {
                for (var event in eventList) {
                    var indice = eventList[event].length;
                    while (indice--) {
                        var eventData = eventList[event][indice];
                        if (eventData[1] === context) {
                            this.eventList[event].splice(indice, 1);
                        }
                    }
                }
            };
            // alias for fire event
            Listener.prototype.emit = function (eventName, params) {
                this.fire(eventName, params);
            };
            Listener.prototype.fire = function (eventName, params) {
                if (this.fireListener) {
                    // redirection simple
                    if (arguments.length > 1) {
                        var argList = Array.prototype.slice.call(arguments, 0);
                        return this.fireListener.fire.apply(this.fireListener, argList);
                    }
                    else {
                        return this.fireListener.fire(eventName);
                    }
                }
                var isInNormal = eventName in this.eventList;
                var isInBefore = eventName in this.eventListBefore;
                var isInAfter = eventName in this.eventListAfter;
                if (!isInNormal && !isInBefore && !isInAfter) {
                    this.logEvent(eventName, 'fire: no handler found');
                    return;
                }
                this.logEvent(eventName, 'fire');
                var argListCtx = Array.prototype.slice.call(arguments, 1);
                argListCtx.unshift(this);
                if (isInBefore && this.forward(this.eventListBefore[eventName], argListCtx)) {
                    this.logEvent(eventName, 'onBefore: exit request');
                    return;
                }
                if (isInNormal && this.forward(this.eventList[eventName], argListCtx)) {
                    this.logEvent(eventName, 'exit request');
                    return;
                }
                if (isInAfter && this.forward(this.eventListAfter[eventName], argListCtx)) {
                    this.logEvent(eventName, 'onAfter: exit request');
                    return;
                }
            };
            Listener.prototype.forward = function (observateurList, argList) {
                var i = observateurList.length;
                var r;
                while (i--) {
                    var delay = 0;
                    var fnctInfo = observateurList[i];
                    if (fnctInfo[2]) {
                        if ('delay' in fnctInfo[2]) {
                            delay = fnctInfo[2]['delay'];
                        }
                        if ('once' in fnctInfo[2]) {
                            observateurList.splice(i, 1);
                        }
                    }
                    if (fnctInfo[1]) {
                        if (delay) {
                            window.setTimeout(function () {
                                // todo: closure correcte pour la boucle avec une fonction qui retourne une function
                            }, delay);
                        }
                        else {
                            r = fnctInfo[0].apply(fnctInfo[1], argList);
                        }
                    }
                    else {
                        if (delay) {
                            window.setTimeout(function () {
                                // todo: closure correcte pour la boucle avec une fonction qui retourne une function
                            }, delay);
                        }
                        else {
                            r = fnctInfo[0].apply(this, argList);
                        }
                    }
                    if (r) {
                        return r;
                    }
                }
                return false;
            };
            Listener.prototype.registerEventName = function (eventName, fnct, context, options, position) {
                var eventData = [fnct, context, options];
                switch (position) {
                    case Listener.EVENT_BEFORE:
                        if (!(eventName in this.eventListBefore)) {
                            this.eventListBefore[eventName] = [];
                        }
                        this.eventListBefore[eventName].push(eventData);
                        break;
                    case Listener.EVENT_AFTER:
                        if (!(eventName in this.eventListAfter)) {
                            this.eventListAfter[eventName] = [];
                        }
                        this.eventListAfter[eventName].push(eventData);
                        break;
                    default:
                        if (!(eventName in this.eventList)) {
                            this.eventList[eventName] = [];
                        }
                        this.eventList[eventName].push(eventData);
                }
                this.eventListened[eventName] = true;
            };
            Listener.prototype.on = function (eventName, fnct, ctx, options) {
                this.registerEventName(eventName, fnct, ctx, options, 0);
            };
            Listener.prototype.onBefore = function (eventName, fnct, ctx, options) {
                this.registerEventName(eventName, fnct, ctx, options, Listener.EVENT_BEFORE);
            };
            Listener.prototype.onAfter = function (eventName, fnct, ctx, options) {
                this.registerEventName(eventName, fnct, ctx, options, Listener.EVENT_AFTER);
            };
            Listener.EVENT_BEFORE = 1;
            Listener.EVENT_AFTER = 2;
            return Listener;
        }());
        Event.Listener = Listener;
    })(Event = Avs.Event || (Avs.Event = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var GenericPage = /** @class */ (function () {
        function GenericPage(config) {
            this.debugLevel = GenericPage.DEFAULT_DEBUG_LEVEL;
            this.config = config;
            this.event = new Avs.Event.Listener(this.config.event);
            this.apiEndpoint = null;
            this.apiDataChannel = null;
            if (typeof config.api !== 'undefined' && typeof config.api.apiEndpoint !== 'undefined') {
                this.apiEndpoint = config.api.apiEndpoint;
                this.apiDataChannel = new Avs.DataChannel.Http({
                    apiEndpoint: this.apiEndpoint,
                    debugLevel: this.config.debugLevel
                }, this.event);
            }
            this.debug = new Avs.Debug.Log(this.config.debugLevel || GenericPage.DEFAULT_DEBUG_LEVEL);
            this.setDefaultDebugLevel();
            this.initEntities();
            this.initPlugins();
        }
        GenericPage.prototype.setDefaultDebugLevel = function () {
            for (var configValue in this.config) {
                if (typeof this.config[configValue] === 'object' &&
                    typeof this.config[configValue]['debugLevel'] == 'undefined' &&
                    configValue !== 'plugin') {
                    this.config[configValue]['debugLevel'] = this.debugLevel;
                }
            }
        };
        GenericPage.prototype.initEntities = function () {
            this.entity = {};
            for (var entityName in Avs.Entity) {
                this.entity[entityName] = Avs.Entity[entityName].getInstance();
            }
        };
        GenericPage.prototype.initPlugins = function () {
            this.plugin = {
                Library: {}
            };
            if (typeof this.config.plugin === 'undefined') {
                return;
            }
            for (var pluginCategory in this.config.plugin.Library) {
                if (this.config.plugin.Library.hasOwnProperty(pluginCategory)) {
                    // init a plugin category
                    if (typeof this.plugin[pluginCategory] === 'undefined') {
                        this.plugin.Library[pluginCategory] = {};
                    }
                    // init all config Plugins
                    for (var pluginName in this.config.plugin.Library[pluginCategory]) {
                        if (this.config.plugin.Library[pluginCategory].hasOwnProperty(pluginName)) {
                            this.plugin.Library[pluginCategory][pluginName] = new Avs.Plugin.Library[pluginCategory][pluginName](this.config.plugin.Library[pluginCategory][pluginName], this.event, {
                                apiDataChannel: this.apiDataChannel
                            });
                        }
                    }
                }
            }
        };
        GenericPage.prototype.destroyPlugins = function () {
            for (var pluginCategory in this.plugin) {
                if (this.plugin.hasOwnProperty(pluginCategory)) {
                    for (var pluginName in this.plugin[pluginCategory]) {
                        if (this.plugin[pluginCategory].hasOwnProperty(pluginName)) {
                            // destroy Plugins using the provided "destroy()" method
                            if (typeof this.plugin[pluginCategory][pluginName]['destroy'] === 'function') {
                                this.plugin[pluginCategory][pluginName]['destroy']();
                            }
                        }
                    }
                }
            }
        };
        GenericPage.prototype.destroy = function () {
            this.destroyPlugins();
            this.event.destroy();
        };
        GenericPage.DEFAULT_DEBUG_LEVEL = Avs.Debug.Log.LOG_LEVEL_ERROR;
        return GenericPage;
    }());
    Avs.GenericPage = GenericPage;
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var ResultPageFail = /** @class */ (function (_super) {
        __extends(ResultPageFail, _super);
        function ResultPageFail(config) {
            var _this = _super.call(this, config) || this;
            _this.debugLevel = ResultPageFail.DEFAULT_DEBUG_LEVEL;
            _this.config = config;
            _this.isPolling = false;
            _this.pollingEndpoint = config.api.pollingEndpoint;
            _this.pollingInterval = config.api.pollingInterval || ResultPageFail.DEFAULT_POOLING_INTERVAL_SECONDS;
            _this.pollingDataChannel = new Avs.DataChannel.Http({
                apiEndpoint: _this.pollingEndpoint,
                debugLevel: _this.config.debugLevel
            }, _this.event);
            return _this;
        }
        ResultPageFail.prototype.startApiPolling = function (partnerId, payload) {
            var _this = this;
            if (this.isPolling) {
                this.debug.warn('Api is already pooling');
                return;
            }
            this.isPolling = true;
            this.pollRequest(partnerId, payload);
            this.pollingTimerHandler = setInterval(function () {
                _this.pollRequest(partnerId, payload);
            }, this.pollingInterval * 1000);
        };
        ResultPageFail.prototype.stopApiPolling = function () {
            this.isPolling = false;
            clearInterval(this.pollingTimerHandler);
        };
        ResultPageFail.prototype.pollRequest = function (partnerId, payload) {
            var _this = this;
            this.pollingDataChannel
                .request('/isSuccess', {
                p: partnerId,
                d: payload
            })
                .then(function (response) {
                _this.event.emit(ResultPageFail.ON_POLL_DATA, response);
            }, function (error) {
                _this.event.emit(ResultPageFail.ON_POLL_ERROR, error);
            });
        };
        ResultPageFail.DEFAULT_DEBUG_LEVEL = Avs.Debug.Log.LOG_LEVEL_ERROR;
        ResultPageFail.DEFAULT_POOLING_INTERVAL_SECONDS = 5;
        ResultPageFail.ON_POLL_DATA = 'ResultPageFail.onPollData';
        ResultPageFail.ON_POLL_ERROR = 'ResultPageFail.onPollError';
        return ResultPageFail;
    }(Avs.GenericPage));
    Avs.ResultPageFail = ResultPageFail;
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var ResultPageSuccess = /** @class */ (function (_super) {
        __extends(ResultPageSuccess, _super);
        function ResultPageSuccess(config) {
            var _this = _super.call(this, config) || this;
            _this.debugLevel = ResultPageSuccess.DEFAULT_DEBUG_LEVEL;
            _this.config = config;
            _this.apiDataChannel = new Avs.DataChannel.Http({
                apiEndpoint: _this.config.api.apiEndpoint,
                debugLevel: _this.config.debugLevel
            });
            return _this;
        }
        ResultPageSuccess.DEFAULT_DEBUG_LEVEL = Avs.Debug.Log.LOG_LEVEL_ERROR;
        return ResultPageSuccess;
    }(Avs.GenericPage));
    Avs.ResultPageSuccess = ResultPageSuccess;
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var ScanIdAgeVerificationIntro = /** @class */ (function (_super) {
        __extends(ScanIdAgeVerificationIntro, _super);
        function ScanIdAgeVerificationIntro(config) {
            var _this = _super.call(this, config) || this;
            _this.debugLevel = ScanIdAgeVerificationIntro.DEFAULT_DEBUG_LEVEL;
            _this.config = config;
            return _this;
        }
        ScanIdAgeVerificationIntro.DEFAULT_DEBUG_LEVEL = Avs.Debug.Log.LOG_LEVEL_ERROR;
        return ScanIdAgeVerificationIntro;
    }(Avs.GenericPage));
    Avs.ScanIdAgeVerificationIntro = ScanIdAgeVerificationIntro;
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var ScanIdAgeVerificationPage = /** @class */ (function (_super) {
        __extends(ScanIdAgeVerificationPage, _super);
        function ScanIdAgeVerificationPage(config) {
            var _this = _super.call(this, config) || this;
            _this.debugLevel = ScanIdAgeVerificationPage.DEFAULT_DEBUG_LEVEL;
            _this.config = config;
            return _this;
        }
        ScanIdAgeVerificationPage.DEFAULT_DEBUG_LEVEL = Avs.Debug.Log.LOG_LEVEL_ERROR;
        return ScanIdAgeVerificationPage;
    }(Avs.GenericPage));
    Avs.ScanIdAgeVerificationPage = ScanIdAgeVerificationPage;
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var SelfieAgeDetectionIntro = /** @class */ (function (_super) {
        __extends(SelfieAgeDetectionIntro, _super);
        function SelfieAgeDetectionIntro(config) {
            var _this = _super.call(this, config) || this;
            _this.debugLevel = SelfieAgeDetectionIntro.DEFAULT_DEBUG_LEVEL;
            _this.config = config;
            return _this;
        }
        SelfieAgeDetectionIntro.DEFAULT_DEBUG_LEVEL = Avs.Debug.Log.LOG_LEVEL_ERROR;
        return SelfieAgeDetectionIntro;
    }(Avs.GenericPage));
    Avs.SelfieAgeDetectionIntro = SelfieAgeDetectionIntro;
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var SelfieAgeDetectionPage = /** @class */ (function (_super) {
        __extends(SelfieAgeDetectionPage, _super);
        function SelfieAgeDetectionPage(config) {
            var _this = _super.call(this, config) || this;
            _this.debugLevel = SelfieAgeDetectionPage.DEFAULT_DEBUG_LEVEL;
            _this.config = config;
            return _this;
        }
        SelfieAgeDetectionPage.DEFAULT_DEBUG_LEVEL = Avs.Debug.Log.LOG_LEVEL_ERROR;
        return SelfieAgeDetectionPage;
    }(Avs.GenericPage));
    Avs.SelfieAgeDetectionPage = SelfieAgeDetectionPage;
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var StartPage = /** @class */ (function (_super) {
        __extends(StartPage, _super);
        function StartPage(config) {
            var _this = _super.call(this, config) || this;
            _this.debugLevel = StartPage.DEFAULT_DEBUG_LEVEL;
            _this.config = config;
            _this.postMessage = new Avs.Helper.PostMessage(_this.event);
            _this.postMessage.initListener();
            _this.isPolling = false;
            _this.pollingEndpoint = config.api.pollingEndpoint;
            _this.pollingInterval = config.api.pollingInterval || StartPage.DEFAULT_POOLING_INTERVAL_SECONDS;
            _this.pollingDataChannel = new Avs.DataChannel.Http({
                apiEndpoint: _this.pollingEndpoint,
                debugLevel: _this.config.debugLevel
            }, _this.event);
            return _this;
        }
        StartPage.prototype.startApiPolling = function (partnerId, payload) {
            var _this = this;
            if (this.isPolling) {
                this.debug.warn('Api is already pooling');
                return;
            }
            this.isPolling = true;
            this.pollRequest(partnerId, payload);
            this.pollingTimerHandler = setInterval(function () {
                _this.pollRequest(partnerId, payload);
            }, this.pollingInterval * 1000);
        };
        StartPage.prototype.stopApiPolling = function () {
            this.isPolling = false;
            clearInterval(this.pollingTimerHandler);
        };
        StartPage.prototype.pollRequest = function (partnerId, payload) {
            var _this = this;
            this.pollingDataChannel
                .request('/isSuccess', {
                p: partnerId,
                d: payload
            })
                .then(function (response) {
                _this.event.emit(StartPage.ON_POLL_DATA, response);
            }, function (error) {
                _this.event.emit(StartPage.ON_POLL_ERROR, error);
            });
        };
        StartPage.DEFAULT_DEBUG_LEVEL = Avs.Debug.Log.LOG_LEVEL_ERROR;
        StartPage.DEFAULT_POOLING_INTERVAL_SECONDS = 5;
        StartPage.ON_POLL_DATA = 'StartPage.onPollData';
        StartPage.ON_POLL_ERROR = 'StartPage.onPollError';
        return StartPage;
    }(Avs.GenericPage));
    Avs.StartPage = StartPage;
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Helper;
    (function (Helper) {
        Helper.MSG_INTERNAL_ERROR = 'Internal error';
        var Ajax;
        (function (Ajax) {
            function extractError(data) {
                if ('content' in data) {
                    return {
                        code: 0,
                        msg: 'No error found'
                    };
                }
                if (!data) {
                    return {
                        code: 1,
                        msg: Helper.MSG_INTERNAL_ERROR
                    };
                }
                if (!('error' in data)) {
                    return {
                        code: 2,
                        msg: Helper.MSG_INTERNAL_ERROR
                    };
                }
                var errorInfoIn = data.error;
                var errorInfoOut = {
                    code: 3,
                    msg: Helper.MSG_INTERNAL_ERROR
                };
                if (errorInfoIn) {
                    if ('code' in errorInfoIn) {
                        errorInfoOut.code = errorInfoIn.code;
                    }
                    if ('msg' in errorInfoIn) {
                        // maybe use a custom translation from the error code (or maybe it is already translated)
                        errorInfoOut.msg = errorInfoIn.msg;
                    }
                    if ('extra' in errorInfoIn) {
                        // extra data about the error
                        errorInfoOut.extra = errorInfoIn.extra;
                    }
                }
                return errorInfoOut;
            }
            function post(path, content, timeout) {
                if (content === void 0) { content = null; }
                if (timeout === void 0) { timeout = 0; }
                var jqXHR = $.ajax({
                    type: 'post',
                    dataType: 'json',
                    data: content,
                    url: path,
                    timeout: timeout
                });
                var promise = jqXHR.then(function (data) {
                    var promiseDeferred;
                    if (!data || !('content' in data)) {
                        // application error
                        promiseDeferred = $.Deferred();
                        promiseDeferred.reject(extractError(data));
                        return promiseDeferred;
                    }
                    return data.content;
                }, function (xhr) {
                    var errorObj = {
                        code: 0,
                        msg: Helper.MSG_INTERNAL_ERROR
                    };
                    if (xhr.status == 500) {
                        // erreur de configuration du serveur
                        errorObj.code = 4;
                    }
                    else if (xhr.status == 200) {
                        errorObj.code = 5;
                    }
                    else if (xhr.statusText == "abort") {
                        errorObj.code = 7;
                    }
                    else {
                        errorObj.code = 6;
                    }
                    return errorObj;
                });
                promise.jqXHR = jqXHR;
                return promise;
            }
            Ajax.post = post;
        })(Ajax = Helper.Ajax || (Helper.Ajax = {}));
    })(Helper = Avs.Helper || (Avs.Helper = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Helper;
    (function (Helper) {
        var Canvas = /** @class */ (function () {
            function Canvas() {
            }
            Canvas.canvasToImage = function (canvasElement) {
                var dataURL = canvasElement.toDataURL();
                var imageElement = document.createElement('img');
                imageElement.setAttribute('src', dataURL);
                return imageElement;
            };
            Canvas.grayscaleCanvas = function (canvas) {
                var canvasContext = canvas.getContext('2d');
                var imgData = canvasContext.getImageData(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
                var pixels = imgData.data;
                for (var i = 0; i < pixels.length; i += 4) {
                    var lightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
                    pixels[i] = lightness;
                    pixels[i + 1] = lightness;
                    pixels[i + 2] = lightness;
                }
                canvasContext.putImageData(imgData, 0, 0);
            };
            Canvas.contrastCanvas = function (canvas, contrast) {
                var canvasContext = canvas.getContext('2d');
                var imgData = canvasContext.getImageData(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
                var pixels = imgData.data;
                contrast = (contrast / 100) + 1;
                var intercept = 128 * (1 - contrast);
                for (var i = 0; i < pixels.length; i += 4) {
                    pixels[i] = pixels[i] * contrast + intercept;
                    pixels[i + 1] = pixels[i + 1] * contrast + intercept;
                    pixels[i + 2] = pixels[i + 2] * contrast + intercept;
                }
                canvasContext.putImageData(imgData, 0, 0);
            };
            Canvas.brightnessCanvas = function (canvas, brightness) {
                var canvasContext = canvas.getContext('2d');
                var imgData = canvasContext.getImageData(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
                var pixels = imgData.data;
                for (var i = 0; i < pixels.length; i += 4) {
                    var red = pixels[i];
                    var green = pixels[i + 1];
                    var blue = pixels[i + 2];
                    var brightenedRed = (brightness + 100) / 100 * red;
                    var brightenedGreen = (brightness + 100) / 100 * green;
                    var brightenedBlue = (brightness + 100) / 100 * blue;
                    pixels[i] = brightenedRed;
                    pixels[i + 1] = brightenedGreen;
                    pixels[i + 2] = brightenedBlue;
                }
                canvasContext.putImageData(imgData, 0, 0);
            };
            Canvas.thresholdCanvas = function (canvas, threshold) {
                var canvasContext = canvas.getContext('2d');
                var imgData = canvasContext.getImageData(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
                var pixels = imgData.data;
                for (var i = 0; i < pixels.length; i += 4) {
                    var r = pixels[i];
                    var g = pixels[i + 1];
                    var b = pixels[i + 2];
                    var v = (0.2126 * r + 0.7152 * g + 0.0722 * b >= threshold) ? 255 : 0;
                    pixels[i] = pixels[i + 1] = pixels[i + 2] = v;
                }
                canvasContext.putImageData(imgData, 0, 0);
            };
            Canvas.fileToCanvas = function (file, canvas) {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = function (readerLoadEvent) {
                    var image = new Image();
                    image.src = readerLoadEvent.target.result;
                    image.onload = function (onloadEvent) {
                        canvas.width = image.width;
                        canvas.height = image.height;
                        var ctx = canvas.getContext('2d');
                        ctx.drawImage(image, 0, 0);
                    };
                };
            };
            return Canvas;
        }());
        Helper.Canvas = Canvas;
    })(Helper = Avs.Helper || (Avs.Helper = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Helper;
    (function (Helper) {
        /**
         * A collection of common used methods
         *
         */
        var Common = /** @class */ (function () {
            function Common() {
            }
            Common.isCanvasSupported = function () {
                var el = document.createElement('canvas');
                return !!(el.getContext && el.getContext('2d'));
            };
            Common.isWebrtcSupported = function () {
                var isSupported = false;
                var methodsToCheck = [
                    'RTCPeerConnection',
                    'webkitRTCPeerConnection',
                    'mozRTCPeerConnection',
                    'RTCIceGatherer'
                ];
                for (var i = 0, j = methodsToCheck.length; i < j; i++) {
                    if (methodsToCheck[i] in window) {
                        isSupported = true;
                        break;
                    }
                }
                return isSupported;
            };
            Common.getStreamDevices = function (callback) {
                var logger = new Avs.Debug.Log();
                var devices = {
                    audioinput: [],
                    videoinput: [],
                    audiooutput: []
                };
                navigator.mediaDevices.getUserMedia({ video: true }).then(function () {
                    navigator.mediaDevices.enumerateDevices().then(function (data) {
                        for (var deviceIndex in data) {
                            var device = data[deviceIndex];
                            devices[device.kind].push({
                                id: device.deviceId,
                                label: device.label,
                                "default": device.deviceId == 'default'
                            });
                        }
                        return callback(devices);
                    }, function (error) {
                        logger.error(25008, 'Could not enumerate user devices.');
                        return callback(null);
                    });
                }, function (error) {
                    logger.error(25009, 'Could not access user media.');
                    return callback(null);
                });
            };
            Common.hasCameraFacingMode = function (facingMode, callback) {
                navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: {
                        facingMode: { exact: facingMode }
                    }
                }).then(function () {
                    callback(true);
                }, function (error) {
                    callback(false);
                });
            };
            Common.cloneObject = function (obj) {
                if (null == obj || "object" != typeof obj) {
                    return obj;
                }
                var copy = obj.constructor();
                for (var attr in obj) {
                    if (obj.hasOwnProperty(attr)) {
                        copy[attr] = obj[attr];
                    }
                }
                return copy;
            };
            Common.getCurrentDate = function () {
                var date = new Date();
                // let day = date.getDate();
                // let month = date.getMonth() + 1;
                // let year = date.getFullYear();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                // let seconds = date.getSeconds();
                var amPm = hours >= 12 ? 'PM' : 'AM';
                return hours + ':' + minutes + ' ' + amPm;
            };
            Common.getDateInfo = function () {
                var userDate = new Date();
                var gmtDate = userDate.toUTCString();
                return { userDate: userDate, gmtDate: gmtDate };
            };
            Common.formatDate = function (date) {
                // let day = date.getDate();
                // let month = date.getMonth() + 1;
                // let year = date.getFullYear();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                // let seconds = date.getSeconds();
                var amPm = hours >= 12 ? 'PM' : 'AM';
                return hours + ':' + minutes + ' ' + amPm;
            };
            Common.parseURL = function (url) {
                var parser = document.createElement('a');
                var searchObject = {};
                var queries;
                var split;
                var i;
                // Let the browser do the work
                parser.href = url;
                // Convert query string to object
                queries = parser.search.replace(/^\?/, '').split('&');
                for (i = 0; i < queries.length; i++) {
                    split = queries[i].split('=');
                    searchObject[split[0]] = split[1];
                }
                return {
                    protocol: parser.protocol,
                    host: parser.host,
                    hostname: parser.hostname,
                    port: parser.port,
                    pathname: parser.pathname,
                    search: parser.search,
                    searchObject: searchObject,
                    hash: parser.hash
                };
            };
            Common.escapeRegExp = function (regexString) {
                return regexString.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            };
            Common.isMobileResolution = function () {
                return $(window).width() < 640;
            };
            Common.isIos = function () {
                return /iPad|iPhone|iPod/.test(navigator.userAgent);
            };
            Common.getCurrentTimestamp = function () {
                return +new Date();
            };
            Common.getCurrentTimestampSeconds = function () {
                return parseInt((+new Date() / 1000).toFixed());
            };
            Common.setLocalStorageValue = function (localStorageIndex, localStorageValue) {
                if (typeof localStorageValue === 'undefined' || localStorageValue === null) {
                    Avs.Debug.Log.genericLog('Invalid local storage value: ', localStorageIndex, localStorageValue);
                    return false;
                }
                try {
                    localStorage.setItem(localStorageIndex, localStorageValue);
                }
                catch (e) {
                    Avs.Debug.Log.genericLog('Could not store local storage value: ', localStorageIndex, localStorageValue, e);
                    return false;
                }
                return true;
            };
            Common.getLocalStorageValue = function (localStorageIndex) {
                var localStorageValue = null;
                try {
                    localStorageValue = localStorage.getItem(localStorageIndex);
                }
                catch (e) {
                    Avs.Debug.Log.genericLog('Could not get local storage value: ', localStorageIndex, e);
                }
                return localStorageValue;
            };
            Common.getLocalStorageDecodedValue = function (localStorageIndex) {
                return Common.getLocalStorageBooleanValue(localStorageIndex);
            };
            Common.getLocalStorageBooleanValue = function (localStorageIndex) {
                var localStorageValue = Common.getLocalStorageValue(localStorageIndex);
                var localStorageParsedValue = null;
                if (localStorageValue !== null) {
                    try {
                        localStorageParsedValue = JSON.parse(localStorageValue);
                    }
                    catch (e) {
                        localStorageParsedValue = null;
                    }
                }
                return localStorageParsedValue;
            };
            Common.removeLocalStorageValue = function (localStorageIndex) {
                try {
                    localStorage.removeItem(localStorageIndex);
                }
                catch (e) {
                    Avs.Debug.Log.genericLog('Could not remove local storage value: ', localStorageIndex, e);
                    return false;
                }
                return true;
            };
            Common.htmlEntitiesDecode = function (text) {
                return $("<div/>").html(text).text();
            };
            Common.getRealTarget = function (target, tagName) {
                if (!tagName) {
                    return target;
                }
                tagName = tagName.toLowerCase();
                var targetTagName = target.prop('tagName').toLowerCase();
                if (targetTagName !== tagName) {
                    var targetParentTagName = target.parent().prop('tagName').toLowerCase();
                    if (targetParentTagName === tagName) {
                        target = target.parent();
                    }
                    else {
                        target = null;
                    }
                }
                return target;
            };
            Common.calculateAverage = function (numberList) {
                return numberList.reduce(function (total, a) { return total + a; }) / numberList.length;
            };
            Common.decodeBase64 = function (token) {
                var tokenString = token;
                var equalSignCount = tokenString.substring(tokenString.length - 1);
                if (parseInt(equalSignCount) !== 0) {
                    tokenString = tokenString.substring(0, tokenString.length - 1);
                }
                tokenString = window.Base64.decode(tokenString);
                return JSON.parse(tokenString);
            };
            Common.hexToRgbA = function (hex, alpha) {
                var c;
                if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
                    c = hex.substring(1).split('');
                    if (c.length == 3) {
                        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
                    }
                    c = '0x' + c.join('');
                    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ', ' + alpha + ')';
                }
                return null;
            };
            return Common;
        }());
        Helper.Common = Common;
    })(Helper = Avs.Helper || (Avs.Helper = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Helper;
    (function (Helper) {
        var Country;
        (function (Country) {
            // TODO: add more when needed
            // https://dev.maxmind.com/geoip/legacy/codes?lang=en
            var ECodeList;
            (function (ECodeList) {
                ECodeList["AUSTRIA"] = "at";
                ECodeList["BELGIUM"] = "be";
                ECodeList["BULGARIA"] = "bg";
                ECodeList["CROATIA"] = "hr";
                ECodeList["CZECH_REPUBLIC"] = "cz";
                ECodeList["DENMARK"] = "dk";
                ECodeList["ESTONIA"] = "ee";
                ECodeList["FINLAND"] = "fi";
                ECodeList["FRANCE"] = "fr";
                ECodeList["GERMANY"] = "de";
                ECodeList["GREECE"] = "el";
                ECodeList["HUNGARY"] = "hu";
                ECodeList["ICELAND"] = "is";
                ECodeList["IRELAND"] = "ie";
                ECodeList["ITALY"] = "it";
                ECodeList["LATVIA"] = "lv";
                ECodeList["LIECHTENSTEIN"] = "li";
                ECodeList["LITHUANIA"] = "lt";
                ECodeList["LUXEMBOURG"] = "lu";
                ECodeList["MALTA"] = "mt";
                ECodeList["NETHERLANDS"] = "nl";
                ECodeList["NORWAY"] = "no";
                ECodeList["POLAND"] = "pl";
                ECodeList["PORTUGAL"] = "pt";
                ECodeList["REPUBLIC_OF_CYPRUS"] = "cy";
                ECodeList["ROMANIA"] = "ro";
                ECodeList["SLOVAKIA"] = "sk";
                ECodeList["SLOVENIA"] = "si";
                ECodeList["SPAIN"] = "es";
                ECodeList["SWEDEN"] = "se";
                ECodeList["SWITZERLAND"] = "ch";
                ECodeList["UNITED_KINGDOM"] = "gb";
                ECodeList["UNITED_STATES"] = "us";
            })(ECodeList = Country.ECodeList || (Country.ECodeList = {}));
            // TODO: add more when needed
            var EBrowserLanguageCountryList;
            (function (EBrowserLanguageCountryList) {
                EBrowserLanguageCountryList["AUSTRIA"] = "de-at";
                EBrowserLanguageCountryList["BELGIUM"] = "fr-be";
                EBrowserLanguageCountryList["BELGIUM_ALTERNATIVE_1"] = "nl-be";
                EBrowserLanguageCountryList["BULGARIA"] = "bg";
                EBrowserLanguageCountryList["CROATIA"] = "hr";
                EBrowserLanguageCountryList["CZECH_REPUBLIC"] = "cs";
                EBrowserLanguageCountryList["DENMARK"] = "da";
                EBrowserLanguageCountryList["ESTONIA"] = "et";
                EBrowserLanguageCountryList["FINLAND"] = "sv-fi";
                EBrowserLanguageCountryList["FRANCE"] = "fr";
                EBrowserLanguageCountryList["FRANCE_ALTERNATIVE_1"] = "fr-fr";
                EBrowserLanguageCountryList["FRANCE_ALTERNATIVE_2"] = "fr-mc";
                EBrowserLanguageCountryList["GERMANY"] = "de";
                EBrowserLanguageCountryList["GERMANY_ALTERNATIVE_1"] = "de-de";
                EBrowserLanguageCountryList["GREECE"] = "el";
                EBrowserLanguageCountryList["HUNGARY"] = "hu";
                EBrowserLanguageCountryList["ICELAND"] = "is";
                EBrowserLanguageCountryList["IRELAND"] = "en-ie";
                EBrowserLanguageCountryList["ITALY"] = "it";
                EBrowserLanguageCountryList["LATVIA"] = "lv";
                EBrowserLanguageCountryList["LIECHTENSTEIN"] = "de-li";
                EBrowserLanguageCountryList["LITHUANIA"] = "lt";
                EBrowserLanguageCountryList["LUXEMBOURG"] = "lb";
                EBrowserLanguageCountryList["MALTA"] = "mt";
                EBrowserLanguageCountryList["NETHERLANDS"] = "nl";
                EBrowserLanguageCountryList["NORWAY"] = "no";
                EBrowserLanguageCountryList["POLAND"] = "pl";
                EBrowserLanguageCountryList["PORTUGAL"] = "pt";
                EBrowserLanguageCountryList["REPUBLIC_OF_CYPRUS"] = "el";
                EBrowserLanguageCountryList["ROMANIA"] = "ro";
                EBrowserLanguageCountryList["SLOVAKIA"] = "sk";
                EBrowserLanguageCountryList["SLOVENIA"] = "sl";
                EBrowserLanguageCountryList["SPAIN"] = "es-es";
                EBrowserLanguageCountryList["SWEDEN"] = "sv";
                EBrowserLanguageCountryList["SWEDEN_ALTERNATIVE_1"] = "sv-sv";
                EBrowserLanguageCountryList["SWITZERLAND"] = "fr-ch";
                EBrowserLanguageCountryList["SWITZERLAND_ALTERNATIVE_1"] = "de-ch";
                EBrowserLanguageCountryList["SWITZERLAND_ALTERNATIVE_2"] = "it-ch";
                EBrowserLanguageCountryList["UNITED_KINGDOM"] = "en-gb";
                EBrowserLanguageCountryList["UNITED_STATES"] = "en-us";
            })(EBrowserLanguageCountryList = Country.EBrowserLanguageCountryList || (Country.EBrowserLanguageCountryList = {}));
            function getBrowserCountryFromLanguage(defaultCountry) {
                var countryCode = ECodeList.FRANCE.toString();
                if (defaultCountry) {
                    countryCode = defaultCountry;
                }
                var browserLanguage = navigator.language || navigator.userLanguage;
                switch (browserLanguage.toLowerCase()) {
                    case Country.EBrowserLanguageCountryList.AUSTRIA:
                        countryCode = Country.ECodeList.AUSTRIA;
                        break;
                    case Country.EBrowserLanguageCountryList.BELGIUM:
                    case Country.EBrowserLanguageCountryList.BELGIUM_ALTERNATIVE_1:
                        countryCode = Country.ECodeList.BELGIUM;
                        break;
                    case Country.EBrowserLanguageCountryList.BULGARIA:
                        countryCode = Country.ECodeList.BULGARIA;
                        break;
                    case Country.EBrowserLanguageCountryList.CROATIA:
                        countryCode = Country.ECodeList.CROATIA;
                        break;
                    case Country.EBrowserLanguageCountryList.CZECH_REPUBLIC:
                        countryCode = Country.ECodeList.CZECH_REPUBLIC;
                        break;
                    case Country.EBrowserLanguageCountryList.DENMARK:
                        countryCode = Country.ECodeList.DENMARK;
                        break;
                    case Country.EBrowserLanguageCountryList.ESTONIA:
                        countryCode = Country.ECodeList.ESTONIA;
                        break;
                    case Country.EBrowserLanguageCountryList.FINLAND:
                        countryCode = Country.ECodeList.FINLAND;
                        break;
                    case Country.EBrowserLanguageCountryList.FRANCE:
                    case Country.EBrowserLanguageCountryList.FRANCE_ALTERNATIVE_1:
                    case Country.EBrowserLanguageCountryList.FRANCE_ALTERNATIVE_2:
                        countryCode = Country.ECodeList.FRANCE;
                        break;
                    case Country.EBrowserLanguageCountryList.GERMANY:
                    case Country.EBrowserLanguageCountryList.GERMANY_ALTERNATIVE_1:
                        countryCode = Country.ECodeList.GERMANY;
                        break;
                    case Country.EBrowserLanguageCountryList.GREECE:
                        countryCode = Country.ECodeList.GREECE;
                        break;
                    case Country.EBrowserLanguageCountryList.HUNGARY:
                        countryCode = Country.ECodeList.HUNGARY;
                        break;
                    case Country.EBrowserLanguageCountryList.ICELAND:
                        countryCode = Country.ECodeList.ICELAND;
                        break;
                    case Country.EBrowserLanguageCountryList.IRELAND:
                        countryCode = Country.ECodeList.IRELAND;
                        break;
                    case Country.EBrowserLanguageCountryList.ITALY:
                        countryCode = Country.ECodeList.ITALY;
                        break;
                    case Country.EBrowserLanguageCountryList.LATVIA:
                        countryCode = Country.ECodeList.LATVIA;
                        break;
                    case Country.EBrowserLanguageCountryList.LIECHTENSTEIN:
                        countryCode = Country.ECodeList.LIECHTENSTEIN;
                        break;
                    case Country.EBrowserLanguageCountryList.LITHUANIA:
                        countryCode = Country.ECodeList.LITHUANIA;
                        break;
                    case Country.EBrowserLanguageCountryList.LUXEMBOURG:
                        countryCode = Country.ECodeList.LUXEMBOURG;
                        break;
                    case Country.EBrowserLanguageCountryList.MALTA:
                        countryCode = Country.ECodeList.MALTA;
                        break;
                    case Country.EBrowserLanguageCountryList.NETHERLANDS:
                        countryCode = Country.ECodeList.NETHERLANDS;
                        break;
                    case Country.EBrowserLanguageCountryList.NORWAY:
                        countryCode = Country.ECodeList.NORWAY;
                        break;
                    case Country.EBrowserLanguageCountryList.POLAND:
                        countryCode = Country.ECodeList.POLAND;
                        break;
                    case Country.EBrowserLanguageCountryList.PORTUGAL:
                        countryCode = Country.ECodeList.PORTUGAL;
                        break;
                    case Country.EBrowserLanguageCountryList.REPUBLIC_OF_CYPRUS:
                        countryCode = Country.ECodeList.REPUBLIC_OF_CYPRUS;
                        break;
                    case Country.EBrowserLanguageCountryList.ROMANIA:
                        countryCode = Country.ECodeList.ROMANIA;
                        break;
                    case Country.EBrowserLanguageCountryList.SLOVAKIA:
                        countryCode = Country.ECodeList.SLOVAKIA;
                        break;
                    case Country.EBrowserLanguageCountryList.SLOVENIA:
                        countryCode = Country.ECodeList.SLOVENIA;
                        break;
                    case Country.EBrowserLanguageCountryList.SPAIN:
                        countryCode = Country.ECodeList.SPAIN;
                        break;
                    case Country.EBrowserLanguageCountryList.SWEDEN:
                    case Country.EBrowserLanguageCountryList.SWEDEN_ALTERNATIVE_1:
                        countryCode = Country.ECodeList.SWEDEN;
                        break;
                    case Country.EBrowserLanguageCountryList.SWITZERLAND:
                    case Country.EBrowserLanguageCountryList.SWITZERLAND_ALTERNATIVE_1:
                    case Country.EBrowserLanguageCountryList.SWITZERLAND_ALTERNATIVE_2:
                        countryCode = Country.ECodeList.SWITZERLAND;
                        break;
                    case Country.EBrowserLanguageCountryList.UNITED_KINGDOM:
                        countryCode = Country.ECodeList.UNITED_KINGDOM;
                        break;
                    case Country.EBrowserLanguageCountryList.UNITED_STATES:
                        countryCode = Country.ECodeList.UNITED_STATES;
                        break;
                    default:
                    //
                }
                return countryCode;
            }
            Country.getBrowserCountryFromLanguage = getBrowserCountryFromLanguage;
        })(Country = Helper.Country || (Helper.Country = {}));
    })(Helper = Avs.Helper || (Avs.Helper = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Helper;
    (function (Helper) {
        var ElementPositionCalculator = /** @class */ (function () {
            function ElementPositionCalculator() {
            }
            ElementPositionCalculator.getScreenPositionFromConfig = function (elementConfig) {
                var bodyElement = $(window);
                var screenWidth = bodyElement.width();
                var screenHeight = bodyElement.height();
                if (screenWidth - elementConfig.boundary.left - elementConfig.boundary.right > elementConfig.maxWidth) {
                    var horizontalBoundary = (screenWidth - elementConfig.maxWidth) / 2;
                    elementConfig.boundary.left = horizontalBoundary;
                    elementConfig.boundary.right = horizontalBoundary;
                }
                if (screenHeight - elementConfig.boundary.top - elementConfig.boundary.bottom > elementConfig.maxHeight) {
                    var verticalBoundary = (screenHeight - elementConfig.maxHeight) / 2;
                    elementConfig.boundary.bottom = verticalBoundary + verticalBoundary - elementConfig.boundary.top;
                }
                var maxWidth = screenWidth - elementConfig.boundary.left - elementConfig.boundary.right;
                var maxHeight = screenHeight - elementConfig.boundary.top - elementConfig.boundary.bottom;
                var maxAspectRatio = maxWidth / maxHeight;
                var aspectRatio = elementConfig.width / elementConfig.height;
                var finalWidth = elementConfig.width;
                var finalHeight = elementConfig.height;
                var finalTop = elementConfig.boundary.top;
                var finalBottom = elementConfig.boundary.bottom;
                var finalLeft = elementConfig.boundary.left;
                var finalRight = elementConfig.boundary.right;
                var scaleRatio = 1;
                // maxWidth ratio greater than elementWidth ratio
                if (maxAspectRatio > aspectRatio) {
                    scaleRatio = maxHeight / elementConfig.height;
                    finalHeight = maxHeight;
                    finalWidth = elementConfig.width * scaleRatio;
                    var widthDiff = (maxWidth - finalWidth) / 2;
                    finalLeft += widthDiff;
                    finalRight += widthDiff;
                }
                else {
                    scaleRatio = maxWidth / elementConfig.width;
                    finalWidth = maxWidth;
                    finalHeight = elementConfig.height * scaleRatio;
                    var heightDiff = (maxHeight - finalHeight) / 2;
                    // uncomment if you want vertical centering of the container
                    // finalTop += heightDiff;
                    // finalBottom += heightDiff;
                    finalBottom += heightDiff * 2;
                }
                return {
                    screenWidth: screenWidth,
                    screenHeight: screenHeight,
                    width: finalWidth,
                    height: finalHeight,
                    top: finalTop,
                    bottom: finalBottom,
                    left: finalLeft,
                    right: finalRight,
                    scaleRatio: scaleRatio
                };
            };
            ElementPositionCalculator.getScreenPositionRelativeToContainer = function (containerConfig, elementConfig) {
                var containerScreenPosition = Avs.Helper.ElementPositionCalculator.getScreenPositionFromConfig(containerConfig);
                var screenWidth = containerScreenPosition.screenWidth;
                var screenHeight = containerScreenPosition.screenHeight;
                var finalWidth = elementConfig.width * containerScreenPosition.scaleRatio;
                var finalHeight = elementConfig.height * containerScreenPosition.scaleRatio;
                var finalTop = containerScreenPosition.top + (elementConfig.top * containerScreenPosition.scaleRatio);
                var finalBottom = screenHeight - finalHeight - finalTop;
                var finalLeft = containerScreenPosition.left + (elementConfig.left * containerScreenPosition.scaleRatio);
                var finalRight = screenWidth - finalWidth - finalLeft;
                var scaleRatio = containerScreenPosition.scaleRatio;
                return {
                    screenWidth: screenWidth,
                    screenHeight: screenHeight,
                    width: finalWidth,
                    height: finalHeight,
                    top: finalTop,
                    bottom: finalBottom,
                    left: finalLeft,
                    right: finalRight,
                    scaleRatio: scaleRatio
                };
            };
            ElementPositionCalculator.calculateBirthDateMaskPosition = function (faceCoordinates, idSizeConfig) {
                var faceDimensionRatio = faceCoordinates.width / idSizeConfig.faceArea.width;
                // allow up to 20% random position
                if (Math.random() > 0.5) {
                    faceDimensionRatio += faceDimensionRatio * Math.random() / 5;
                }
                else {
                    faceDimensionRatio -= faceDimensionRatio * Math.random() / 5;
                }
                return {
                    top: faceCoordinates.top + (idSizeConfig.faceArea.birthDateAreaDistance.top * faceDimensionRatio),
                    left: faceCoordinates.left + (idSizeConfig.faceArea.birthDateAreaDistance.left * faceDimensionRatio),
                    width: idSizeConfig.birthDateArea.width * faceDimensionRatio,
                    height: idSizeConfig.birthDateArea.height * faceDimensionRatio,
                    scalePercent: faceDimensionRatio
                };
            };
            ElementPositionCalculator.applyPositioning = function (element, positioning) {
                $(element).css({
                    //position: 'fixed',
                    //border  : 'solid',
                    width: positioning.width,
                    height: positioning.height,
                    top: positioning.top,
                    left: positioning.left
                });
            };
            return ElementPositionCalculator;
        }());
        Helper.ElementPositionCalculator = ElementPositionCalculator;
    })(Helper = Avs.Helper || (Avs.Helper = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Helper;
    (function (Helper) {
        var FilePreloader = /** @class */ (function () {
            function FilePreloader(fileList, event, instanceIndex) {
                this.fileList = fileList;
                this.fileListInfo = {
                    total: {
                        progress: 0,
                        status: FilePreloader.FILE_STATUS_PRELOADING,
                        error: {
                            code: 0,
                            msg: ''
                        }
                    }
                };
                this.event = event;
                this.instanceIndex = instanceIndex;
            }
            FilePreloader.prototype.startPreloading = function () {
                for (var i = 0, j = this.fileList.length; i < j; i++) {
                    this.preloadFile(this.fileList[i]);
                    this.fileListInfo[this.fileList[i]] = {
                        progress: 0,
                        status: FilePreloader.FILE_STATUS_PRELOADING,
                        error: {
                            code: 0,
                            msg: ''
                        }
                    };
                }
            };
            FilePreloader.prototype.preloadFile = function (fileUrl) {
                var _this = this;
                $.ajax({
                    type: 'get',
                    dataType: 'text',
                    url: fileUrl,
                    async: true,
                    processData: false,
                    success: function (data) {
                        var parsedData;
                        try {
                            parsedData = JSON.parse(data);
                        }
                        catch (e) {
                        }
                        if (typeof parsedData !== 'undefined' && typeof parsedData.error !== 'undefined') {
                            _this.fileListInfo[fileUrl].status = FilePreloader.FILE_STATUS_ERROR;
                            _this.fileListInfo[fileUrl].error = parsedData.error;
                        }
                        else {
                            _this.fileListInfo[fileUrl].progress = 100;
                            _this.fileListInfo[fileUrl].status = FilePreloader.FILE_STATUS_SUCCESS;
                        }
                        _this.triggerChange();
                    },
                    error: function (error, textStatus, errorThrown) {
                        _this.fileListInfo[fileUrl].status = FilePreloader.FILE_STATUS_ERROR;
                        _this.fileListInfo[fileUrl].error = {
                            code: 25010,
                            msg: 'status: ' + textStatus + ' error: ' + errorThrown
                        };
                        _this.triggerChange();
                    },
                    xhr: function () {
                        var xhr = $.ajaxSettings.xhr();
                        xhr.onprogress = function (e) {
                            _this.fileListInfo[fileUrl].progress = e.loaded / e.total * 100;
                            _this.triggerChange();
                        };
                        return xhr;
                    }
                });
            };
            FilePreloader.prototype.triggerChange = function () {
                var fileListPreloadComplete = true;
                var fileListTotalErrorNumber = 0;
                var fileListProgressTotal = 0;
                var fileListPreloadStatus = FilePreloader.FILE_STATUS_PRELOADING;
                for (var i in this.fileListInfo) {
                    if (i === 'total') {
                        continue;
                    }
                    fileListProgressTotal += this.fileListInfo[i].progress;
                    if (this.fileListInfo[i].status === FilePreloader.FILE_STATUS_PRELOADING) {
                        fileListPreloadComplete = false;
                    }
                    if (this.fileListInfo[i].status === FilePreloader.FILE_STATUS_ERROR) {
                        this.fileListInfo.total.error = this.fileListInfo[i].error;
                        fileListTotalErrorNumber++;
                    }
                }
                fileListProgressTotal = fileListProgressTotal / this.fileList.length;
                fileListProgressTotal = parseInt(fileListProgressTotal);
                if (fileListPreloadComplete) {
                    fileListPreloadStatus = fileListTotalErrorNumber == 0 ? FilePreloader.FILE_STATUS_SUCCESS : FilePreloader.FILE_STATUS_ERROR;
                }
                this.fileListInfo.total.progress = fileListProgressTotal;
                this.fileListInfo.total.status = fileListPreloadStatus;
                this.event.emit(FilePreloader.ON_PRELOAD_EVENT + '.' + this.instanceIndex, this.fileListInfo);
            };
            FilePreloader.ON_PRELOAD_EVENT = 'Avs.Helper.FilePreloader.onPreloadEvent';
            FilePreloader.FILE_STATUS_PRELOADING = 1;
            FilePreloader.FILE_STATUS_SUCCESS = 2;
            FilePreloader.FILE_STATUS_ERROR = 3;
            return FilePreloader;
        }());
        Helper.FilePreloader = FilePreloader;
    })(Helper = Avs.Helper || (Avs.Helper = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Helper;
    (function (Helper) {
        /**
         * Typescript implementation of https://github.com/pablodenadai/outlier
         */
        var Outlier = /** @class */ (function () {
            function Outlier(array) {
                if (!array || !(array instanceof Array)) {
                    array = [];
                }
                array = array.slice(0);
                array.sort(function (a, b) {
                    return a - b;
                });
                this.array = array;
            }
            Outlier.prototype.clone = function () {
                return new Outlier(this.array.slice(0));
            };
            Outlier.prototype.q1 = function () {
                var nums = this.clone();
                return nums.slice(0, Math.floor(nums.size() / 2)).median();
            };
            Outlier.prototype.q3 = function () {
                var nums = this.clone();
                return nums.slice(Math.ceil(nums.size() / 2)).median();
            };
            Outlier.prototype.iqr = function () {
                return this.q3() - this.q1();
            };
            Outlier.prototype.median = function () {
                var half = Math.floor(this.size() / 2);
                if (this.size() % 2) {
                    return this.array[half];
                }
                else {
                    return (this.array[half - 1] + this.array[half]) / 2;
                }
            };
            Outlier.prototype.slice = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                this.array = Array.prototype.slice.apply(this.array, arguments);
                return this;
            };
            Outlier.prototype.each = function (fn) {
                for (var i = 0, l = this.size(); i < l; i++) {
                    fn.call(this.array[i], this.array[i], i, this.array);
                }
                return this;
            };
            Outlier.prototype.findOutliers = function () {
                var median = this.median();
                var range = this.iqr() * 1.5;
                var outliers = [];
                this.each(function (num) {
                    if (Math.abs(num - median) > range) {
                        outliers.push(num);
                    }
                });
                return outliers;
            };
            Outlier.prototype.testOutlier = function (num) {
                return (Math.abs(num - this.median()) > this.iqr() * 1.5);
            };
            Outlier.prototype.size = function () {
                return this.array.length;
            };
            return Outlier;
        }());
        Helper.Outlier = Outlier;
    })(Helper = Avs.Helper || (Avs.Helper = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Helper;
    (function (Helper) {
        var PostMessage = /** @class */ (function () {
            function PostMessage(event) {
                this.eventsWereInit = false;
                this.event = event;
            }
            PostMessage.prototype.emit = function (messageName, messageData) {
                if (window.top === null) {
                    return;
                }
                var messageDataObject = {};
                if (messageData) {
                    messageDataObject = messageData;
                }
                window.top.postMessage({
                    name: messageName,
                    data: messageDataObject
                }, '*');
            };
            PostMessage.prototype.onMessage = function (message) {
                return;
            };
            PostMessage.prototype.initListener = function () {
                var _this = this;
                if (this.eventsWereInit) {
                    return;
                }
                window.addEventListener('message', function (event) {
                    _this.event.emit(PostMessage.ON_MESSAGE, event.data);
                });
                this.eventsWereInit = true;
            };
            PostMessage.ON_MESSAGE = 'onPostMessage';
            return PostMessage;
        }());
        Helper.PostMessage = PostMessage;
    })(Helper = Avs.Helper || (Avs.Helper = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Helper;
    (function (Helper) {
        var ResponsiveElements = /** @class */ (function () {
            function ResponsiveElements() {
            }
            ResponsiveElements.getDeviceOrientation = function () {
                var documentElement = $(document);
                var width = documentElement.width();
                var height = documentElement.height();
                return width / height > 1
                    ? ResponsiveElements.DEVICE_ORIENTATION_LANDSCAPE
                    : ResponsiveElements.DEVICE_ORIENTATION_PORTRAIT;
            };
            ResponsiveElements.DEVICE_ORIENTATION_LANDSCAPE = 'landscape';
            ResponsiveElements.DEVICE_ORIENTATION_PORTRAIT = 'portrait';
            return ResponsiveElements;
        }());
        Helper.ResponsiveElements = ResponsiveElements;
    })(Helper = Avs.Helper || (Avs.Helper = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Helper;
    (function (Helper) {
        var StringTool;
        (function (StringTool) {
            function escapeHtml(string) {
                var entityMap = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': '&quot;',
                    "'": '&#39;',
                    "/": '&#x2F;'
                };
                return String(string).replace(/[&<>"'\/]/g, function (s) {
                    return entityMap[s];
                });
            }
            StringTool.escapeHtml = escapeHtml;
        })(StringTool = Helper.StringTool || (Helper.StringTool = {}));
    })(Helper = Avs.Helper || (Avs.Helper = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Helper;
    (function (Helper) {
        var VideoAreaExtractor = /** @class */ (function () {
            function VideoAreaExtractor() {
            }
            VideoAreaExtractor.calculateMaskPosition = function (maskElement, videoElement) {
                var maskElementInstance = $(maskElement);
                var videoElementInstance = $(videoElement);
                var maskElementWidth = maskElementInstance.width();
                var maskElementHeight = maskElementInstance.height();
                var maskElementPosition = maskElementInstance.position();
                var maskElementBorder = parseInt(maskElementInstance.css('border-left-width'));
                var videoElementWidth = videoElementInstance.width();
                var videoElementHeight = videoElementInstance.height();
                var mediaWidth = videoElementInstance.get(0).videoWidth;
                var mediaHeight = videoElementInstance.get(0).videoHeight;
                var onScreenAspectRatio = videoElementWidth / videoElementHeight;
                var mediaAspectRatio = mediaWidth / mediaHeight;
                var scalePercent = 0;
                var maskElementTop = 0;
                var maskElementLeft = 0;
                if (onScreenAspectRatio > mediaAspectRatio) {
                    scalePercent = (videoElementWidth * 100 / mediaWidth);
                    maskElementTop = ((mediaHeight - (videoElementHeight * 100 / scalePercent)) / 2) + maskElementPosition.top * 100 / scalePercent;
                    maskElementLeft = maskElementPosition.left * 100 / scalePercent;
                    maskElementTop = maskElementTop + maskElementBorder;
                    maskElementLeft = maskElementLeft + maskElementBorder;
                }
                else {
                    scalePercent = (videoElementHeight * 100 / mediaHeight);
                    maskElementTop = maskElementPosition.top * 100 / scalePercent;
                    maskElementLeft = ((mediaWidth - (videoElementWidth * 100 / scalePercent)) / 2) + (maskElementPosition.left * 100 / scalePercent);
                    maskElementTop = maskElementTop + maskElementBorder;
                    maskElementLeft = maskElementLeft + maskElementBorder;
                }
                return {
                    top: maskElementTop,
                    left: maskElementLeft,
                    width: maskElementWidth * 100 / scalePercent,
                    height: maskElementHeight * 100 / scalePercent,
                    scalePercent: scalePercent
                };
            };
            VideoAreaExtractor.videoMaskToCanvas = function (videoElement, canvasElement, maskPosition, canvasZoom) {
                var canvasZoomValue = canvasZoom || 1;
                var videoElementInstance = $(videoElement);
                var canvasElementInstance = $(canvasElement);
                canvasElementInstance.get(0).width = maskPosition.width * canvasZoomValue;
                canvasElementInstance.get(0).height = maskPosition.height * canvasZoomValue;
                var contextCanvasBirthDate = canvasElementInstance.get(0).getContext('2d');
                contextCanvasBirthDate.drawImage(videoElementInstance.get(0), maskPosition.left, maskPosition.top, maskPosition.width, maskPosition.height, 0, 0, maskPosition.width * canvasZoomValue, maskPosition.height * canvasZoomValue);
                return canvasElementInstance.get(0);
            };
            return VideoAreaExtractor;
        }());
        Helper.VideoAreaExtractor = VideoAreaExtractor;
    })(Helper = Avs.Helper || (Avs.Helper = {}));
})(Avs || (Avs = {}));

"use strict";

"use strict";
var Avs;
(function (Avs) {
    var Plugin;
    (function (Plugin) {
        /**
         * Base class for handling Plugin
         *
         */
        var Handler = /** @class */ (function () {
            function Handler(config, event, api) {
                this.config = config;
                this.debug = new Avs.Debug.Log(this.config.debugLevel || Avs.Debug.Log.LOG_LEVEL_ERROR);
                this.event = event;
                this.api = api;
                this.beforeCreate();
            }
            Handler.prototype.beforeCreate = function () {
            };
            Handler.prototype.created = function () {
            };
            Handler.prototype.beforeDestroy = function () {
            };
            return Handler;
        }());
        Plugin.Handler = Handler;
    })(Plugin = Avs.Plugin || (Avs.Plugin = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Video;
    (function (Video) {
        /**
         * Base class for handling various video adapters
         *
         */
        var Handler = /** @class */ (function () {
            function Handler(config, event) {
                this.imageElement = null;
                this.config = config;
                this.debug = new Avs.Debug.Log(this.config.debugLevel || Avs.Debug.Log.LOG_LEVEL_ERROR);
                this.event = event;
                this.videoIsVisible = true;
            }
            Handler.prototype.show = function () {
                this.rootElement.style.display = 'block';
                this.videoIsVisible = true;
            };
            Handler.prototype.hide = function () {
                this.rootElement.style.display = 'none';
                this.videoIsVisible = false;
            };
            Handler.prototype.showImageReplacement = function (imagePath) {
                if (this.imageElement == null) {
                    var imageElement = document.createElement('img');
                    imageElement.setAttribute('class', 'replacementImage');
                    imageElement.style.display = 'none';
                    this.rootContainer.appendChild(imageElement);
                    this.imageElement = document.querySelector(this.config.rootContainer + ' .replacementImage');
                }
                this.hide();
                this.imageElement.setAttribute('src', imagePath);
                this.imageElement.style.display = 'block';
            };
            Handler.prototype.hideImageReplacement = function () {
                if (this.imageElement != null) {
                    this.imageElement.style.display = 'none';
                    this.show();
                }
            };
            Handler.prototype.getRootContainer = function () {
                return this.rootContainer;
            };
            Handler.prototype.getRootElement = function () {
                return this.rootElement;
            };
            Handler.prototype.stop = function () {
            };
            Handler.prototype.stopHideAndDestroy = function () {
                this.stop();
                this.hide();
                this.destroy();
            };
            Handler.prototype.mute = function () {
                // does not work with webrtc
                this.rootElement.muted = true;
            };
            Handler.prototype.unmute = function () {
                // does not work with webrtc
                this.rootElement.muted = false;
            };
            Handler.prototype.destroy = function () {
                this.stop();
                this.rootContainer.removeChild(this.rootElement);
            };
            return Handler;
        }());
        Video.Handler = Handler;
    })(Video = Avs.Video || (Avs.Video = {}));
})(Avs || (Avs = {}));

"use strict";
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var Common = /** @class */ (function () {
                function Common(event) {
                    this.childUiElements = [];
                    this.event = event;
                }
                Common.prototype.show = function (displayAsBlock) {
                    this.element.removeClass('isHidden');
                    this.states.visible = true;
                    this.updateChildUiElementStates();
                };
                Common.prototype.fadeIn = function () {
                    var _this = this;
                    this.element.fadeIn(500, function () {
                        _this.element.removeClass('isHidden');
                        _this.states.visible = true;
                        _this.updateChildUiElementStates();
                    });
                };
                Common.prototype.hide = function () {
                    this.element.addClass('isHidden');
                    this.states.visible = false;
                    this.updateChildUiElementStates();
                };
                Common.prototype.fadeOut = function () {
                    var _this = this;
                    this.element.fadeOut(500, function () {
                        _this.element.addClass('isHidden');
                        _this.states.visible = false;
                        _this.updateChildUiElementStates();
                    });
                };
                Common.prototype.toggleVisibility = function () {
                    if (this.states.visible) {
                        this.element.addClass('isHidden');
                        return;
                    }
                    this.element.removeClass('isHidden');
                };
                Common.prototype.enable = function () {
                    this.element.attr('disabled', false);
                    this.states.enabled = true;
                    this.enableAppearance();
                };
                Common.prototype.disable = function () {
                    this.element.attr('disabled', true);
                    this.states.enabled = false;
                    this.disableAppearance();
                };
                Common.prototype.enableAppearance = function () {
                    if (this.element.hasClass('isDisabled')) {
                        this.element.removeClass('isDisabled');
                    }
                };
                Common.prototype.disableAppearance = function () {
                    if (!this.element.hasClass('isDisabled')) {
                        this.element.addClass('isDisabled');
                    }
                };
                Common.prototype.incrementFontSize = function (units) {
                    var _this = this;
                    var unitsToIncrement = units || Common.FONT_SIZE_INCREMENT_STEP;
                    setTimeout(function () {
                        _this.element.css({
                            'font-size': '+=' + unitsToIncrement
                        });
                    }, 150); // wait for /ui/handler/scrollable @ initLibrary()
                };
                Common.prototype.updateLineHeight = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.element.css('lineHeight', parseInt(_this.element.css('fontSize')) + 'px');
                    }, 150); // wait for /ui/handler/scrollable @ initLibrary()
                };
                Common.prototype.decrementFontSize = function (units) {
                    var unitsToDecrement = units || Common.FONT_SIZE_DECREMENT_STEP;
                    this.element.css({
                        'font-size': '-=' + unitsToDecrement
                    });
                };
                Common.prototype.addChildUiElement = function (uiElement) {
                    this.childUiElements.push(uiElement);
                };
                Common.prototype.updateChildUiElementStates = function () {
                    if (this.childUiElements.length) {
                        for (var i = 0, j = this.childUiElements.length; i < j; i++) {
                            if (typeof this.childUiElements[i].initStates == 'function') {
                                this.childUiElements[i].initStates();
                            }
                        }
                    }
                };
                Common.prototype.getIdSelector = function () {
                    return '#' + this.element.attr('id');
                };
                Common.prototype.onClick = function (callback) {
                    this.element.click(function (e) {
                        callback(e);
                    });
                };
                Common.FONT_SIZE_INCREMENT_STEP = 1;
                Common.FONT_SIZE_DECREMENT_STEP = 1;
                return Common;
            }());
            Handler.Common = Common;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var Area = /** @class */ (function (_super) {
                __extends(Area, _super);
                function Area(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                Area.prototype.toggleVisibility = function () {
                    if (this.states.visible) {
                        return this.hide();
                    }
                    return this.show();
                };
                Area.prototype.clearContents = function () {
                    this.element.html('');
                    this.states.value = '';
                };
                Area.prototype.addContent = function (content) {
                    this.element.append(content);
                    this.states.value += content;
                };
                return Area;
            }(Handler.Common));
            Handler.Area = Area;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var Button = /** @class */ (function (_super) {
                __extends(Button, _super);
                function Button(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                Button.prototype.loadingIconIsAttached = function () {
                    var loadingIcon = this.element.find('.loading');
                    return loadingIcon.length > 0;
                };
                Button.prototype.attachLoadingIcon = function () {
                    this.element.find('i:eq(0)').after('<i class="' + Button.SPINNER_ICON_CLASS + ' loading isHidden" aria-hidden="true"></i>');
                };
                Button.prototype.showLoading = function () {
                    if (!this.loadingIconIsAttached()) {
                        this.attachLoadingIcon();
                    }
                    this.element.find('i:eq(0)').removeClass('isHidden').addClass('isHidden');
                    this.element.find('i.loading').removeClass('isHidden');
                    this.states.loading = true;
                };
                Button.prototype.hideLoading = function () {
                    this.element.find('i:eq(0)').removeClass('isHidden');
                    this.element.find('i.loading').removeClass('isHidden').addClass('isHidden');
                    this.states.loading = false;
                };
                Button.prototype.disableAndLoad = function () {
                    this.disable();
                    this.showLoading();
                };
                Button.prototype.enableAndStopLoad = function () {
                    this.hideLoading();
                    this.enable();
                };
                Button.prototype.onClick = function (callback) {
                    var _this = this;
                    this.element.click(function (e) {
                        // prevent clicking on disabled buttons
                        if (!_this.states.enabled) {
                            return;
                        }
                        callback(e);
                    });
                };
                Button.prototype.offClick = function () {
                    this.element.unbind();
                };
                Button.prototype.triggerClick = function () {
                    if (this.states.enabled) {
                        this.element.trigger('click');
                    }
                };
                Button.prototype.highlight = function () {
                    this.element.removeClass('isHighlighted').addClass('isHighlighted');
                };
                Button.SPINNER_ICON_CLASS = 'fa fa-spinner fa-spin';
                return Button;
            }(Handler.Common));
            Handler.Button = Button;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var CheckboxInput = /** @class */ (function (_super) {
                __extends(CheckboxInput, _super);
                function CheckboxInput(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                CheckboxInput.prototype.initListeners = function () {
                    var _this = this;
                    this.element.on('change', function (e) {
                        _this.states.value = _this.element.is(':checked');
                    });
                };
                CheckboxInput.prototype.check = function () {
                    this.states.value = true;
                    this.element.prop('checked', true);
                };
                CheckboxInput.prototype.uncheck = function () {
                    this.states.value = false;
                    this.element.prop('checked', false);
                };
                CheckboxInput.prototype.isChecked = function () {
                    return this.states.value;
                };
                CheckboxInput.prototype.setLabelValue = function (value) {
                    this.element.parent().find(CheckboxInput.LABEL_SELECTOR).text(value);
                    this.states.labelValue = value;
                };
                CheckboxInput.prototype.onChange = function (callback) {
                    var _this = this;
                    this.element.on('change', function (e) {
                        // prevent clicking on disabled buttons
                        if (!_this.states.enabled) {
                            return;
                        }
                        _this.states.value = _this.element.prop('checked');
                        callback(e);
                    });
                };
                CheckboxInput.LABEL_SELECTOR = '.labelValue:eq(0)';
                return CheckboxInput;
            }(Handler.Common));
            Handler.CheckboxInput = CheckboxInput;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var Counter = /** @class */ (function (_super) {
                __extends(Counter, _super);
                function Counter(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                Counter.prototype.increment = function () {
                    this.states.value++;
                    this.element.text(this.states.value);
                };
                Counter.prototype.decrement = function () {
                    this.states.value--;
                    this.element.text(this.states.value);
                };
                Counter.prototype.setValue = function (value) {
                    this.states.value = value;
                    this.element.text(value);
                };
                Counter.prototype.setStringValue = function (value) {
                    this.states.value = value;
                    this.element.text(value);
                };
                Counter.prototype.startSecondCount = function (direction, from, to, callback) {
                    var _this = this;
                    this.stopSecondCount();
                    this.setValue(from);
                    this.secondCountDirection = direction;
                    this.secondCountFrom = from;
                    this.secondCountTo = to;
                    this.secondCountHandler = setInterval(function () {
                        if (direction == Counter.SECOND_COUNT_DIRECTION_ASCENDING) {
                            _this.increment();
                        }
                        if (direction == Counter.SECOND_COUNT_DIRECTION_DESCENDING) {
                            _this.decrement();
                        }
                        if (_this.states.value == _this.secondCountTo) {
                            _this.stopSecondCount();
                            if (callback) {
                                callback();
                            }
                        }
                    }, Counter.COUNT_STEP);
                    this.states.isSecondCounting = true;
                };
                Counter.prototype.stopSecondCount = function () {
                    if (this.secondCountHandler) {
                        clearInterval(this.secondCountHandler);
                    }
                    this.states.isSecondCounting = false;
                };
                Counter.prototype.isSecondCounting = function () {
                    return this.states.isSecondCounting;
                };
                Counter.SECOND_COUNT_DIRECTION_ASCENDING = 1;
                Counter.SECOND_COUNT_DIRECTION_DESCENDING = 2;
                Counter.COUNT_STEP = 1000;
                return Counter;
            }(Handler.Common));
            Handler.Counter = Counter;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var Dropdown = /** @class */ (function (_super) {
                __extends(Dropdown, _super);
                function Dropdown(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                Dropdown.prototype.initListeners = function () {
                    var _this = this;
                    this.element.find('.dropdownHandle').on('click', function (e) {
                        if (_this.states.expanded) {
                            _this.compact();
                        }
                        else {
                            _this.expand();
                        }
                        _this.dropdownWasExpanded();
                        e.stopPropagation();
                    });
                    $(document).on('click', function (e) {
                        _this.compact();
                    });
                };
                Dropdown.prototype.toggleVisibility = function () {
                    if (this.states.visible) {
                        return this.hide();
                    }
                    return this.show();
                };
                Dropdown.prototype.expand = function () {
                    this.element.removeClass('isExpanded').addClass('isExpanded');
                    this.states.expanded = true;
                };
                Dropdown.prototype.compact = function () {
                    this.element.removeClass('isExpanded');
                    this.states.expanded = false;
                };
                // dummy function to be overwritten by child class
                Dropdown.prototype.dropdownWasExpanded = function () {
                };
                return Dropdown;
            }(Handler.Common));
            Handler.Dropdown = Dropdown;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var FileInput = /** @class */ (function (_super) {
                __extends(FileInput, _super);
                function FileInput(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                FileInput.prototype.initListeners = function () {
                    var _this = this;
                    this.element.on('change', function (e) {
                        _this.states.value = _this.element.val();
                    });
                };
                FileInput.prototype.getValue = function () {
                    return this.states.value;
                };
                FileInput.prototype.onChange = function (callback) {
                    var _this = this;
                    this.element.on('change', function (e) {
                        // prevent clicking on disabled buttons
                        if (!_this.states.enabled) {
                            return;
                        }
                        _this.states.value = _this.element.val();
                        callback(_this.states.value, e);
                    });
                };
                FileInput.prototype.clearValue = function () {
                    this.element.val('');
                    this.states.value = '';
                };
                FileInput.prototype.triggerFileBrowse = function () {
                    this.element.trigger('click');
                };
                return FileInput;
            }(Handler.Common));
            Handler.FileInput = FileInput;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var Label = /** @class */ (function (_super) {
                __extends(Label, _super);
                function Label(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                Label.prototype.setValue = function (value) {
                    this.states.value = value;
                    this.element.text(value);
                };
                Label.prototype.startBlinking = function () {
                    var _this = this;
                    if (this.states.isBlinking) {
                        return;
                    }
                    this.states.isBlinking = true;
                    this.states.blinkIsOn = false;
                    this.blinkHandler = setInterval(function () {
                        _this.states.blinkIsOn = !_this.states.blinkIsOn;
                        if (_this.states.blinkIsOn) {
                            _this.element.css({ opacity: Label.BLINK_OPACITY_RANGE });
                            return;
                        }
                        _this.element.css({ opacity: 1 });
                    }, Label.BLINK_INTERVAL_MILLISECONDS);
                };
                Label.prototype.clearColorLayout = function () {
                    this.element.removeClass(Label.COLOR_LAYOUT_RED);
                    this.element.removeClass(Label.COLOR_LAYOUT_GREEN);
                };
                Label.prototype.setRedText = function () {
                    this.clearColorLayout();
                    this.element.addClass('layoutRedText');
                };
                Label.prototype.setGreenText = function () {
                    this.clearColorLayout();
                    this.element.addClass('layoutGreenText');
                };
                Label.prototype.stopBlinking = function () {
                    if (this.states.isBlinking) {
                        clearInterval(this.blinkHandler);
                    }
                    this.element.css({ opacity: 1 });
                    this.states.isBlinking = false;
                    this.states.blinkIsOn = false;
                };
                Label.prototype.loadingIconIsAttached = function () {
                    var loadingIcon = this.element.find('.loading');
                    return loadingIcon.length > 0;
                };
                Label.prototype.attachLoadingIcon = function () {
                    this.element.prepend('<i class="' + Label.SPINNER_ICON_CLASS + ' loading isHidden" aria-hidden="true"></i>');
                };
                Label.prototype.showLoading = function () {
                    if (!this.loadingIconIsAttached()) {
                        this.attachLoadingIcon();
                    }
                    this.element.find('i:eq(0)').removeClass('isHidden').addClass('isHidden');
                    this.element.find('i.loading').removeClass('isHidden');
                    this.states.loading = true;
                };
                Label.prototype.hideLoading = function () {
                    this.element.find('i:eq(0)').removeClass('isHidden');
                    this.element.find('i.loading').removeClass('isHidden').addClass('isHidden');
                    this.states.loading = false;
                };
                Label.prototype.disableAndLoad = function () {
                    this.disable();
                    this.showLoading();
                };
                Label.prototype.enableAndStopLoad = function () {
                    this.hideLoading();
                    this.enable();
                };
                Label.BLINK_INTERVAL_MILLISECONDS = 500;
                Label.BLINK_OPACITY_RANGE = 0.5;
                Label.COLOR_LAYOUT_RED = 'layoutRedText';
                Label.COLOR_LAYOUT_GREEN = 'layoutGreenText';
                Label.SPINNER_ICON_CLASS = 'fa fa-cog fa-spin';
                return Label;
            }(Handler.Common));
            Handler.Label = Label;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var PercentCounter = /** @class */ (function (_super) {
                __extends(PercentCounter, _super);
                function PercentCounter(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.stepNumber = 1;
                    _this.stepIncrement = 100;
                    return _this;
                }
                PercentCounter.prototype.setStepNumber = function (stepNumber) {
                    this.stepNumber = stepNumber;
                    this.stepIncrement = PercentCounter.MAX_VALUE / this.stepNumber;
                };
                PercentCounter.prototype.increment = function () {
                    this.states.value = this.states.value + this.stepIncrement;
                    this.element.text(parseInt(this.states.value) + '%');
                };
                PercentCounter.prototype.decrement = function () {
                    this.states.value = this.states.value - this.stepIncrement;
                    this.element.text(parseInt(this.states.value) + '%');
                };
                PercentCounter.prototype.setValue = function (value) {
                    this.states.value = value;
                    this.element.text(value + '%');
                };
                PercentCounter.prototype.setStringValue = function (value) {
                    this.states.value = value;
                    this.element.text(value + '%');
                };
                PercentCounter.MAX_VALUE = 100;
                return PercentCounter;
            }(Handler.Common));
            Handler.PercentCounter = PercentCounter;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var QrCode = /** @class */ (function (_super) {
                __extends(QrCode, _super);
                function QrCode(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.debug = new Avs.Debug.Log(Avs.Debug.Log.LOG_LEVEL_ERROR);
                    if (typeof window.qr === 'undefined') {
                        _this.debug.error(25065, 'Required qr code library not loaded.');
                        throw new Error('Required qr code library not loaded.');
                    }
                    _this.qrCodeInstance = window.qr;
                    return _this;
                }
                QrCode.prototype.renderString = function (qrCodeString, size) {
                    var qrCodeSize = size || QrCode.QR_CODE_SIZE;
                    var qrCodeImage = this.qrCodeInstance.image({
                        size: qrCodeSize,
                        value: qrCodeString
                    });
                    this.element.html(qrCodeImage);
                };
                QrCode.prototype.renderTestToOtherDeviceQr = function () {
                    this.renderString(window.location.href.replace('/iframeRender', ''));
                };
                QrCode.prototype.toggleVisibility = function () {
                    if (this.states.visible) {
                        return this.hide();
                    }
                    return this.show();
                };
                QrCode.QR_CODE_SIZE = 10;
                return QrCode;
            }(Handler.Common));
            Handler.QrCode = QrCode;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var Reveal = /** @class */ (function (_super) {
                __extends(Reveal, _super);
                function Reveal(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                Reveal.prototype.show = function () {
                    this.element.removeClass('isHidden');
                    this.states.visible = true;
                    this.updateChildUiElementStates();
                };
                Reveal.prototype.hide = function () {
                    this.element.removeClass('isHidden').addClass('isHidden');
                    this.states.visible = false;
                    this.updateChildUiElementStates();
                };
                return Reveal;
            }(Handler.Common));
            Handler.Reveal = Reveal;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var Scrollable = /** @class */ (function (_super) {
                __extends(Scrollable, _super);
                function Scrollable(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                Scrollable.prototype.initLibrary = function (element) {
                    var _this = this;
                    // Retain current element's font-size because the $.niceScroll jQuery plugin is overwriting element's styles
                    var elementFontSize = element.css('fontSize');
                    setTimeout(function () {
                        _this.library = element.niceScroll({
                            cursorcolor: 'rgba(100,100,100,0.7)',
                            cursorborder: 'none',
                            background: 'none'
                        });
                        element.css('fontSize', elementFontSize);
                    }, 100);
                };
                Scrollable.prototype.scrollDown = function () {
                    this.element[0].scrollTop = this.element[0].scrollHeight;
                };
                Scrollable.prototype.scrollTop = function () {
                    this.element[0].scrollTop = 0;
                };
                return Scrollable;
            }(Handler.Common));
            Handler.Scrollable = Scrollable;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var SelectInput = /** @class */ (function (_super) {
                __extends(SelectInput, _super);
                function SelectInput(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                SelectInput.prototype.initListeners = function () {
                    var _this = this;
                    this.element.on('change', function (e) {
                        _this.states.value = _this.element.val();
                    });
                };
                SelectInput.prototype.addOptGroup = function (name) {
                    this.element.append($('<optgroup label="' + name + '"></optgroup>'));
                };
                SelectInput.prototype.addOption = function (name, value, selected, optGroup) {
                    var elementToAppendTo = this.element;
                    if (optGroup) {
                        elementToAppendTo = this.element.find('optgroup[label="' + optGroup + '"]');
                    }
                    elementToAppendTo.append($('<option>', {
                        value: value,
                        text: name,
                        selected: selected
                    }));
                    if (selected) {
                        this.states.value = value;
                    }
                };
                SelectInput.prototype.clearAllOptions = function () {
                    this.element.html('');
                };
                SelectInput.prototype.removeOption = function (value) {
                    this.element.find('option[value="' + value + '"]').remove();
                };
                SelectInput.prototype.hasOption = function (value) {
                    var valueFound = false;
                    this.element.find('option').each(function (index, elem) {
                        if ($(elem).val() == value) {
                            valueFound = true;
                        }
                    });
                    return valueFound;
                };
                SelectInput.prototype.selectOption = function (value) {
                    if (!this.hasOption(value)) {
                        return;
                    }
                    this.states.value = value;
                    this.element.val(value);
                };
                SelectInput.prototype.getSelectedOption = function () {
                    if (this.states.value === null) {
                        this.states.value = this.element.val();
                    }
                    return this.states.value;
                };
                SelectInput.prototype.onChange = function (callback) {
                    var _this = this;
                    this.element.on('change', function (e) {
                        // prevent clicking on disabled buttons
                        if (!_this.states.enabled) {
                            return;
                        }
                        _this.states.value = _this.element.val();
                        callback(_this.states.value);
                    });
                };
                return SelectInput;
            }(Handler.Common));
            Handler.SelectInput = SelectInput;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var Tabs = /** @class */ (function (_super) {
                __extends(Tabs, _super);
                function Tabs(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                Tabs.prototype.initListeners = function () {
                    var _this = this;
                    this.element.on('click', '.avsTab', function (e) {
                        var event = $(e.currentTarget);
                        var currentTabSelected = event.index();
                        var currentTabData = event.data();
                        if (_this.isDisabled(currentTabSelected)) {
                            return;
                        }
                        _this.selectTab(currentTabSelected);
                        _this.tabWasSelected(currentTabSelected, currentTabData);
                    });
                };
                Tabs.prototype.toggleVisibility = function () {
                    if (this.states.visible) {
                        return this.hide();
                    }
                    return this.show();
                };
                Tabs.prototype.isDisabled = function (tabNumber) {
                    return this.element.find('.avsTab:eq(' + tabNumber + ')').hasClass('isDisabled');
                };
                Tabs.prototype.disableTab = function (tabNumber) {
                    this.element.find('.avsTab:eq(' + tabNumber + ')').addClass('isDisabled');
                };
                Tabs.prototype.enableTab = function (tabNumber) {
                    this.element.find('.avsTab:eq(' + tabNumber + ')').removeClass('isDisabled');
                };
                Tabs.prototype.enableAllTabs = function () {
                    this.element.find('.avsTab').removeClass('isDisabled');
                };
                Tabs.prototype.isHidden = function (tabNumber) {
                    return this.element.find('.avsTab:eq(' + tabNumber + ')').hasClass('isHidden');
                };
                Tabs.prototype.hideTab = function (tabNumber) {
                    this.element.find('.avsTab:eq(' + tabNumber + ')').addClass('isHidden');
                };
                Tabs.prototype.showTab = function (tabNumber) {
                    this.element.find('.avsTab:eq(' + tabNumber + ')').removeClass('isHidden');
                };
                Tabs.prototype.showAllTabs = function () {
                    this.element.find('.avsTab').removeClass('isHidden');
                };
                Tabs.prototype.isSelected = function (tabNumber) {
                    return this.element.find('.avsTab:eq(' + tabNumber + ')').hasClass('isSelected');
                };
                Tabs.prototype.selectTab = function (tabNumber) {
                    this.deselectAllTabs();
                    this.unHighlightTab(tabNumber);
                    this.element.find('.avsTab:eq(' + tabNumber + ')')
                        .addClass('isSelected');
                    this.element.parent().find('.avsTabContent').addClass('isHidden');
                    this.element.parent().find('.avsTabContent:eq(' + tabNumber + ')').removeClass('isHidden');
                };
                Tabs.prototype.deselectAllTabs = function () {
                    this.element.find('.avsTab').removeClass('isSelected');
                };
                Tabs.prototype.selectAllTabs = function () {
                    this.element.find('.avsTab').addClass('isSelected');
                };
                Tabs.prototype.disableAllTabs = function () {
                    this.element.find('.avsTab').addClass('isDisabled');
                };
                Tabs.prototype.highlightTab = function (tabNumber) {
                    this.element.find('.avsTab:eq(' + tabNumber + ')')
                        .removeClass('isHighlighted')
                        .addClass('isHighlighted');
                };
                Tabs.prototype.unHighlightTab = function (tabNumber) {
                    this.element.find('.avsTab:eq(' + tabNumber + ')')
                        .removeClass('isHighlighted');
                };
                // dummy function to be overwritten by child class
                Tabs.prototype.tabWasSelected = function (tabNumber, tabData) {
                };
                return Tabs;
            }(Handler.Common));
            Handler.Tabs = Tabs;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var Text = /** @class */ (function (_super) {
                __extends(Text, _super);
                function Text(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                Text.prototype.toggleVisibility = function (displayAsBlock) {
                    if (this.states.visible) {
                        return this.hide();
                    }
                    return this.show(displayAsBlock);
                };
                Text.prototype.clearContents = function () {
                    this.element.html('');
                    this.states.value = '';
                };
                Text.prototype.setContent = function (content) {
                    this.element.html(content);
                    this.states.value = content;
                };
                Text.prototype.setImage = function (imagePath) {
                    var content = '<img src="' + imagePath + '"/>';
                    this.element.html(content);
                    this.states.content = content;
                };
                Text.prototype.addContent = function (content) {
                    this.element.append(content);
                    this.states.value += content;
                };
                return Text;
            }(Handler.Common));
            Handler.Text = Text;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var TextInput = /** @class */ (function (_super) {
                __extends(TextInput, _super);
                function TextInput(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                TextInput.prototype.toggleVisibility = function (displayAsBlock) {
                    if (this.states.visible) {
                        return this.hide();
                    }
                    return this.show(displayAsBlock);
                };
                TextInput.prototype.clearValue = function () {
                    this.element.val('');
                    this.states.value = '';
                };
                TextInput.prototype.setValue = function (content) {
                    this.element.val(content);
                    this.states.value = content;
                };
                TextInput.prototype.getValue = function () {
                    return this.states.value.trim();
                };
                return TextInput;
            }(Handler.Common));
            Handler.TextInput = TextInput;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var Textarea = /** @class */ (function (_super) {
                __extends(Textarea, _super);
                function Textarea(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                Textarea.ENTER_KEY_CODE = 13;
                return Textarea;
            }(Handler.Common));
            Handler.Textarea = Textarea;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Handler;
        (function (Handler) {
            var Timer = /** @class */ (function (_super) {
                __extends(Timer, _super);
                function Timer(event) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    return _this;
                }
                Timer.prototype.increment = function () {
                    this.states.value++;
                };
                Timer.prototype.start = function () {
                    var _this = this;
                    this.stop();
                    this.timer = setInterval(function () {
                        _this.increment();
                        _this.updateElementTimer();
                    }, Timer.COUNT_STEP);
                    this.states.isTicking = true;
                };
                Timer.prototype.stop = function () {
                    if (this.timer) {
                        clearInterval(this.timer);
                    }
                    this.states.isTicking = false;
                };
                Timer.prototype.reset = function () {
                    this.states.value = 0;
                };
                Timer.prototype.isTicking = function () {
                    return this.states.isTicking;
                };
                Timer.prototype.updateElementTimer = function () {
                    var value = new Date(this.states.value * Timer.COUNT_STEP).toISOString().substr(14, 5); // mm:ss;
                    if (this.states.value > 3600) {
                        value = new Date(this.states.value * Timer.COUNT_STEP).toISOString().substr(11, 8); // HH:mm:ss
                    }
                    this.element.text(value);
                };
                Timer.COUNT_STEP = 1000;
                return Timer;
            }(Handler.Common));
            Handler.Timer = Timer;
        })(Handler = Ui.Handler || (Ui.Handler = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Video;
    (function (Video) {
        /**
         * Handles webrtc html video element
         *
         */
        var Webrtc = /** @class */ (function (_super) {
            __extends(Webrtc, _super);
            function Webrtc(config, event) {
                var _this = _super.call(this, config, event) || this;
                _this.imageElement = null;
                if (typeof _this.config.options.muted == 'undefined') {
                    _this.config.options.muted = true;
                }
                _this.debug.info('Webrtc video created.');
                _this.create();
                return _this;
            }
            Webrtc.prototype.create = function () {
                var rootElement = document.createElement('video');
                rootElement.setAttribute('id', this.config.rootElement.replace('#', ''));
                rootElement.setAttribute('autoplay', 'true');
                rootElement.setAttribute('playsinline', '');
                if (this.config.options.muted) {
                    rootElement.setAttribute('muted', 'muted');
                    rootElement.muted = true;
                }
                //rootElement.setAttribute('controls', 'true');
                if (typeof this.config.className !== 'undefined') {
                    rootElement.setAttribute('class', this.config.className);
                }
                document.querySelector(this.config.rootContainer).appendChild(rootElement);
                this.rootElement = document.querySelector(this.config.rootElement);
                this.rootContainer = document.querySelector(this.config.rootContainer);
                this.hide();
            };
            Webrtc.prototype.destroy = function () {
                this.rootElement.parentNode.removeChild(this.rootElement);
            };
            return Webrtc;
        }(Avs.Video.Handler));
        Video.Webrtc = Webrtc;
    })(Video = Avs.Video || (Avs.Video = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Plugin;
    (function (Plugin) {
        var Library;
        (function (Library) {
            var Ml;
            (function (Ml) {
                var FaceApi = /** @class */ (function (_super) {
                    __extends(FaceApi, _super);
                    function FaceApi(config, event, api) {
                        var _this = _super.call(this, config, event, api) || this;
                        _this.config = config;
                        _this.api = api;
                        if (typeof faceapi === 'undefined') {
                            _this.debug.error(25011, 'Required face detection library not loaded.');
                            throw new Error('Required face detection library not loaded.');
                        }
                        _this.faceApiClass = faceapi;
                        _this.detectorOptions = null;
                        _this.predictAgeList = [];
                        _this.videoElement = $(_this.config.videoElementSelector).get(0);
                        _this.canvasOverlayElement = $(_this.config.canvasOverlayElementSelector).get(0);
                        _this.detectorType = _this.config.detectorType;
                        _this.detectorLoaded = false;
                        _this.ageGenderLoaded = false;
                        _this.landmarksModelLoaded = false;
                        _this.recognitionModelLoaded = false;
                        _this.faceExpressionModelLoaded = false;
                        return _this;
                    }
                    FaceApi.prototype.loadDetector = function (cb) {
                        var _this = this;
                        switch (this.detectorType) {
                            case FaceApi.DETECTOR_TYPE_SSD_MOBILE_NET_V1:
                                this.faceApiClass.nets.ssdMobilenetv1.load(this.config.weightsPath).then(function (result) {
                                    _this.detectorLoaded = true;
                                    _this.debug.info('loaded detector');
                                    _this.detectorOptions = new _this.faceApiClass.SsdMobilenetv1Options({
                                        minConfidence: FaceApi.SSD_MOBILE_NET_MIN_CONFIDENCE
                                    });
                                    cb(true);
                                }, function (error) {
                                    cb(null);
                                });
                                break;
                            case FaceApi.DETECTOR_TYPE_TINY_FACE_DETECTOR:
                                this.faceApiClass.nets.tinyFaceDetector.load(this.config.weightsPath).then(function (result) {
                                    _this.detectorLoaded = true;
                                    _this.debug.info('loaded detector');
                                    _this.detectorOptions = new _this.faceApiClass.TinyFaceDetectorOptions({
                                        inputSize: FaceApi.TINY_FACE_DETECTOR_INPUT_SIZE,
                                        scoreThreshold: FaceApi.TINY_FACE_DETECTOR_SCORE_THRESHOLD
                                    });
                                    cb(true);
                                }, function (error) {
                                    cb(null);
                                });
                                break;
                            default:
                                cb(null);
                        }
                    };
                    FaceApi.prototype.loadAgeGenderModel = function (cb) {
                        var _this = this;
                        // detector must be loaded
                        if (!this.detectorLoaded) {
                            this.debug.error(25013, 'Face detection detector must be loaded');
                            cb(null);
                            return;
                        }
                        this.faceApiClass.nets.ageGenderNet.load(this.config.weightsPath).then(function (result) {
                            _this.ageGenderLoaded = true;
                            _this.debug.info('loaded age and gender model');
                            cb(true);
                        }, function (error) {
                            cb(null);
                        });
                    };
                    FaceApi.prototype.loadLandmarksModel = function (cb) {
                        var _this = this;
                        this.faceApiClass.loadFaceLandmarkModel(this.config.weightsPath).then(function (result) {
                            _this.landmarksModelLoaded = true;
                            _this.debug.info('loaded landmarks model');
                            cb(true);
                        }, function (error) {
                            cb(null);
                        });
                    };
                    FaceApi.prototype.loadFaceRecognitionModel = function (cb) {
                        var _this = this;
                        this.faceApiClass.loadFaceRecognitionModel(this.config.weightsPath).then(function (result) {
                            _this.recognitionModelLoaded = true;
                            _this.debug.info('loaded face recognition model');
                            cb(true);
                        }, function (error) {
                            cb(null);
                        });
                    };
                    FaceApi.prototype.loadFaceExpressionModel = function (cb) {
                        var _this = this;
                        this.faceApiClass.loadFaceExpressionModel(this.config.weightsPath).then(function (result) {
                            _this.faceExpressionModelLoaded = true;
                            _this.debug.info('loaded face expression model');
                            cb(true);
                        }, function (error) {
                            cb(null);
                        });
                    };
                    FaceApi.prototype.detectFaceAge = function (cb) {
                        var _this = this;
                        // detector must be loaded
                        if (!this.detectorLoaded) {
                            this.debug.error(25014, 'Face detection detector must be loaded');
                            cb(null);
                            return;
                        }
                        // age gender must be loaded
                        this.debug.info('detect face age');
                        if (!this.ageGenderLoaded) {
                            this.debug.error(25015, 'Face detection age and gender model must be loaded');
                            cb(null);
                            return;
                        }
                        this.faceApiClass.detectSingleFace(this.videoElement, this.detectorOptions).withAgeAndGender().then(function (result) {
                            console.log('===================');
                            console.log(result);
                            console.log('===================');
                            // face was detected
                            if (typeof result !== 'undefined' && result.detection) {
                                var age = result.age;
                                var averageAge = parseInt(_this.interpolateAgePredictions(age).toFixed());
                                //this.drawFaceAgeResults(result, age, averageAge);
                                cb({
                                    detection: result.detection,
                                    age: age,
                                    averageAge: averageAge
                                });
                            }
                            else {
                                cb(null);
                            }
                        }, function (error) {
                            cb(null);
                        });
                    };
                    FaceApi.prototype.detectFace = function (cb) {
                        // detector must be loaded
                        if (!this.detectorLoaded) {
                            this.debug.error(25016, 'Face detection detector must be loaded');
                            cb(null);
                            return;
                        }
                        this.debug.info('detect face');
                        this.faceApiClass.detectSingleFace(this.videoElement, this.detectorOptions).withFaceLandmarks().withFaceDescriptor().then(function (result) {
                            // face was detected
                            if (typeof result !== 'undefined') {
                                console.log('+++++++++++++++');
                                console.log(result);
                                console.log('+++++++++++++++');
                                cb(result);
                            }
                            else {
                                cb(null);
                            }
                        }, function (error) {
                            cb(null);
                        });
                    };
                    FaceApi.prototype.detectFaceFromCustomElement = function (customElement, cb) {
                        var _this = this;
                        // detector must be loaded
                        if (!this.detectorLoaded) {
                            this.debug.error(25048, 'Face detection detector must be loaded');
                            cb(null);
                            return;
                        }
                        // recognition model must be loaded
                        this.debug.info('detect face age');
                        if (!this.recognitionModelLoaded) {
                            this.debug.error(25049, 'Face detection recognition model must be loaded');
                            cb(null);
                            return;
                        }
                        this.debug.info('detect face');
                        this.faceApiClass.detectSingleFace(customElement, this.detectorOptions).withFaceLandmarks().withFaceDescriptor().then(function (result) {
                            // face was detected
                            if (typeof result !== 'undefined') {
                                _this.drawFaceAgeResultsToCustomElement(result, 1, 1, $('.documentProcessingCanvasOverlay').get(0), customElement);
                                cb(result);
                            }
                            else {
                                cb(null);
                            }
                        }, function (error) {
                            cb(null);
                        });
                    };
                    FaceApi.prototype.extractFaceImage = function (detectedFace, cb) {
                        // detector must be loaded
                        if (!this.detectorLoaded) {
                            this.debug.error(25018, 'Face detection detector must be loaded');
                            cb(null);
                            return;
                        }
                        this.faceApiClass.extractFaces(this.videoElement, [detectedFace]).then(function (result) {
                            cb(result);
                        }, function (error) {
                            cb(null);
                        });
                    };
                    FaceApi.prototype.extractFaceImageFromCustomElement = function (detectedFace, customElement, cb) {
                        // detector must be loaded
                        if (!this.detectorLoaded) {
                            this.debug.error(25050, 'Face detection detector must be loaded');
                            cb(null);
                            return;
                        }
                        this.faceApiClass.extractFaces(customElement, [detectedFace]).then(function (result) {
                            cb(result);
                        }, function (error) {
                            cb(null);
                        });
                    };
                    FaceApi.prototype.compareFaceImagePair = function (image1, image2, cb) {
                        var _this = this;
                        // recognition model must be loaded
                        if (!this.recognitionModelLoaded) {
                            this.debug.error(25019, 'Face detection recognition model must be loaded');
                            cb(null);
                            return;
                        }
                        this.faceApiClass.computeFaceDescriptor(image1).then(function (face1Descriptors) {
                            _this.faceApiClass.computeFaceDescriptor(image2).then(function (face2Descriptors) {
                                cb(_this.compareFaceDescriptors(face1Descriptors, face2Descriptors));
                            }, function (error) {
                                cb(null);
                            });
                        }, function (error) {
                            cb(null);
                        });
                    };
                    FaceApi.prototype.detectFaceExpression = function (cb) {
                        // detector must be loaded
                        if (!this.detectorLoaded) {
                            this.debug.error(25059, 'Face detection detector must be loaded');
                            cb(null);
                            return;
                        }
                        // expression must be loaded
                        this.debug.info('detect face expression');
                        if (!this.faceExpressionModelLoaded) {
                            this.debug.error(25060, 'Face api expression model must be loaded');
                            cb(null);
                            return;
                        }
                        this.faceApiClass.detectSingleFace(this.videoElement, this.detectorOptions).withFaceExpressions().then(function (result) {
                            // face was detected
                            if (typeof result !== 'undefined' && result.detection && result.expressions) {
                                var expressionStrongest = null;
                                for (var i in result.expressions) {
                                    if (result.expressions.hasOwnProperty(i)) {
                                        var expressionValue = result.expressions[i];
                                        if (expressionValue >= FaceApi.EXPRESSION_MIN_CONFIDENCE) {
                                            expressionStrongest = i;
                                        }
                                    }
                                }
                                cb({
                                    detection: result.detection,
                                    expressionList: result.expressions,
                                    expressionStrongest: expressionStrongest
                                });
                            }
                            else {
                                cb(null);
                            }
                        }, function (error) {
                            cb(null);
                        });
                    };
                    FaceApi.prototype.compareFaceDescriptors = function (face1Descriptors, face2Descriptors) {
                        var originalDistance = this.faceApiClass.euclideanDistance(face1Descriptors, face2Descriptors);
                        return originalDistance;
                        //return this.faceApiClass.utils.round(originalDistance);
                    };
                    FaceApi.prototype.drawFaceAgeResults = function (result, age, averageAge) {
                        var dims = this.faceApiClass.matchDimensions(this.canvasOverlayElement, this.videoElement, true);
                        var resizedResult = this.faceApiClass.resizeResults(result, dims);
                        this.faceApiClass.draw.drawDetections(this.canvasOverlayElement, resizedResult);
                        new this.faceApiClass.draw.DrawTextField([averageAge + ' average', age.toFixed() + ' current'], result.detection.box.bottomLeft).draw(this.canvasOverlayElement);
                    };
                    FaceApi.prototype.drawFaceAgeResultsToCustomElement = function (result, age, averageAge, canvasOverlay, customElement) {
                        var dims = this.faceApiClass.matchDimensions(canvasOverlay, customElement, true);
                        var resizedResult = this.faceApiClass.resizeResults(result, dims);
                        this.faceApiClass.draw.drawDetections(canvasOverlay, resizedResult);
                        new this.faceApiClass.draw.DrawTextField([averageAge + ' average', age.toFixed() + ' current'], result.detection.box.bottomLeft).draw(canvasOverlay);
                    };
                    FaceApi.prototype.interpolateAgePredictions = function (age) {
                        this.predictAgeList = [age].concat(this.predictAgeList).slice(0, 30);
                        if (this.predictAgeList.length === 1) {
                            return this.predictAgeList[0];
                        }
                        return this.predictAgeList.reduce(function (total, a) { return total + a; }) / this.predictAgeList.length;
                    };
                    FaceApi.prototype.extractFaceCoordinates = function (faceDetection) {
                        return {
                            width: faceDetection.alignedRect._box.width,
                            height: faceDetection.alignedRect._box.height,
                            top: faceDetection.alignedRect._box.top,
                            left: faceDetection.alignedRect._box.left,
                            imageWidth: faceDetection.alignedRect._imageDims.width,
                            imageHeight: faceDetection.alignedRect._imageDims.height
                        };
                    };
                    FaceApi.DETECTOR_TYPE_SSD_MOBILE_NET_V1 = 'ssd_mobilenetv1';
                    FaceApi.DETECTOR_TYPE_TINY_FACE_DETECTOR = 'tiny_face_detector';
                    FaceApi.SSD_MOBILE_NET_MIN_CONFIDENCE = 0.5;
                    FaceApi.TINY_FACE_DETECTOR_INPUT_SIZE = 416;
                    FaceApi.TINY_FACE_DETECTOR_SCORE_THRESHOLD = 0.3;
                    FaceApi.EXPRESSION_MIN_CONFIDENCE = 0.5;
                    FaceApi.EXPRESSION_ANGRY = 'angry';
                    FaceApi.EXPRESSION_DISGUSTED = 'disgusted';
                    FaceApi.EXPRESSION_FEARFUL = 'fearful';
                    FaceApi.EXPRESSION_HAPPY = 'happy';
                    FaceApi.EXPRESSION_NEUTRAL = 'neutral';
                    FaceApi.EXPRESSION_SAD = 'sad';
                    FaceApi.EXPRESSION_SURPRISED = 'surprised';
                    return FaceApi;
                }(Avs.Plugin.Handler));
                Ml.FaceApi = FaceApi;
            })(Ml = Library.Ml || (Library.Ml = {}));
        })(Library = Plugin.Library || (Plugin.Library = {}));
    })(Plugin = Avs.Plugin || (Avs.Plugin = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Plugin;
    (function (Plugin) {
        var Library;
        (function (Library) {
            var Ml;
            (function (Ml) {
                var Tesseract = /** @class */ (function (_super) {
                    __extends(Tesseract, _super);
                    function Tesseract(config, event, api) {
                        var _a;
                        var _this = _super.call(this, config, event, api) || this;
                        _this.config = config;
                        _this.api = api;
                        _this.monthNameLanguage = Tesseract.MONTH_NAME_LANGUAGE_FR;
                        _this.monthNameList = (_a = {},
                            _a[Tesseract.MONTH_NAME_LANGUAGE_FR] = {
                                '01': 'janv',
                                '02': 'févr',
                                '03': 'mars',
                                '04': 'avril',
                                '05': 'mai',
                                '06': 'juin',
                                '07': 'juil',
                                '08': 'août',
                                '09': 'sept',
                                '10': 'oct',
                                '11': 'nov',
                                '12': 'déc'
                            },
                            _a[Tesseract.MONTH_NAME_LANGUAGE_EN] = {
                                '01': 'jan',
                                '02': 'feb',
                                '03': 'mar',
                                '04': 'apr',
                                '05': 'may',
                                '06': 'jun',
                                '07': 'jul',
                                '08': 'aug',
                                '09': 'sept',
                                '10': 'oct',
                                '11': 'nov',
                                '12': 'dec'
                            },
                            _a[Tesseract.MONTH_NAME_LANGUAGE_BE] = {
                                '01': 'jan',
                                '02': 'feb',
                                '03': 'maart',
                                '04': 'apr',
                                '05': 'mei',
                                '06': 'juni',
                                '07': 'juli',
                                '08': 'aug',
                                '09': 'sept',
                                '10': 'oct',
                                '11': 'nov',
                                '12': 'dec'
                            },
                            _a[Tesseract.MONTH_NAME_LANGUAGE_NL] = {
                                '01': 'jan',
                                '02': 'feb',
                                '03': 'maart',
                                '04': 'apr',
                                '05': 'mei',
                                '06': 'juni',
                                '07': 'juli',
                                '08': 'aug',
                                '09': 'sept',
                                '10': 'oct',
                                '11': 'nov',
                                '12': 'dec'
                            },
                            _a[Tesseract.MONTH_NAME_LANGUAGE_EL] = {
                                '01': 'ian',
                                '02': 'phevr',
                                '03': 'mart',
                                '04': 'apr',
                                '05': 'maios',
                                '06': 'ioun',
                                '07': 'ioul',
                                '08': 'aug',
                                '09': 'sept',
                                '10': 'okt',
                                '11': 'noem',
                                '12': 'dek'
                            },
                            _a);
                        // TODO: load the library on demand
                        if (typeof Tesseract === 'undefined') {
                            _this.debug.error(25012, 'Required ocr library not loaded.');
                            throw new Error('Required ocr library not loaded.');
                        }
                        _this.tesseractClass = window.Tesseract;
                        _this.workerInstance = new _this.tesseractClass.createWorker({
                            workerPath: _this.config.workerPath,
                            langPath: _this.config.languagePath,
                            corePath: _this.config.corePath,
                            cacheMethod: 'refresh',
                            logger: function (result) {
                            }
                        });
                        _this.videoElement = $(_this.config.videoElementSelector).get(0);
                        _this.workerLoaded = false;
                        _this.languageLoaded = false;
                        _this.languageInit = false;
                        _this.workerConfigured = false;
                        return _this;
                    }
                    Tesseract.prototype.setIdConfig = function (idConfig, cb) {
                        this.config.idConfig = idConfig;
                        this.configureWorker(function (result) {
                            cb(result);
                        });
                    };
                    Tesseract.prototype.isValidLanguage = function (language) {
                        return language == Tesseract.LANGUAGE_EN || language == Tesseract.LANGUAGE_FR;
                    };
                    Tesseract.prototype.loadWorker = function (cb) {
                        var _this = this;
                        this.workerInstance.load().then(function (result) {
                            _this.workerLoaded = true;
                            _this.debug.info('worker loaded');
                            cb(true);
                        }, function (error) {
                            cb(null);
                        });
                    };
                    Tesseract.prototype.loadLanguage = function (language, cb) {
                        var _this = this;
                        // needs worker load
                        if (!this.workerLoaded) {
                            this.debug.error(25020, 'Ocr worker was not loaded');
                            cb(null);
                            return;
                        }
                        if (!this.isValidLanguage(language)) {
                            this.debug.error(25021, 'Load request for invalid ocr language');
                            cb(null);
                            return;
                        }
                        this.workerInstance.loadLanguage(language).then(function (result) {
                            _this.languageLoaded = true;
                            _this.debug.info(language + ' language loaded');
                            cb(true);
                        }, function (error) {
                            cb(null);
                        });
                    };
                    Tesseract.prototype.initLanguage = function (language, cb) {
                        var _this = this;
                        // needs worker load
                        if (!this.workerLoaded) {
                            this.debug.error(25022, 'Ocr worker was not loaded');
                            cb(null);
                            return;
                        }
                        // needs language load
                        if (!this.languageLoaded) {
                            this.debug.error(25023, 'Ocr language was not loaded');
                            cb(null);
                            return;
                        }
                        if (!this.isValidLanguage(language)) {
                            this.debug.error(25024, 'Initialization request for invalid tesseract language');
                            cb(null);
                            return;
                        }
                        this.workerInstance.initialize(language).then(function (result) {
                            _this.languageInit = true;
                            _this.debug.info(language + ' language initialized');
                            cb(true);
                        }, function (error) {
                            cb(null);
                        });
                    };
                    Tesseract.prototype.configureWorker = function (cb) {
                        var _this = this;
                        // needs worker load
                        if (!this.workerLoaded) {
                            this.debug.error(25025, 'Ocr worker was not loaded');
                            cb(null);
                            return;
                        }
                        // needs language load
                        if (!this.languageLoaded) {
                            this.debug.error(25026, 'Ocr language was not loaded');
                            cb(null);
                            return;
                        }
                        // needs language init
                        if (!this.languageInit) {
                            this.debug.error(25027, 'Ocr language was not initialized');
                            cb(null);
                            return;
                        }
                        this.workerInstance.setParameters(this.config.idConfig.tesseractConfig).then(function (result) {
                            _this.workerConfigured = true;
                            _this.debug.info('worker configured');
                            cb(true);
                        }, function (error) {
                            cb(null);
                        });
                    };
                    Tesseract.prototype.ocrImage = function (image, cb) {
                        var _this = this;
                        // needs worker load
                        if (!this.workerLoaded) {
                            this.debug.error(25028, 'Ocr worker was not loaded');
                            cb(null);
                            return;
                        }
                        // needs language load
                        if (!this.languageLoaded) {
                            this.debug.error(25029, 'Ocr language was not loaded');
                            cb(null);
                            return;
                        }
                        // needs language init
                        if (!this.languageInit) {
                            this.debug.error(25030, 'Ocr language was not initialized');
                            cb(null);
                            return;
                        }
                        // needs worker config
                        if (!this.workerConfigured) {
                            this.debug.error(25031, 'Ocr worker was not configured');
                            cb(null);
                            return;
                        }
                        this.workerInstance.recognize(image).then(function (result) {
                            _this.debug.info('ocr image');
                            cb(result);
                        }, function (error) {
                            cb(null);
                        });
                    };
                    Tesseract.prototype.extractInformationFromId = function (image, cb) {
                        var _this = this;
                        this.ocrImage(image, function (result) {
                            var foundText = result.data.text.trim();
                            if (_this.config.idConfig.stripWhiteSpace) {
                                foundText = foundText.replace(/\s/g, '');
                            }
                            var findDate = null;
                            _this.debug.logToContainer(foundText);
                            _this.debug.logToContainer('<br/>');
                            var ruleMatched = 0;
                            for (var i = 0, j = _this.config.idConfig.textMatcherRule.length; i < j; i++) {
                                var regexString = _this.config.idConfig.textMatcherRule[i];
                                regexString = regexString.slice(1);
                                regexString = regexString.slice(0, -3);
                                _this.debug.logToContainer(regexString);
                                _this.debug.logToContainer('<br/>');
                                var regex = new RegExp(regexString, 'ig');
                                findDate = regex.exec(foundText);
                                if (findDate !== null) {
                                    ruleMatched = i;
                                    break;
                                }
                            }
                            if (findDate === null) {
                                cb(null);
                                return;
                            }
                            if (_this.config.idConfig.monthNameLanguage) {
                                _this.monthNameLanguage = _this.config.idConfig.monthNameLanguage;
                            }
                            if (findDate.length >= 4) {
                                var dateComponentsPosition = _this.config.idConfig.dateComponentsPosition[ruleMatched];
                                var dayIndex = dateComponentsPosition.day;
                                var monthIndex = dateComponentsPosition.month;
                                var yearIndex = dateComponentsPosition.year;
                                var day = _this.formatDay(findDate[dayIndex]);
                                var month = _this.formatMonth(findDate[monthIndex]);
                                var year = _this.formatYear(findDate[yearIndex]);
                                var dateFoundString = year + '-' + month + '-' + day;
                                var dateFound = Date.parse(dateFoundString);
                                var dateNow = (+new Date());
                                var scanIdPersonYears = ((dateNow - dateFound) / 1000 / 3600 / 24 / 365).toFixed();
                                cb({
                                    birthDate: dateFoundString,
                                    age: scanIdPersonYears
                                });
                            }
                            else {
                                cb(null);
                            }
                        });
                    };
                    Tesseract.prototype.formatDay = function (day) {
                        return day.length == 2 ? day : '0' + day;
                    };
                    Tesseract.prototype.formatMonth = function (month) {
                        month = month.toLowerCase();
                        for (var i in this.monthNameList[this.monthNameLanguage]) {
                            month = month.replace(this.monthNameList[this.monthNameLanguage][i], i);
                            month = month.replace(this.monthNameList[this.monthNameLanguage][i].toUpperCase(), i);
                        }
                        return month.length == 2 ? month : '0' + month;
                    };
                    Tesseract.prototype.formatYear = function (year) {
                        if (year.length == 4) {
                            return year;
                        }
                        if (year.length == 2) {
                            var currentYear = new Date().getFullYear().toString().substr(-2);
                            if (year < currentYear) {
                                year = '20' + year;
                                return year;
                            }
                            year = '19' + year;
                            return year;
                        }
                        return 0;
                    };
                    Tesseract.LANGUAGE_EN = 'eng';
                    Tesseract.LANGUAGE_FR = 'fra';
                    Tesseract.MONTH_NAME_LANGUAGE_FR = 'fr';
                    Tesseract.MONTH_NAME_LANGUAGE_EN = 'en';
                    Tesseract.MONTH_NAME_LANGUAGE_BE = 'be';
                    Tesseract.MONTH_NAME_LANGUAGE_EL = 'el';
                    Tesseract.MONTH_NAME_LANGUAGE_NL = 'nl';
                    return Tesseract;
                }(Avs.Plugin.Handler));
                Ml.Tesseract = Tesseract;
            })(Ml = Library.Ml || (Library.Ml = {}));
        })(Library = Plugin.Library || (Plugin.Library = {}));
    })(Plugin = Avs.Plugin || (Avs.Plugin = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Plugin;
    (function (Plugin) {
        var Library;
        (function (Library) {
            var Video;
            (function (Video) {
                var CameraSource = /** @class */ (function (_super) {
                    __extends(CameraSource, _super);
                    function CameraSource(config, event, api) {
                        var _this = _super.call(this, config, event, api) || this;
                        _this.api = api;
                        _this.adapters = {
                            webrtc: new Avs.Video.Webrtc(_this.config.webrtc, _this.event)
                        };
                        _this.config.webrtc.options.localVideo = _this.adapters.webrtc.getRootElement();
                        _this.config.webrtc.options.eventNamesPrefix = _this.config.webrtc.options.eventNamesPrefix || CameraSource.EVENT_NAME_PREFIX;
                        _this.datachannels = {
                            webrtc: new Avs.DataChannel.Webrtc(_this.config.webrtc, _this.event, _this.api)
                        };
                        _this.currentAdapter = 'webrtc';
                        return _this;
                    }
                    CameraSource.prototype.init = function () {
                        this.datachannels.webrtc.init();
                    };
                    CameraSource.prototype.getVideoElement = function () {
                        return $(this.adapters[this.currentAdapter].rootElement);
                    };
                    CameraSource.prototype.showVideo = function () {
                        this.adapters[this.currentAdapter].show();
                    };
                    CameraSource.prototype.hideVideo = function () {
                        this.adapters[this.currentAdapter].hide();
                    };
                    CameraSource.prototype.destroy = function () {
                        this.beforeDestroy();
                    };
                    CameraSource.EVENT_NAME_PREFIX = 'Plugin.video.CameraSource';
                    return CameraSource;
                }(Avs.Plugin.Handler));
                Video.CameraSource = CameraSource;
            })(Video = Library.Video || (Library.Video = {}));
        })(Library = Plugin.Library || (Plugin.Library = {}));
    })(Plugin = Avs.Plugin || (Avs.Plugin = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var DebugArea = /** @class */ (function (_super) {
                __extends(DebugArea, _super);
                function DebugArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                DebugArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#debugArea';
                    }
                    this.element = $(selector);
                };
                DebugArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.DebugArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.DebugArea;
                };
                return DebugArea;
            }(Avs.Ui.Handler.Text));
            Library.DebugArea = DebugArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var DocumentProcessingCanvasLoadingOverlayArea = /** @class */ (function (_super) {
                __extends(DocumentProcessingCanvasLoadingOverlayArea, _super);
                function DocumentProcessingCanvasLoadingOverlayArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                DocumentProcessingCanvasLoadingOverlayArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#documentProcessingCanvasLoadingOverlayArea';
                    }
                    this.element = $(selector);
                };
                DocumentProcessingCanvasLoadingOverlayArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.DocumentProcessingCanvasLoadingOverlayArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.DocumentProcessingCanvasLoadingOverlayArea;
                };
                return DocumentProcessingCanvasLoadingOverlayArea;
            }(Avs.Ui.Handler.Text));
            Library.DocumentProcessingCanvasLoadingOverlayArea = DocumentProcessingCanvasLoadingOverlayArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ErrorMessageAdditionalTextArea = /** @class */ (function (_super) {
                __extends(ErrorMessageAdditionalTextArea, _super);
                function ErrorMessageAdditionalTextArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ErrorMessageAdditionalTextArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#errorMessageAdditionalTextArea';
                    }
                    this.element = $(selector);
                };
                ErrorMessageAdditionalTextArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ErrorMessageAdditionalTextArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ErrorMessageAdditionalTextArea;
                };
                return ErrorMessageAdditionalTextArea;
            }(Avs.Ui.Handler.Text));
            Library.ErrorMessageAdditionalTextArea = ErrorMessageAdditionalTextArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ErrorMessageArea = /** @class */ (function (_super) {
                __extends(ErrorMessageArea, _super);
                function ErrorMessageArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ErrorMessageArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#errorMessageArea';
                    }
                    this.element = $(selector);
                };
                ErrorMessageArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ErrorMessageArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ErrorMessageArea;
                };
                return ErrorMessageArea;
            }(Avs.Ui.Handler.Text));
            Library.ErrorMessageArea = ErrorMessageArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ErrorMessageQrTextArea = /** @class */ (function (_super) {
                __extends(ErrorMessageQrTextArea, _super);
                function ErrorMessageQrTextArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ErrorMessageQrTextArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#errorMessageQrTextArea';
                    }
                    this.element = $(selector);
                };
                ErrorMessageQrTextArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ErrorMessageQrTextArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ErrorMessageQrTextArea;
                };
                return ErrorMessageQrTextArea;
            }(Avs.Ui.Handler.Text));
            Library.ErrorMessageQrTextArea = ErrorMessageQrTextArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ErrorMessageTextArea = /** @class */ (function (_super) {
                __extends(ErrorMessageTextArea, _super);
                function ErrorMessageTextArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ErrorMessageTextArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#errorMessageTextArea';
                    }
                    this.element = $(selector);
                };
                ErrorMessageTextArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ErrorMessageTextArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ErrorMessageTextArea;
                };
                return ErrorMessageTextArea;
            }(Avs.Ui.Handler.Text));
            Library.ErrorMessageTextArea = ErrorMessageTextArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var FaceApiPreloaderArea = /** @class */ (function (_super) {
                __extends(FaceApiPreloaderArea, _super);
                function FaceApiPreloaderArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                FaceApiPreloaderArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#faceApiPreloaderArea';
                    }
                    this.element = $(selector);
                };
                FaceApiPreloaderArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.FaceApiPreloaderArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.FaceApiPreloaderArea;
                };
                return FaceApiPreloaderArea;
            }(Avs.Ui.Handler.Text));
            Library.FaceApiPreloaderArea = FaceApiPreloaderArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var FaceApiPreloaderPercentArea = /** @class */ (function (_super) {
                __extends(FaceApiPreloaderPercentArea, _super);
                function FaceApiPreloaderPercentArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                FaceApiPreloaderPercentArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#faceApiPreloaderPercentArea';
                    }
                    this.element = $(selector);
                };
                FaceApiPreloaderPercentArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.FaceApiPreloaderPercentArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.FaceApiPreloaderPercentArea;
                };
                return FaceApiPreloaderPercentArea;
            }(Avs.Ui.Handler.Text));
            Library.FaceApiPreloaderPercentArea = FaceApiPreloaderPercentArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var FaceApiPreloaderTextArea = /** @class */ (function (_super) {
                __extends(FaceApiPreloaderTextArea, _super);
                function FaceApiPreloaderTextArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                FaceApiPreloaderTextArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#faceApiPreloaderTextArea';
                    }
                    this.element = $(selector);
                };
                FaceApiPreloaderTextArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.FaceApiPreloaderTextArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.FaceApiPreloaderTextArea;
                };
                return FaceApiPreloaderTextArea;
            }(Avs.Ui.Handler.Text));
            Library.FaceApiPreloaderTextArea = FaceApiPreloaderTextArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var FaceGuideAgeArea = /** @class */ (function (_super) {
                __extends(FaceGuideAgeArea, _super);
                function FaceGuideAgeArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                FaceGuideAgeArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#faceGuideAgeArea';
                    }
                    this.element = $(selector);
                };
                FaceGuideAgeArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.FaceGuideAgeArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.FaceGuideAgeArea;
                };
                return FaceGuideAgeArea;
            }(Avs.Ui.Handler.Text));
            Library.FaceGuideAgeArea = FaceGuideAgeArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var FaceGuideSmileStartHintArea = /** @class */ (function (_super) {
                __extends(FaceGuideSmileStartHintArea, _super);
                function FaceGuideSmileStartHintArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                FaceGuideSmileStartHintArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#faceGuideSmileStartHintArea';
                    }
                    this.element = $(selector);
                };
                FaceGuideSmileStartHintArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.FaceGuideSmileStartHintArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.FaceGuideSmileStartHintArea;
                };
                return FaceGuideSmileStartHintArea;
            }(Avs.Ui.Handler.Text));
            Library.FaceGuideSmileStartHintArea = FaceGuideSmileStartHintArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var FaceGuideSmileStopHintArea = /** @class */ (function (_super) {
                __extends(FaceGuideSmileStopHintArea, _super);
                function FaceGuideSmileStopHintArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                FaceGuideSmileStopHintArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#faceGuideSmileStopHintArea';
                    }
                    this.element = $(selector);
                };
                FaceGuideSmileStopHintArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.FaceGuideSmileStopHintArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.FaceGuideSmileStopHintArea;
                };
                return FaceGuideSmileStopHintArea;
            }(Avs.Ui.Handler.Text));
            Library.FaceGuideSmileStopHintArea = FaceGuideSmileStopHintArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var RatioRecommendArea = /** @class */ (function (_super) {
                __extends(RatioRecommendArea, _super);
                function RatioRecommendArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                RatioRecommendArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#ratioRecommendArea';
                    }
                    this.element = $(selector);
                };
                RatioRecommendArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.RatioRecommendArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.RatioRecommendArea;
                };
                return RatioRecommendArea;
            }(Avs.Ui.Handler.Text));
            Library.RatioRecommendArea = RatioRecommendArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var RatioRecommendTextArea = /** @class */ (function (_super) {
                __extends(RatioRecommendTextArea, _super);
                function RatioRecommendTextArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                RatioRecommendTextArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#ratioRecommendTextArea';
                    }
                    this.element = $(selector);
                };
                RatioRecommendTextArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.RatioRecommendTextArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.RatioRecommendTextArea;
                };
                return RatioRecommendTextArea;
            }(Avs.Ui.Handler.Text));
            Library.RatioRecommendTextArea = RatioRecommendTextArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ResultPageFailQrArea = /** @class */ (function (_super) {
                __extends(ResultPageFailQrArea, _super);
                function ResultPageFailQrArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ResultPageFailQrArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#resultPageFailQrArea';
                    }
                    this.element = $(selector);
                };
                ResultPageFailQrArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ResultPageFailQrArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ResultPageFailQrArea;
                };
                return ResultPageFailQrArea;
            }(Avs.Ui.Handler.Text));
            Library.ResultPageFailQrArea = ResultPageFailQrArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ResultPageFailReasonArea = /** @class */ (function (_super) {
                __extends(ResultPageFailReasonArea, _super);
                function ResultPageFailReasonArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ResultPageFailReasonArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#resultPageFailReasonArea';
                    }
                    this.element = $(selector);
                };
                ResultPageFailReasonArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ResultPageFailReasonArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ResultPageFailReasonArea;
                };
                return ResultPageFailReasonArea;
            }(Avs.Ui.Handler.Text));
            Library.ResultPageFailReasonArea = ResultPageFailReasonArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ResultPageSuccessScanIdArea = /** @class */ (function (_super) {
                __extends(ResultPageSuccessScanIdArea, _super);
                function ResultPageSuccessScanIdArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ResultPageSuccessScanIdArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#resultPageSuccessScanIdArea';
                    }
                    this.element = $(selector);
                };
                ResultPageSuccessScanIdArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ResultPageSuccessScanIdArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ResultPageSuccessScanIdArea;
                };
                return ResultPageSuccessScanIdArea;
            }(Avs.Ui.Handler.Text));
            Library.ResultPageSuccessScanIdArea = ResultPageSuccessScanIdArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ResultPageSuccessSelfieArea = /** @class */ (function (_super) {
                __extends(ResultPageSuccessSelfieArea, _super);
                function ResultPageSuccessSelfieArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ResultPageSuccessSelfieArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#resultPageSuccessSelfieArea';
                    }
                    this.element = $(selector);
                };
                ResultPageSuccessSelfieArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ResultPageSuccessSelfieArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ResultPageSuccessSelfieArea;
                };
                return ResultPageSuccessSelfieArea;
            }(Avs.Ui.Handler.Text));
            Library.ResultPageSuccessSelfieArea = ResultPageSuccessSelfieArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationCurrentAgeArea = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationCurrentAgeArea, _super);
                function ScanIdAgeVerificationCurrentAgeArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationCurrentAgeArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationCurrentAgeArea';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationCurrentAgeArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationCurrentAgeArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationCurrentAgeArea;
                };
                return ScanIdAgeVerificationCurrentAgeArea;
            }(Avs.Ui.Handler.Text));
            Library.ScanIdAgeVerificationCurrentAgeArea = ScanIdAgeVerificationCurrentAgeArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationDeviceAccessArea = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationDeviceAccessArea, _super);
                function ScanIdAgeVerificationDeviceAccessArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationDeviceAccessArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationDeviceAccessArea';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationDeviceAccessArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdVerificationDeviceAccessArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdVerificationDeviceAccessArea;
                };
                return ScanIdAgeVerificationDeviceAccessArea;
            }(Avs.Ui.Handler.Text));
            Library.ScanIdAgeVerificationDeviceAccessArea = ScanIdAgeVerificationDeviceAccessArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationDeviceSelectionArea = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationDeviceSelectionArea, _super);
                function ScanIdAgeVerificationDeviceSelectionArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationDeviceSelectionArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationDeviceSelectionArea';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationDeviceSelectionArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationDeviceSelectionArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationDeviceSelectionArea;
                };
                return ScanIdAgeVerificationDeviceSelectionArea;
            }(Avs.Ui.Handler.Text));
            Library.ScanIdAgeVerificationDeviceSelectionArea = ScanIdAgeVerificationDeviceSelectionArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationDocumentHelperArea = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationDocumentHelperArea, _super);
                function ScanIdAgeVerificationDocumentHelperArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationDocumentHelperArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationDocumentHelperArea';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationDocumentHelperArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationDocumentHelperArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationDocumentHelperArea;
                };
                return ScanIdAgeVerificationDocumentHelperArea;
            }(Avs.Ui.Handler.Text));
            Library.ScanIdAgeVerificationDocumentHelperArea = ScanIdAgeVerificationDocumentHelperArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationDocumentProcessingArea = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationDocumentProcessingArea, _super);
                function ScanIdAgeVerificationDocumentProcessingArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationDocumentProcessingArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationDocumentProcessingArea';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationDocumentProcessingArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationDocumentProcessingArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationDocumentProcessingArea;
                };
                return ScanIdAgeVerificationDocumentProcessingArea;
            }(Avs.Ui.Handler.Text));
            Library.ScanIdAgeVerificationDocumentProcessingArea = ScanIdAgeVerificationDocumentProcessingArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationDocumentProcessingConfirmationArea = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationDocumentProcessingConfirmationArea, _super);
                function ScanIdAgeVerificationDocumentProcessingConfirmationArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationDocumentProcessingConfirmationArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationDocumentProcessingConfirmationArea';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationDocumentProcessingConfirmationArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationDocumentProcessingConfirmationArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationDocumentProcessingConfirmationArea;
                };
                return ScanIdAgeVerificationDocumentProcessingConfirmationArea;
            }(Avs.Ui.Handler.Text));
            Library.ScanIdAgeVerificationDocumentProcessingConfirmationArea = ScanIdAgeVerificationDocumentProcessingConfirmationArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationDocumentProcessingProcessArea = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationDocumentProcessingProcessArea, _super);
                function ScanIdAgeVerificationDocumentProcessingProcessArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationDocumentProcessingProcessArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationDocumentProcessingProcessArea';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationDocumentProcessingProcessArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationDocumentProcessingProcessArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationDocumentProcessingProcessArea;
                };
                return ScanIdAgeVerificationDocumentProcessingProcessArea;
            }(Avs.Ui.Handler.Text));
            Library.ScanIdAgeVerificationDocumentProcessingProcessArea = ScanIdAgeVerificationDocumentProcessingProcessArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationFaceSimilarityArea = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationFaceSimilarityArea, _super);
                function ScanIdAgeVerificationFaceSimilarityArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationFaceSimilarityArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationFaceSimilarityArea';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationFaceSimilarityArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationFaceSimilarityArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationFaceSimilarityArea;
                };
                return ScanIdAgeVerificationFaceSimilarityArea;
            }(Avs.Ui.Handler.Text));
            Library.ScanIdAgeVerificationFaceSimilarityArea = ScanIdAgeVerificationFaceSimilarityArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationLoadingLabelArea = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationLoadingLabelArea, _super);
                function ScanIdAgeVerificationLoadingLabelArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationLoadingLabelArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationLoadingLabelArea';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationLoadingLabelArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationLoadingLabelArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationLoadingLabelArea;
                };
                return ScanIdAgeVerificationLoadingLabelArea;
            }(Avs.Ui.Handler.Text));
            Library.ScanIdAgeVerificationLoadingLabelArea = ScanIdAgeVerificationLoadingLabelArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationStateArea = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationStateArea, _super);
                function ScanIdAgeVerificationStateArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationStateArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationStateArea';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationStateArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationStateArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationStateArea;
                };
                return ScanIdAgeVerificationStateArea;
            }(Avs.Ui.Handler.Text));
            Library.ScanIdAgeVerificationStateArea = ScanIdAgeVerificationStateArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationSubmitArea = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationSubmitArea, _super);
                function ScanIdAgeVerificationSubmitArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationSubmitArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationSubmitArea';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationSubmitArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationSubmitArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationSubmitArea;
                };
                return ScanIdAgeVerificationSubmitArea;
            }(Avs.Ui.Handler.Text));
            Library.ScanIdAgeVerificationSubmitArea = ScanIdAgeVerificationSubmitArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationTypeArea = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationTypeArea, _super);
                function ScanIdAgeVerificationTypeArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationTypeArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationTypeArea';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationTypeArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationTypeArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationTypeArea;
                };
                return ScanIdAgeVerificationTypeArea;
            }(Avs.Ui.Handler.Text));
            Library.ScanIdAgeVerificationTypeArea = ScanIdAgeVerificationTypeArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var SelfieAgeDetectionAverageAgeArea = /** @class */ (function (_super) {
                __extends(SelfieAgeDetectionAverageAgeArea, _super);
                function SelfieAgeDetectionAverageAgeArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                SelfieAgeDetectionAverageAgeArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#selfieAgeDetectionAverageAgeArea';
                    }
                    this.element = $(selector);
                };
                SelfieAgeDetectionAverageAgeArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.SelfieAgeDetectionAverageAgeArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.SelfieAgeDetectionAverageAgeArea;
                };
                return SelfieAgeDetectionAverageAgeArea;
            }(Avs.Ui.Handler.Text));
            Library.SelfieAgeDetectionAverageAgeArea = SelfieAgeDetectionAverageAgeArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var SelfieAgeDetectionCurrentAgeArea = /** @class */ (function (_super) {
                __extends(SelfieAgeDetectionCurrentAgeArea, _super);
                function SelfieAgeDetectionCurrentAgeArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                SelfieAgeDetectionCurrentAgeArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#selfieAgeDetectionCurrentAgeArea';
                    }
                    this.element = $(selector);
                };
                SelfieAgeDetectionCurrentAgeArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.SelfieAgeDetectionCurrentAgeArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.SelfieAgeDetectionCurrentAgeArea;
                };
                return SelfieAgeDetectionCurrentAgeArea;
            }(Avs.Ui.Handler.Text));
            Library.SelfieAgeDetectionCurrentAgeArea = SelfieAgeDetectionCurrentAgeArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var SelfieAgeDetectionDeviceAccessArea = /** @class */ (function (_super) {
                __extends(SelfieAgeDetectionDeviceAccessArea, _super);
                function SelfieAgeDetectionDeviceAccessArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                SelfieAgeDetectionDeviceAccessArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#selfieAgeDetectionDeviceAccessArea';
                    }
                    this.element = $(selector);
                };
                SelfieAgeDetectionDeviceAccessArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.SelfieAgeDetectionDeviceAccessArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.SelfieAgeDetectionDeviceAccessArea;
                };
                return SelfieAgeDetectionDeviceAccessArea;
            }(Avs.Ui.Handler.Text));
            Library.SelfieAgeDetectionDeviceAccessArea = SelfieAgeDetectionDeviceAccessArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var SelfieAgeDetectionDeviceSelectionArea = /** @class */ (function (_super) {
                __extends(SelfieAgeDetectionDeviceSelectionArea, _super);
                function SelfieAgeDetectionDeviceSelectionArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                SelfieAgeDetectionDeviceSelectionArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#selfieAgeDetectionDeviceSelectionArea';
                    }
                    this.element = $(selector);
                };
                SelfieAgeDetectionDeviceSelectionArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.SelfieAgeDetectionDeviceSelectionArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.SelfieAgeDetectionDeviceSelectionArea;
                };
                return SelfieAgeDetectionDeviceSelectionArea;
            }(Avs.Ui.Handler.Text));
            Library.SelfieAgeDetectionDeviceSelectionArea = SelfieAgeDetectionDeviceSelectionArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var SelfieAgeDetectionLoadingLabelArea = /** @class */ (function (_super) {
                __extends(SelfieAgeDetectionLoadingLabelArea, _super);
                function SelfieAgeDetectionLoadingLabelArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                SelfieAgeDetectionLoadingLabelArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#selfieAgeDetectionLoadingLabelArea';
                    }
                    this.element = $(selector);
                };
                SelfieAgeDetectionLoadingLabelArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.SelfieAgeDetectionLoadingLabelArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.SelfieAgeDetectionLoadingLabelArea;
                };
                return SelfieAgeDetectionLoadingLabelArea;
            }(Avs.Ui.Handler.Text));
            Library.SelfieAgeDetectionLoadingLabelArea = SelfieAgeDetectionLoadingLabelArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var SelfieAgeDetectionSubmitArea = /** @class */ (function (_super) {
                __extends(SelfieAgeDetectionSubmitArea, _super);
                function SelfieAgeDetectionSubmitArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                SelfieAgeDetectionSubmitArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#selfieAgeDetectionSubmitArea';
                    }
                    this.element = $(selector);
                };
                SelfieAgeDetectionSubmitArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.SelfieAgeDetectionSubmitArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.SelfieAgeDetectionSubmitArea;
                };
                return SelfieAgeDetectionSubmitArea;
            }(Avs.Ui.Handler.Text));
            Library.SelfieAgeDetectionSubmitArea = SelfieAgeDetectionSubmitArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var StartPageTermsArea = /** @class */ (function (_super) {
                __extends(StartPageTermsArea, _super);
                function StartPageTermsArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                StartPageTermsArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#startPageTermsArea';
                    }
                    this.element = $(selector);
                };
                StartPageTermsArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.StartPageTermsArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.StartPageTermsArea;
                };
                return StartPageTermsArea;
            }(Avs.Ui.Handler.Text));
            Library.StartPageTermsArea = StartPageTermsArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var TermsAndConditionsArea = /** @class */ (function (_super) {
                __extends(TermsAndConditionsArea, _super);
                function TermsAndConditionsArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                TermsAndConditionsArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#termsAndConditionsArea';
                    }
                    this.element = $(selector);
                };
                TermsAndConditionsArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.TermsAndConditionsArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.TermsAndConditionsArea;
                };
                return TermsAndConditionsArea;
            }(Avs.Ui.Handler.Text));
            Library.TermsAndConditionsArea = TermsAndConditionsArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var TesseractPreloaderArea = /** @class */ (function (_super) {
                __extends(TesseractPreloaderArea, _super);
                function TesseractPreloaderArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                TesseractPreloaderArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#tesseractPreloaderArea';
                    }
                    this.element = $(selector);
                };
                TesseractPreloaderArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.TesseractPreloaderArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.TesseractPreloaderArea;
                };
                return TesseractPreloaderArea;
            }(Avs.Ui.Handler.Text));
            Library.TesseractPreloaderArea = TesseractPreloaderArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var TesseractPreloaderPercentArea = /** @class */ (function (_super) {
                __extends(TesseractPreloaderPercentArea, _super);
                function TesseractPreloaderPercentArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                TesseractPreloaderPercentArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#tesseractPreloaderPercentArea';
                    }
                    this.element = $(selector);
                };
                TesseractPreloaderPercentArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.TesseractPreloaderPercentArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.TesseractPreloaderPercentArea;
                };
                return TesseractPreloaderPercentArea;
            }(Avs.Ui.Handler.Text));
            Library.TesseractPreloaderPercentArea = TesseractPreloaderPercentArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var TesseractPreloaderTextArea = /** @class */ (function (_super) {
                __extends(TesseractPreloaderTextArea, _super);
                function TesseractPreloaderTextArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                TesseractPreloaderTextArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#tesseractPreloaderTextArea';
                    }
                    this.element = $(selector);
                };
                TesseractPreloaderTextArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.TesseractPreloaderTextArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.TesseractPreloaderTextArea;
                };
                return TesseractPreloaderTextArea;
            }(Avs.Ui.Handler.Text));
            Library.TesseractPreloaderTextArea = TesseractPreloaderTextArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var WebCamAccessHelpArea = /** @class */ (function (_super) {
                __extends(WebCamAccessHelpArea, _super);
                function WebCamAccessHelpArea(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                WebCamAccessHelpArea.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#webCamAccessHelpArea';
                    }
                    this.element = $(selector);
                };
                WebCamAccessHelpArea.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.WebCamAccessHelpArea = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.WebCamAccessHelpArea;
                };
                return WebCamAccessHelpArea;
            }(Avs.Ui.Handler.Text));
            Library.WebCamAccessHelpArea = WebCamAccessHelpArea;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var DebugCloseButton = /** @class */ (function (_super) {
                __extends(DebugCloseButton, _super);
                function DebugCloseButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                DebugCloseButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#debugCloseButton';
                    }
                    this.element = $(selector);
                };
                DebugCloseButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.DebugCloseButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.DebugCloseButton;
                };
                return DebugCloseButton;
            }(Avs.Ui.Handler.Button));
            Library.DebugCloseButton = DebugCloseButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ErrorMessageStartOverButton = /** @class */ (function (_super) {
                __extends(ErrorMessageStartOverButton, _super);
                function ErrorMessageStartOverButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ErrorMessageStartOverButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#errorMessageStartOverButton';
                    }
                    this.element = $(selector);
                };
                ErrorMessageStartOverButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ErrorMessageStartOverButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ErrorMessageStartOverButton;
                };
                return ErrorMessageStartOverButton;
            }(Avs.Ui.Handler.Button));
            Library.ErrorMessageStartOverButton = ErrorMessageStartOverButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var GlobalIframeCloseButton = /** @class */ (function (_super) {
                __extends(GlobalIframeCloseButton, _super);
                function GlobalIframeCloseButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                GlobalIframeCloseButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#globalIframeCloseButton';
                    }
                    this.element = $(selector);
                };
                GlobalIframeCloseButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.GlobalIframeCloseButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.GlobalIframeCloseButton;
                };
                return GlobalIframeCloseButton;
            }(Avs.Ui.Handler.Button));
            Library.GlobalIframeCloseButton = GlobalIframeCloseButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var RatioRecommendButton = /** @class */ (function (_super) {
                __extends(RatioRecommendButton, _super);
                function RatioRecommendButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                RatioRecommendButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#ratioRecommendButton';
                    }
                    this.element = $(selector);
                };
                RatioRecommendButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.RatioRecommendButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.RatioRecommendButton;
                };
                return RatioRecommendButton;
            }(Avs.Ui.Handler.Button));
            Library.RatioRecommendButton = RatioRecommendButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ResultFailButton = /** @class */ (function (_super) {
                __extends(ResultFailButton, _super);
                function ResultFailButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ResultFailButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#resultFailButton';
                    }
                    this.element = $(selector);
                };
                ResultFailButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ResultFailButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ResultFailButton;
                };
                return ResultFailButton;
            }(Avs.Ui.Handler.Button));
            Library.ResultFailButton = ResultFailButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ResultSuccessButton = /** @class */ (function (_super) {
                __extends(ResultSuccessButton, _super);
                function ResultSuccessButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ResultSuccessButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#resultSuccessButton';
                    }
                    this.element = $(selector);
                };
                ResultSuccessButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ResultSuccessButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ResultSuccessButton;
                };
                return ResultSuccessButton;
            }(Avs.Ui.Handler.Button));
            Library.ResultSuccessButton = ResultSuccessButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeDetectionCancelButton = /** @class */ (function (_super) {
                __extends(ScanIdAgeDetectionCancelButton, _super);
                function ScanIdAgeDetectionCancelButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeDetectionCancelButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeDetectionCancelButton';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeDetectionCancelButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeDetectionCancelButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ScanIdAgeDetectionCancelButton;
                };
                return ScanIdAgeDetectionCancelButton;
            }(Avs.Ui.Handler.Button));
            Library.ScanIdAgeDetectionCancelButton = ScanIdAgeDetectionCancelButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeDetectionStartButton = /** @class */ (function (_super) {
                __extends(ScanIdAgeDetectionStartButton, _super);
                function ScanIdAgeDetectionStartButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeDetectionStartButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeDetectionStartButton';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeDetectionStartButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeDetectionStartButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ScanIdAgeDetectionStartButton;
                };
                return ScanIdAgeDetectionStartButton;
            }(Avs.Ui.Handler.Button));
            Library.ScanIdAgeDetectionStartButton = ScanIdAgeDetectionStartButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationBirthDateButton = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationBirthDateButton, _super);
                function ScanIdAgeVerificationBirthDateButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationBirthDateButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationBirthDateButton';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationBirthDateButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationBirthDateButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ScanIdAgeVerificationBirthDateButton;
                };
                return ScanIdAgeVerificationBirthDateButton;
            }(Avs.Ui.Handler.Button));
            Library.ScanIdAgeVerificationBirthDateButton = ScanIdAgeVerificationBirthDateButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationConfirmationNoButton = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationConfirmationNoButton, _super);
                function ScanIdAgeVerificationConfirmationNoButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationConfirmationNoButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationConfirmationNoButton';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationConfirmationNoButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationConfirmationNoButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ScanIdAgeVerificationConfirmationNoButton;
                };
                return ScanIdAgeVerificationConfirmationNoButton;
            }(Avs.Ui.Handler.Button));
            Library.ScanIdAgeVerificationConfirmationNoButton = ScanIdAgeVerificationConfirmationNoButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationConfirmationYesButton = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationConfirmationYesButton, _super);
                function ScanIdAgeVerificationConfirmationYesButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationConfirmationYesButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationConfirmationYesButton';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationConfirmationYesButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationConfirmationYesButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ScanIdAgeVerificationConfirmationYesButton;
                };
                return ScanIdAgeVerificationConfirmationYesButton;
            }(Avs.Ui.Handler.Button));
            Library.ScanIdAgeVerificationConfirmationYesButton = ScanIdAgeVerificationConfirmationYesButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationFaceSimilarityButton = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationFaceSimilarityButton, _super);
                function ScanIdAgeVerificationFaceSimilarityButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationFaceSimilarityButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationFaceSimilarityButton';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationFaceSimilarityButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationFaceSimilarityButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ScanIdAgeVerificationFaceSimilarityButton;
                };
                return ScanIdAgeVerificationFaceSimilarityButton;
            }(Avs.Ui.Handler.Button));
            Library.ScanIdAgeVerificationFaceSimilarityButton = ScanIdAgeVerificationFaceSimilarityButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationLoadingLibraryButton = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationLoadingLibraryButton, _super);
                function ScanIdAgeVerificationLoadingLibraryButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationLoadingLibraryButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationLoadingLibraryButton';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationLoadingLibraryButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationLoadingLibraryButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ScanIdAgeVerificationLoadingLibraryButton;
                };
                return ScanIdAgeVerificationLoadingLibraryButton;
            }(Avs.Ui.Handler.Button));
            Library.ScanIdAgeVerificationLoadingLibraryButton = ScanIdAgeVerificationLoadingLibraryButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationTakePhotoButton = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationTakePhotoButton, _super);
                function ScanIdAgeVerificationTakePhotoButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationTakePhotoButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationTakePhotoButton';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationTakePhotoButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationTakePhotoButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ScanIdAgeVerificationTakePhotoButton;
                };
                return ScanIdAgeVerificationTakePhotoButton;
            }(Avs.Ui.Handler.Button));
            Library.ScanIdAgeVerificationTakePhotoButton = ScanIdAgeVerificationTakePhotoButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationUploadImageButton = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationUploadImageButton, _super);
                function ScanIdAgeVerificationUploadImageButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationUploadImageButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationUploadImageButton';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationUploadImageButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationUploadImageButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ScanIdAgeVerificationUploadImageButton;
                };
                return ScanIdAgeVerificationUploadImageButton;
            }(Avs.Ui.Handler.Button));
            Library.ScanIdAgeVerificationUploadImageButton = ScanIdAgeVerificationUploadImageButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationUploadImageIntroButton = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationUploadImageIntroButton, _super);
                function ScanIdAgeVerificationUploadImageIntroButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationUploadImageIntroButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationUploadImageIntroButton';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationUploadImageIntroButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationUploadImageIntroButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ScanIdAgeVerificationUploadImageIntroButton;
                };
                return ScanIdAgeVerificationUploadImageIntroButton;
            }(Avs.Ui.Handler.Button));
            Library.ScanIdAgeVerificationUploadImageIntroButton = ScanIdAgeVerificationUploadImageIntroButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var SelfieAgeDetectionCancelButton = /** @class */ (function (_super) {
                __extends(SelfieAgeDetectionCancelButton, _super);
                function SelfieAgeDetectionCancelButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                SelfieAgeDetectionCancelButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#selfieAgeDetectionCancelButton';
                    }
                    this.element = $(selector);
                };
                SelfieAgeDetectionCancelButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.SelfieAgeDetectionCancelButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.SelfieAgeDetectionCancelButton;
                };
                return SelfieAgeDetectionCancelButton;
            }(Avs.Ui.Handler.Button));
            Library.SelfieAgeDetectionCancelButton = SelfieAgeDetectionCancelButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var SelfieAgeDetectionStartButton = /** @class */ (function (_super) {
                __extends(SelfieAgeDetectionStartButton, _super);
                function SelfieAgeDetectionStartButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                SelfieAgeDetectionStartButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#selfieAgeDetectionStartButton';
                    }
                    this.element = $(selector);
                };
                SelfieAgeDetectionStartButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.SelfieAgeDetectionStartButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.SelfieAgeDetectionStartButton;
                };
                return SelfieAgeDetectionStartButton;
            }(Avs.Ui.Handler.Button));
            Library.SelfieAgeDetectionStartButton = SelfieAgeDetectionStartButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var StartButton = /** @class */ (function (_super) {
                __extends(StartButton, _super);
                function StartButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                StartButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#startButton';
                    }
                    this.element = $(selector);
                };
                StartButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.StartButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.StartButton;
                };
                return StartButton;
            }(Avs.Ui.Handler.Button));
            Library.StartButton = StartButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var TermsAndConditionsBackButton = /** @class */ (function (_super) {
                __extends(TermsAndConditionsBackButton, _super);
                function TermsAndConditionsBackButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                TermsAndConditionsBackButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#termsAndConditionsBackButton';
                    }
                    this.element = $(selector);
                };
                TermsAndConditionsBackButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.TermsAndConditionsBackButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.TermsAndConditionsBackButton;
                };
                return TermsAndConditionsBackButton;
            }(Avs.Ui.Handler.Button));
            Library.TermsAndConditionsBackButton = TermsAndConditionsBackButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var WebCamAccessHelpBackButton = /** @class */ (function (_super) {
                __extends(WebCamAccessHelpBackButton, _super);
                function WebCamAccessHelpBackButton(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                WebCamAccessHelpBackButton.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#webCamAccessHelpBackButton';
                    }
                    this.element = $(selector);
                };
                WebCamAccessHelpBackButton.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.WebCamAccessHelpBackButton = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.WebCamAccessHelpBackButton;
                };
                return WebCamAccessHelpBackButton;
            }(Avs.Ui.Handler.Button));
            Library.WebCamAccessHelpBackButton = WebCamAccessHelpBackButton;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var TermsAndConditionsCheckbox = /** @class */ (function (_super) {
                __extends(TermsAndConditionsCheckbox, _super);
                function TermsAndConditionsCheckbox(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    _this.initListeners();
                    return _this;
                }
                TermsAndConditionsCheckbox.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#termsAndConditionsCheckbox';
                    }
                    this.element = $(selector);
                };
                TermsAndConditionsCheckbox.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.TermsAndConditionsCheckbox = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled'),
                        value: this.element.is(':checked'),
                        labelValue: this.element.parent().find(Avs.Ui.Handler.CheckboxInput.LABEL_SELECTOR)
                    };
                    this.states = entity.states.TermsAndConditionsCheckbox;
                };
                return TermsAndConditionsCheckbox;
            }(Avs.Ui.Handler.CheckboxInput));
            Library.TermsAndConditionsCheckbox = TermsAndConditionsCheckbox;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationUploadFileInput = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationUploadFileInput, _super);
                function ScanIdAgeVerificationUploadFileInput(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationUploadFileInput.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationUploadFileInput';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationUploadFileInput.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationUploadFileInput = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ScanIdAgeVerificationUploadFileInput;
                };
                return ScanIdAgeVerificationUploadFileInput;
            }(Avs.Ui.Handler.FileInput));
            Library.ScanIdAgeVerificationUploadFileInput = ScanIdAgeVerificationUploadFileInput;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationUploadFileIntroInput = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationUploadFileIntroInput, _super);
                function ScanIdAgeVerificationUploadFileIntroInput(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationUploadFileIntroInput.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationUploadFileIntroInput';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationUploadFileIntroInput.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationUploadFileIntroInput = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.ScanIdAgeVerificationUploadFileIntroInput;
                };
                return ScanIdAgeVerificationUploadFileIntroInput;
            }(Avs.Ui.Handler.FileInput));
            Library.ScanIdAgeVerificationUploadFileIntroInput = ScanIdAgeVerificationUploadFileIntroInput;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var FaceGuideSmileStartHintLabel = /** @class */ (function (_super) {
                __extends(FaceGuideSmileStartHintLabel, _super);
                function FaceGuideSmileStartHintLabel(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                FaceGuideSmileStartHintLabel.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#faceGuideSmileStartHintLabel';
                    }
                    this.element = $(selector);
                };
                FaceGuideSmileStartHintLabel.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.FaceGuideSmileStartHintLabel = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.FaceGuideSmileStartHintLabel;
                };
                return FaceGuideSmileStartHintLabel;
            }(Avs.Ui.Handler.Label));
            Library.FaceGuideSmileStartHintLabel = FaceGuideSmileStartHintLabel;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var FaceGuideSmileStopHintLabel = /** @class */ (function (_super) {
                __extends(FaceGuideSmileStopHintLabel, _super);
                function FaceGuideSmileStopHintLabel(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                FaceGuideSmileStopHintLabel.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#faceGuideSmileStopHintLabel';
                    }
                    this.element = $(selector);
                };
                FaceGuideSmileStopHintLabel.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.FaceGuideSmileStopHintLabel = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled')
                    };
                    this.states = entity.states.FaceGuideSmileStopHintLabel;
                };
                return FaceGuideSmileStopHintLabel;
            }(Avs.Ui.Handler.Label));
            Library.FaceGuideSmileStopHintLabel = FaceGuideSmileStopHintLabel;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationStatusLabel = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationStatusLabel, _super);
                function ScanIdAgeVerificationStatusLabel(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationStatusLabel.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationStatusLabel';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationStatusLabel.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationStatusLabel = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationStatusLabel;
                };
                return ScanIdAgeVerificationStatusLabel;
            }(Avs.Ui.Handler.Label));
            Library.ScanIdAgeVerificationStatusLabel = ScanIdAgeVerificationStatusLabel;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var SelfieAgeDetectionStatusLabel = /** @class */ (function (_super) {
                __extends(SelfieAgeDetectionStatusLabel, _super);
                function SelfieAgeDetectionStatusLabel(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                SelfieAgeDetectionStatusLabel.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#selfieAgeDetectionStatusLabel';
                    }
                    this.element = $(selector);
                };
                SelfieAgeDetectionStatusLabel.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.SelfieAgeDetectionStatusLabel = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.SelfieAgeDetectionStatusLabel;
                };
                return SelfieAgeDetectionStatusLabel;
            }(Avs.Ui.Handler.Label));
            Library.SelfieAgeDetectionStatusLabel = SelfieAgeDetectionStatusLabel;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationLoadingLabelPercentCounter = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationLoadingLabelPercentCounter, _super);
                function ScanIdAgeVerificationLoadingLabelPercentCounter(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                ScanIdAgeVerificationLoadingLabelPercentCounter.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationLoadingLabelPercentCounter';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationLoadingLabelPercentCounter.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationLoadingLabelPercentCounter = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.ScanIdAgeVerificationLoadingLabelPercentCounter;
                };
                return ScanIdAgeVerificationLoadingLabelPercentCounter;
            }(Avs.Ui.Handler.PercentCounter));
            Library.ScanIdAgeVerificationLoadingLabelPercentCounter = ScanIdAgeVerificationLoadingLabelPercentCounter;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var SelfieAgeDetectionLoadingLabelPercentCounter = /** @class */ (function (_super) {
                __extends(SelfieAgeDetectionLoadingLabelPercentCounter, _super);
                function SelfieAgeDetectionLoadingLabelPercentCounter(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                SelfieAgeDetectionLoadingLabelPercentCounter.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#selfieAgeDetectionLoadingLabelPercentCounter';
                    }
                    this.element = $(selector);
                };
                SelfieAgeDetectionLoadingLabelPercentCounter.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.SelfieAgeDetectionLoadingLabelPercentCounter = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.SelfieAgeDetectionLoadingLabelPercentCounter;
                };
                return SelfieAgeDetectionLoadingLabelPercentCounter;
            }(Avs.Ui.Handler.PercentCounter));
            Library.SelfieAgeDetectionLoadingLabelPercentCounter = SelfieAgeDetectionLoadingLabelPercentCounter;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var FailPageErrorQrCode = /** @class */ (function (_super) {
                __extends(FailPageErrorQrCode, _super);
                function FailPageErrorQrCode(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                FailPageErrorQrCode.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#failPageErrorQrCode';
                    }
                    this.element = $(selector);
                };
                FailPageErrorQrCode.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.FailPageErrorQrCode = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.FailPageErrorQrCode;
                };
                return FailPageErrorQrCode;
            }(Avs.Ui.Handler.QrCode));
            Library.FailPageErrorQrCode = FailPageErrorQrCode;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var StartPageErrorQrCode = /** @class */ (function (_super) {
                __extends(StartPageErrorQrCode, _super);
                function StartPageErrorQrCode(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    return _this;
                }
                StartPageErrorQrCode.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#startPageErrorQrCode';
                    }
                    this.element = $(selector);
                };
                StartPageErrorQrCode.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.StartPageErrorQrCode = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.StartPageErrorQrCode;
                };
                return StartPageErrorQrCode;
            }(Avs.Ui.Handler.QrCode));
            Library.StartPageErrorQrCode = StartPageErrorQrCode;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var FaceApiTypeSelect = /** @class */ (function (_super) {
                __extends(FaceApiTypeSelect, _super);
                function FaceApiTypeSelect(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    _this.initListeners();
                    return _this;
                }
                FaceApiTypeSelect.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#faceApiTypeSelect';
                    }
                    this.element = $(selector);
                };
                FaceApiTypeSelect.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.FaceApiTypeSelect = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled'),
                        value: this.element.val(),
                        name: this.element.find('option:selected').text()
                    };
                    this.states = entity.states.FaceApiTypeSelect;
                };
                return FaceApiTypeSelect;
            }(Avs.Ui.Handler.SelectInput));
            Library.FaceApiTypeSelect = FaceApiTypeSelect;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationCountrySelect = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationCountrySelect, _super);
                function ScanIdAgeVerificationCountrySelect(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    _this.initListeners();
                    return _this;
                }
                ScanIdAgeVerificationCountrySelect.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationCountrySelect';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationCountrySelect.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationCountrySelect = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled'),
                        value: this.element.val(),
                        name: this.element.find('option:selected').text()
                    };
                    this.states = entity.states.ScanIdAgeVerificationCountrySelect;
                };
                return ScanIdAgeVerificationCountrySelect;
            }(Avs.Ui.Handler.SelectInput));
            Library.ScanIdAgeVerificationCountrySelect = ScanIdAgeVerificationCountrySelect;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationDeviceSelect = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationDeviceSelect, _super);
                function ScanIdAgeVerificationDeviceSelect(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    _this.initListeners();
                    return _this;
                }
                ScanIdAgeVerificationDeviceSelect.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationDeviceSelect';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationDeviceSelect.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationDeviceSelect = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled'),
                        value: this.element.val(),
                        name: this.element.find('option:selected').text()
                    };
                    this.states = entity.states.ScanIdAgeVerificationDeviceSelect;
                };
                return ScanIdAgeVerificationDeviceSelect;
            }(Avs.Ui.Handler.SelectInput));
            Library.ScanIdAgeVerificationDeviceSelect = ScanIdAgeVerificationDeviceSelect;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationStateSelect = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationStateSelect, _super);
                function ScanIdAgeVerificationStateSelect(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    _this.initListeners();
                    return _this;
                }
                ScanIdAgeVerificationStateSelect.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationStateSelect';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationStateSelect.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationStateSelect = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled'),
                        value: this.element.val(),
                        name: this.element.find('option:selected').text()
                    };
                    this.states = entity.states.ScanIdAgeVerificationStateSelect;
                };
                return ScanIdAgeVerificationStateSelect;
            }(Avs.Ui.Handler.SelectInput));
            Library.ScanIdAgeVerificationStateSelect = ScanIdAgeVerificationStateSelect;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var ScanIdAgeVerificationTypeSelect = /** @class */ (function (_super) {
                __extends(ScanIdAgeVerificationTypeSelect, _super);
                function ScanIdAgeVerificationTypeSelect(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    _this.initListeners();
                    return _this;
                }
                ScanIdAgeVerificationTypeSelect.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#scanIdAgeVerificationTypeSelect';
                    }
                    this.element = $(selector);
                };
                ScanIdAgeVerificationTypeSelect.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.ScanIdAgeVerificationTypeSelect = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled'),
                        value: this.element.val(),
                        name: this.element.find('option:selected').text()
                    };
                    this.states = entity.states.ScanIdAgeVerificationTypeSelect;
                };
                return ScanIdAgeVerificationTypeSelect;
            }(Avs.Ui.Handler.SelectInput));
            Library.ScanIdAgeVerificationTypeSelect = ScanIdAgeVerificationTypeSelect;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var SelfieAgeDetectionDeviceSelect = /** @class */ (function (_super) {
                __extends(SelfieAgeDetectionDeviceSelect, _super);
                function SelfieAgeDetectionDeviceSelect(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    _this.initListeners();
                    return _this;
                }
                SelfieAgeDetectionDeviceSelect.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#selfieAgeDetectionDeviceSelect';
                    }
                    this.element = $(selector);
                };
                SelfieAgeDetectionDeviceSelect.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.SelfieAgeDetectionDeviceSelect = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled'),
                        value: this.element.val(),
                        name: this.element.find('option:selected').text()
                    };
                    this.states = entity.states.SelfieAgeDetectionDeviceSelect;
                };
                return SelfieAgeDetectionDeviceSelect;
            }(Avs.Ui.Handler.SelectInput));
            Library.SelfieAgeDetectionDeviceSelect = SelfieAgeDetectionDeviceSelect;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var TesseractTypeSelect = /** @class */ (function (_super) {
                __extends(TesseractTypeSelect, _super);
                function TesseractTypeSelect(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    _this.initListeners();
                    return _this;
                }
                TesseractTypeSelect.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#tesseractTypeSelect';
                    }
                    this.element = $(selector);
                };
                TesseractTypeSelect.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.TesseractTypeSelect = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled'),
                        value: this.element.val(),
                        name: this.element.find('option:selected').text()
                    };
                    this.states = entity.states.TesseractTypeSelect;
                };
                return TesseractTypeSelect;
            }(Avs.Ui.Handler.SelectInput));
            Library.TesseractTypeSelect = TesseractTypeSelect;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var VerificationTypeSelect = /** @class */ (function (_super) {
                __extends(VerificationTypeSelect, _super);
                function VerificationTypeSelect(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    _this.initListeners();
                    return _this;
                }
                VerificationTypeSelect.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#verificationTypeSelect';
                    }
                    this.element = $(selector);
                };
                VerificationTypeSelect.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.VerificationTypeSelect = {
                        visible: this.element.is(':visible'),
                        enabled: !this.element.attr('disabled'),
                        value: this.element.val(),
                        name: this.element.find('option:selected').text()
                    };
                    this.states = entity.states.VerificationTypeSelect;
                };
                return VerificationTypeSelect;
            }(Avs.Ui.Handler.SelectInput));
            Library.VerificationTypeSelect = VerificationTypeSelect;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avs;
(function (Avs) {
    var Ui;
    (function (Ui) {
        var Library;
        (function (Library) {
            var VerificationTypeTabs = /** @class */ (function (_super) {
                __extends(VerificationTypeTabs, _super);
                function VerificationTypeTabs(event, selector) {
                    var _this = _super.call(this, event) || this;
                    _this.event = event;
                    _this.getElement(selector);
                    _this.initStates();
                    _this.initListeners();
                    return _this;
                }
                VerificationTypeTabs.prototype.verificationTypeToTabNumber = function (verificationType) {
                    switch (verificationType) {
                        case Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL:
                            return VerificationTypeTabs.TAB_SELFIE_NUMBER;
                        case Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SCAN_ID:
                            return VerificationTypeTabs.TAB_SCAN_ID_NUMBER;
                        default:
                            return null;
                    }
                };
                VerificationTypeTabs.prototype.tabNumberToVerificationType = function (verificationType) {
                    switch (verificationType) {
                        case VerificationTypeTabs.TAB_SELFIE_NUMBER:
                            return Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SELFIE_AND_SCAN_ID_OPTIONAL;
                        case VerificationTypeTabs.TAB_SCAN_ID_NUMBER:
                            return Avs.Entity.VerificationStepGlobal.VERIFICATION_TYPE_SCAN_ID;
                        default:
                            return null;
                    }
                };
                VerificationTypeTabs.prototype.tabWasSelected = function (tabNumber, tabData) {
                    this.event.emit(VerificationTypeTabs.ON_TAB_SELECTED, {
                        tabNumber: tabNumber,
                        tabData: tabData
                    });
                };
                VerificationTypeTabs.prototype.getElement = function (selector) {
                    if (!selector) {
                        selector = '#verificationTypeTabs';
                    }
                    this.element = $(selector);
                };
                VerificationTypeTabs.prototype.initStates = function () {
                    var entity = Avs.Entity.Ui.getInstance();
                    entity.states.VerificationTypeTabs = {
                        visible: this.element.is(':visible'),
                        value: this.element.html()
                    };
                    this.states = entity.states.VerificationTypeTabs;
                };
                VerificationTypeTabs.ON_TAB_SELECTED = 'Ui.Library.VerificationTypeTabs.onTabSelected';
                VerificationTypeTabs.TAB_SELFIE_NUMBER = 0;
                VerificationTypeTabs.TAB_SCAN_ID_NUMBER = 1;
                return VerificationTypeTabs;
            }(Avs.Ui.Handler.Tabs));
            Library.VerificationTypeTabs = VerificationTypeTabs;
        })(Library = Ui.Library || (Ui.Library = {}));
    })(Ui = Avs.Ui || (Avs.Ui = {}));
})(Avs || (Avs = {}));
