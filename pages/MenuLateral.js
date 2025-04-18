const {I} = inject();

class Busqueda {
    constructor() {
        //Declaración de variables
        this.fields = {
            menuLateral: '[id="vector-main-menu-dropdown-checkbox"]',
            opcionMenu: '//span[text()="Páginas especiales"]',
            paginaOpcion: '[id="firstHeading"]'
        }
    }

    seleccionoMenu(){
        I.waitForElement(this.fields.menuLateral, 3)
        I.wait(2)
        I.click(this.fields.menuLateral)
        I.wait(2)
    }

    seleccionoOpcion(){
        I.waitForElement(this.fields.opcionMenu, 3)
        I.wait(2)
        I.click(this.fields.opcionMenu)
    }

    veoOpcion(){
        I.seeElement(this.fields.paginaOpcion)
        I.wait(2)
    }
}
module.exports = new Busqueda();