const {I} = inject();

class mockeo {
    constructor() {
        //Declaración de variables
        this.fields = {
            barraDeBusqueda: '//input[@aria-label="Buscar en Wikipedia"]',
            articuloBusqueda: 'Vellereophyton',
            selecciona: '//a[@class="cdx-menu-item__content"]',
            imagenSeleccionada: '//img[@class="mw-file-element"]'
        }
    }

    apartadoMockeo(){
        I.waitForElement(this.fields.barraDeBusqueda, 3)
        I.wait(2)
        I.fillField(this.fields.barraDeBusqueda, this.fields.articuloBusqueda)
        I.wait(2)
        I.click(this.fields.selecciona)
    }

    verificarCambio(){
        I.click(this.fields.imagenSeleccionada)
        I.wait(2)
    }
}
module.exports = new mockeo();