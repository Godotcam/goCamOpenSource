namespace Avs {

	export namespace Config {

		export let scanIdList: Avs.Entity.IIdTypeConfig = {
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
								"container"    : {
									"width"    : 600,
									"height"   : 374,
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
								"container"    : {
									"width"    : 600,
									"height"   : 374,
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
								"container"    : {
									"width"    : 600,
									"height"   : 414,
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
								"container"    : {
									"width"    : 600,
									"height"   : 423,
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
								"container"    : {
									"width"    : 600,
									"height"   : 372,
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
								"container"    : {
									"width"    : 600,
									"height"   : 374,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 380,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 413,
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
								"container"    : {
									"width"    : 600,
									"height"   : 407,
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
								"container"    : {
									"width"    : 600,
									"height"   : 387,
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
								"container"    : {
									"width"    : 600,
									"height"   : 380,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 378,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 418,
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
								"container"    : {
									"width"    : 600,
									"height"   : 388,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 421,
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
								"container"    : {
									"width"    : 600,
									"height"   : 409,
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
								"container"    : {
									"width"    : 600,
									"height"   : 383,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 388,
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
								"container"    : {
									"width"    : 600,
									"height"   : 376,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 411,
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
								"container"    : {
									"width"    : 600,
									"height"   : 382,
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
					"idCard"       : <any>[],
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 407,
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
								"container"    : {
									"width"    : 600,
									"height"   : 415,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
								"container"    : {
									"width"    : 600,
									"height"   : 377,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 386,
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
								"container"    : {
									"width"    : 600,
									"height"   : 384,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 425,
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
								"container"    : {
									"width"    : 600,
									"height"   : 414,
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
								"container"    : {
									"width"    : 600,
									"height"   : 378,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 377,
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
								"container"    : {
									"width"    : 600,
									"height"   : 376,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 414,
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
								"container"    : {
									"width"    : 600,
									"height"   : 406,
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
								"container"    : {
									"width"    : 600,
									"height"   : 371,
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
								"container"    : {
									"width"    : 600,
									"height"   : 383,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 568,
									"height"   : 400,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 445,
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
								"container"    : {
									"width"    : 600,
									"height"   : 413,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
								"container"    : {
									"width"    : 600,
									"height"   : 381,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 381,
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
								"container"    : {
									"width"    : 600,
									"height"   : 368,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 300,
									"height"   : 219,
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
								"container"    : {
									"width"    : 600,
									"height"   : 420,
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
								"container"    : {
									"width"    : 600,
									"height"   : 383,
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
								"container"    : {
									"width"    : 600,
									"height"   : 378,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 378,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 410,
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
								"container"    : {
									"width"    : 600,
									"height"   : 374,
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
								"container"    : {
									"width"    : 600,
									"height"   : 378,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 376,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 417,
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
								"container"    : {
									"width"    : 600,
									"height"   : 380,
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
					"idCard"       : <any>[],
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 421,
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
								"container"    : {
									"width"    : 600,
									"height"   : 375,
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
								"container"    : {
									"width"    : 600,
									"height"   : 368,
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
					"idCard"       : <any>[],
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 432,
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
								"container"    : {
									"width"    : 600,
									"height"   : 431,
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
								"container"    : {
									"width"    : 600,
									"height"   : 378,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 386,
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
								"container"    : {
									"width"    : 600,
									"height"   : 388,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 422,
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
								"container"    : {
									"width"    : 600,
									"height"   : 411,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
								"container"    : {
									"width"    : 600,
									"height"   : 381,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 401,
									"height"   : 250,
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
								"container"    : {
									"width"    : 600,
									"height"   : 382,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 448,
									"height"   : 316,
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
								"container"    : {
									"width"    : 600,
									"height"   : 426,
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
								"container"    : {
									"width"    : 600,
									"height"   : 452,
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
								"container"    : {
									"width"    : 600,
									"height"   : 378,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 372,
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
								"container"    : {
									"width"    : 600,
									"height"   : 375,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 416,
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
								"container"    : {
									"width"    : 600,
									"height"   : 377,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 377,
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
								"container"    : {
									"width"    : 600,
									"height"   : 378,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 404,
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
								"container"    : {
									"width"    : 600,
									"height"   : 410,
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
								"container"    : {
									"width"    : 600,
									"height"   : 384,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
								"container"    : {
									"width"    : 600,
									"height"   : 377,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 421,
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
								"container"    : {
									"width"    : 597,
									"height"   : 400,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 378,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 408,
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
								"container"    : {
									"width"    : 600,
									"height"   : 415,
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
								"container"    : {
									"width"    : 600,
									"height"   : 384,
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
								"container"    : {
									"width"    : 600,
									"height"   : 369,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 359,
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
								"container"    : {
									"width"    : 600,
									"height"   : 384,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 440,
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
								"container"    : {
									"width"    : 600,
									"height"   : 436,
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
								"container"    : {
									"width"    : 600,
									"height"   : 380,
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
								"container"    : {
									"width"    : 600,
									"height"   : 382,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 382,
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
								"container"    : {
									"width"    : 600,
									"height"   : 376,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 415,
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
								"container"    : {
									"width"    : 600,
									"height"   : 416,
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
								"container"    : {
									"width"    : 600,
									"height"   : 399,
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
								"container"    : {
									"width"    : 600,
									"height"   : 381,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
								"container"    : {
									"width"    : 600,
									"height"   : 375,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 418,
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
								"container"    : {
									"width"    : 600,
									"height"   : 427,
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
								"container"    : {
									"width"    : 600,
									"height"   : 377,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 397,
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
								"container"    : {
									"width"    : 600,
									"height"   : 383,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 407,
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
								"container"    : {
									"width"    : 600,
									"height"   : 416,
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
								"container"    : {
									"width"    : 600,
									"height"   : 381,
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
								"container"    : {
									"width"    : 600,
									"height"   : 377,
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
								"container"    : {
									"width"    : 600,
									"height"   : 376,
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
								"container"    : {
									"width"    : 521,
									"height"   : 321,
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
								"container"    : {
									"width"    : 600,
									"height"   : 390,
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
								"container"    : {
									"width"    : 600,
									"height"   : 413,
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
								"container"    : {
									"width"    : 600,
									"height"   : 382,
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

					],
				}
			},
			"RO": {
				"countryName": "Romania",
				"hasMultipleState": false,
				"idConfig": {
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 422,
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
								"container"    : {
									"width"    : 600,
									"height"   : 423,
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
								"container"    : {
									"width"    : 600,
									"height"   : 377,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 421,
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
								"container"    : {
									"width"    : 600,
									"height"   : 374,
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
								"container"    : {
									"width"    : 546,
									"height"   : 350,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 378,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 437,
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
								"container"    : {
									"width"    : 600,
									"height"   : 441,
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
								"container"    : {
									"width"    : 600,
									"height"   : 377,
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
								"container"    : {
									"width"    : 600,
									"height"   : 381,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 378,
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
								"container"    : {
									"width"    : 527,
									"height"   : 336,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 427,
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
								"container"    : {
									"width"    : 600,
									"height"   : 442,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
								"container"    : {
									"width"    : 600,
									"height"   : 385,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 381,
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
								"container"    : {
									"width"    : 600,
									"height"   : 384,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 410,
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
								"container"    : {
									"width"    : 600,
									"height"   : 419,
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
								"container"    : {
									"width"    : 600,
									"height"   : 376,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 386,
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
								"container"    : {
									"width"    : 600,
									"height"   : 382,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 418,
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
								"container"    : {
									"width"    : 600,
									"height"   : 430,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 377,
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
								"container"    : {
									"width"    : 600,
									"height"   : 377,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 429,
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
								"container"    : {
									"width"    : 600,
									"height"   : 429,
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
								"container"    : {
									"width"    : 561,
									"height"   : 350,
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
								"container"    : {
									"width"    : 600,
									"height"   : 377,
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
					"idCard"       : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 379,
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
					"passport"     : [
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
								"container"    : {
									"width"    : 600,
									"height"   : 423,
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
								"container"    : {
									"width"    : 600,
									"height"   : 414,
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
								"container"    : {
									"width"    : 600,
									"height"   : 374,
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
								"container"    : {
									"width"    : 600,
									"height"   : 369,
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
							"idCard": <any>[],
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
										"container"    : {
											"width"    : 600,
											"height"   : 427,
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
										"container"    : {
											"width"    : 600,
											"height"   : 414,
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
										"container"    : {
											"width"    : 500,
											"height"   : 325,
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
										"container"    : {
											"width"    : 554,
											"height"   : 350,
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
							"idCard": <any>[],
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
										"container"    : {
											"width"    : 600,
											"height"   : 427,
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
										"container"    : {
											"width"    : 600,
											"height"   : 414,
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
										"container"    : {
											"width"    : 554,
											"height"   : 350,
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
							"idCard": <any>[],
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
										"container"    : {
											"width"    : 600,
											"height"   : 427,
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
										"container"    : {
											"width"    : 600,
											"height"   : 414,
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
										"container"    : {
											"width"    : 590,
											"height"   : 363,
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
							"idCard": <any>[],
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
										"container"    : {
											"width"    : 600,
											"height"   : 427,
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
										"container"    : {
											"width"    : 600,
											"height"   : 414,
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
										"container"    : {
											"width"    : 535,
											"height"   : 350,
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
							"idCard": <any>[],
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
										"container"    : {
											"width"    : 600,
											"height"   : 427,
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
										"container"    : {
											"width"    : 600,
											"height"   : 414,
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
										"container"    : {
											"width"    : 549,
											"height"   : 350,
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
							"idCard": <any>[],
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
										"container"    : {
											"width"    : 600,
											"height"   : 427,
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
										"container"    : {
											"width"    : 600,
											"height"   : 414,
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
										"container"    : {
											"width"    : 548,
											"height"   : 350,
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
							"idCard": <any>[],
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
										"container"    : {
											"width"    : 600,
											"height"   : 427,
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
										"container"    : {
											"width"    : 600,
											"height"   : 414,
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
										"container"    : {
											"width"    : 546,
											"height"   : 350,
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
							"idCard": <any>[],
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
										"container"    : {
											"width"    : 600,
											"height"   : 427,
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
										"container"    : {
											"width"    : 600,
											"height"   : 414,
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
										"container"    : {
											"width"    : 546,
											"height"   : 350,
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
					},

				}
			}
		};

	}

}
