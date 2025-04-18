const {I} = inject();

class Busqueda {
    constructor() {
        //Declaración de variables
        this.fields = {
            barraDeBusqueda: '//input[@aria-label="Buscar en Wikipedia"]',
            articuloBusqueda: 'Brenda',
            buscar: '//span[text()="Buscar páginas que contengan "]',
            resultadoBusqueda: '[id="firstHeading"]',
            avanza20res: '(//a[@title="20 resultados siguientes"])[1]',
            ultimoRegistro: '(//li[@class="mw-search-result mw-search-result-ns-0"])[20]',
            seleccionaRegistro: '(//div[@class="mw-search-result-heading"])[20]//a',
            referencias: '[id="Referencias"]',
        }
    }

    realizaBusqueda(){
        I.waitForElement(this.fields.barraDeBusqueda, 3)
        I.wait(2)
        I.fillField(this.fields.barraDeBusqueda, this.fields.articuloBusqueda)
        I.wait(2)
        I.click(this.fields.buscar)
    }

    avanzoPagina(){
        I.wait(2)
        I.waitForElement(this.fields.resultadoBusqueda, 3)
        I.wait(2)
        I.click(this.fields.avanza20res)
    }

    seleccionoArticulo(){
        I.wait(3)
        I.scrollTo(this.fields.ultimoRegistro)
        I.wait(2)
        I.click(this.fields.seleccionaRegistro)
    }

    verificoArticulo(){
        I.wait(3)
        I.scrollTo(this.fields.referencias)
        I.wait(2)
        I.seeElement(this.fields.referencias)
    }
}
module.exports = new Busqueda();