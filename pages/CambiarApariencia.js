const {I} = inject();

class CambiarApariencia {
    constructor() {
        //Declaración de variables
        this.fields = {
            apariencia: '//div[text()="Apariencia"]',
            cambioText: '[id="skin-client-pref-vector-feature-custom-font-size-value-2"]',
            cambioAnchura: '[id="skin-client-pref-vector-feature-limited-width-value-0"]',
            cambioColor: '[id="skin-client-pref-skin-theme-value-night"]',
            validaBienvenidos: '[id="Bienvenidos_a_Wikipedia,"]'
        }
    }

    encuentraApariencia(){
        I.waitForElement(this.fields.apariencia, 3)
    }

    actualizaApariencia(){
        I.wait(2)
        I.click(this.fields.cambioText)
        I.wait(2)
        I.click(this.fields.cambioAnchura)
        I.wait(2)
        I.click(this.fields.cambioColor)
    }

    verificarCambioApariencia(){
        I.wait(3)
        I.seeElement(this.fields.validaBienvenidos)
    }
}
module.exports = new CambiarApariencia();