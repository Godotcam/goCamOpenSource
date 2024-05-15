namespace Avs {

	export namespace Helper {

		export namespace Country {

			// TODO: add more when needed
			// https://dev.maxmind.com/geoip/legacy/codes?lang=en
			export enum ECodeList {
				AUSTRIA            = 'at',
				BELGIUM            = 'be',
				BULGARIA           = 'bg',
				CROATIA            = 'hr',
				CZECH_REPUBLIC     = 'cz',
				DENMARK            = 'dk',
				ESTONIA            = 'ee',
				FINLAND            = 'fi',
				FRANCE             = 'fr',
				GERMANY            = 'de',
				GREECE             = 'el',
				HUNGARY            = 'hu',
				ICELAND            = 'is',
				IRELAND            = 'ie',
				ITALY              = 'it',
				LATVIA             = 'lv',
				LIECHTENSTEIN      = 'li',
				LITHUANIA          = 'lt',
				LUXEMBOURG         = 'lu',
				MALTA              = 'mt',
				NETHERLANDS        = 'nl',
				NORWAY             = 'no',
				POLAND             = 'pl',
				PORTUGAL           = 'pt',
				REPUBLIC_OF_CYPRUS = 'cy',
				ROMANIA            = 'ro',
				SLOVAKIA           = 'sk',
				SLOVENIA           = 'si',
				SPAIN              = 'es',
				SWEDEN             = 'se',
				SWITZERLAND        = 'ch',
				UNITED_KINGDOM     = 'gb',
				UNITED_STATES      = 'us',
			}

			// TODO: add more when needed
			export enum EBrowserLanguageCountryList {
				AUSTRIA                   = 'de-at',
				BELGIUM                   = 'fr-be',
				BELGIUM_ALTERNATIVE_1     = 'nl-be',
				BULGARIA                  = 'bg',
				CROATIA                   = 'hr',
				CZECH_REPUBLIC            = 'cs',
				DENMARK                   = 'da',
				ESTONIA                   = 'et',
				FINLAND                   = 'sv-fi',
				FRANCE                    = 'fr',
				FRANCE_ALTERNATIVE_1      = 'fr-fr',
				FRANCE_ALTERNATIVE_2      = 'fr-mc',
				GERMANY                   = 'de',
				GERMANY_ALTERNATIVE_1     = 'de-de',
				GREECE                    = 'el',
				HUNGARY                   = 'hu',
				ICELAND                   = 'is',
				IRELAND                   = 'en-ie',
				ITALY                     = 'it',
				LATVIA                    = 'lv',
				LIECHTENSTEIN             = 'de-li',
				LITHUANIA                 = 'lt',
				LUXEMBOURG                = 'lb',
				MALTA                     = 'mt',
				NETHERLANDS               = 'nl',
				NORWAY                    = 'no',
				POLAND                    = 'pl',
				PORTUGAL                  = 'pt',
				REPUBLIC_OF_CYPRUS        = 'el',
				ROMANIA                   = 'ro',
				SLOVAKIA                  = 'sk',
				SLOVENIA                  = 'sl',
				SPAIN                     = 'es-es',
				SWEDEN                    = 'sv',
				SWEDEN_ALTERNATIVE_1      = 'sv-sv',
				SWITZERLAND               = 'fr-ch',
				SWITZERLAND_ALTERNATIVE_1 = 'de-ch',
				SWITZERLAND_ALTERNATIVE_2 = 'it-ch',
				UNITED_KINGDOM            = 'en-gb',
				UNITED_STATES             = 'en-us',
			}

			export function getBrowserCountryFromLanguage(defaultCountry?: string) {

				let countryCode = ECodeList.FRANCE.toString();
				if (defaultCountry) {
					countryCode = defaultCountry;
				}

				let browserLanguage = navigator.language || (<any>navigator).userLanguage;
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

		}

	}

}
