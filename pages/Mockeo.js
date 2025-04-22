const {I} = inject();

class mockeo {
    constructor() {
        //Declaración de variables
        this.fields = {
            documentacion: '//a[@name="/documentation"]'
        }
    }

    inicial(){
        I.amOnPage('https://rickandmortyapi.com')
    }

    apartadoMockeo(){
        I.click(this.fields.documentacion)
        I.wait(3)
        I.mockRoute('https://rickandmortyapi.com/page-data/documentation/page-data.json', async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    "componentChunkName": "component---src-pages-documentation-mdx",
                    "path": "/documentation/",
                    "result": {
                        "pageContext": {
                            "frontmatter": {
                                //"title": "Documentation",
                                "title": "BLA BLA BLA.",
                                "slug": "/documentation",
                                "github": "/documentation.mdx",
                                "description": "This documentation will help you get familiar with the resources of the Rick and Morty API and show you how to make different queries.",
                                "cover": "/images/docs.jpeg"
                            }
                        }
                    },
                    "staticQueryHashes": [
                        "1506520932",
                        "2138676555",
                        "48135295"
                    ]
                })
            })
        })
    }

    verificarCambio(){
        I.amOnPage('https://rickandmortyapi.com/documentation')
        I.wait(3)
    }
}
module.exports = new mockeo();