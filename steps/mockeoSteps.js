const { and } = require("ajv/dist/compile/codegen");
const mockeo = require("../pages/Mockeo");
const { log } = require("neo-async");

const {I} = inject();

Given('Estoy en la pagina princial', () => {
    I.amOnPage('/')
})

When('Me posiciono en campos a mockear', () => {
    mockeo.apartadoMockeo()
    mockeo.verificarCambio()
    I.mockRoute('**/w/api.php?action=query&format=json&formatversion=2&prop=imageinfo&titles=Archivo%3AVellereophyton_dealbatum_-_Flickr_-_Kevin_Thiele.jpg&iiprop=timestamp%7Curl%7Csize%7Cmime%7Cmediatype%7Cextmetadata&iiextmetadatafilter=DateTime%7CDateTimeOriginal%7CObjectName%7CImageDescription%7CLicense%7CLicenseShortName%7CUsageTerms%7CLicenseUrl%7CCredit%7CArtist%7CAuthorCount%7CGPSLatitude%7CGPSLongitude%7CPermission%7CAttribution%7CAttributionRequired%7CNonFree%7CRestrictions%7CDeletionReason&iiextmetadatalanguage=es&uselang=content&smaxage=300&maxage=300', async (route) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(
                {
                    "batchcomplete": true,
                    "query": {
                        "normalized": [
                            {
                                "fromencoded": false,
                                "from": "Archivo:Vellereophyton_dealbatum_-_Flickr_-_Kevin_Thiele.jpg",
                                "to": "Archivo:Vellereophyton dealbatum - Flickr - Kevin Thiele.jpg"
                            }
                        ],
                        "pages": [
                            {
                                "ns": 6,
                                "title": "Archivo:Vellereophyton dealbatum - Flickr - Kevin Thiele.jpg",
                                "missing": true,
                                "known": true,
                                "imagerepository": "shared",
                                "imageinfo": [
                                    {
                                        "timestamp": "2017-10-15T20:20:50Z",
                                        "size": 2508997,
                                        "width": 2219,
                                        "height": 2916,
                                        "url": "https://definicion.de/wp-content/uploads/2018/01/gato-1.jpg",
                                        "descriptionurl": "https://commons.wikimedia.org/wiki/File:Vellereophyton_dealbatum_-_Flickr_-_Kevin_Thiele.jpg",
                                        "descriptionshorturl": "https://commons.wikimedia.org/w/index.php?curid=63394781",
                                        "extmetadata": {
                                            "DateTime": {
                                                "value": "2017-10-15 20:20:50",
                                                "source": "mediawiki-metadata",
                                                "hidden": ""
                                            },
                                            "ObjectName": {
                                                "value": "Vellereophyton dealbatum - Flickr - Kevin Thiele",
                                                "source": "mediawiki-metadata",
                                                "hidden": ""
                                            },
                                            "ImageDescription": {
                                                "value": "KRT4067 mock",
                                                "source": "commons-desc-page",
                                                "hidden": ""
                                            },
                                            "DateTimeOriginal": {
                                                "value": "2010-10-24 09:25",
                                                "source": "commons-desc-page"
                                            },
                                            "Credit": {
                                                "value": "<a rel=\"nofollow\" class=\"external text\" href=\"https://www.flickr.com/photos/66951228@N07/6714387385/\">Vellereophyton dealbatum</a>",
                                                "source": "commons-desc-page",
                                                "hidden": ""
                                            },
                                            "Artist": {
                                                "value": "<a rel=\"nofollow\" class=\"external text\" href=\"https://www.flickr.com/people/66951228@N07\">Kevin Thiele</a> from Perth, Australia",
                                                "source": "commons-desc-page",
                                                "hidden": ""
                                            },
                                            "LicenseShortName": {
                                                "value": "CC BY 2.0",
                                                "source": "commons-desc-page",
                                                "hidden": ""
                                            },
                                            "UsageTerms": {
                                                "value": "Creative Commons Attribution 2.0",
                                                "source": "commons-desc-page",
                                                "hidden": ""
                                            },
                                            "AttributionRequired": {
                                                "value": "true",
                                                "source": "commons-desc-page",
                                                "hidden": ""
                                            },
                                            "LicenseUrl": {
                                                "value": "https://creativecommons.org/licenses/by/2.0",
                                                "source": "commons-desc-page",
                                                "hidden": ""
                                            },
                                            "Restrictions": {
                                                "value": "",
                                                "source": "commons-desc-page",
                                                "hidden": ""
                                            },
                                            "License": {
                                                "value": "cc-by-2.0",
                                                "source": "commons-templates",
                                                "hidden": ""
                                            }
                                        },
                                        "mime": "image/jpeg",
                                        "mediatype": "BITMAP"
                                    }
                                ]
                            }
                        ]
                    }
                }
            )
        })
    })
    I.wait(3)
    I.click('//span[@class="mw-mmv-icon"]')
})

Then('Veo los datos mokeados', () => {
    mockeo.verificarCambio()
})