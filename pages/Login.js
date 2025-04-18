const {I} = inject();

class LoginWiki {
    constructor() {
        //Declaración de variables
        this.fields = {
            acceder: '//a[@data-mw="interface"]//span[text()="Acceder"]',
            campoEmail: '[id="wpName1"]',
            campoPassword: '[id="wpPassword1"]',
            Email: 'correoWiki@testmail.com',
            Password: 'contraseniaWiki',
            accederLogin: '[id="wpLoginAttempt"]'
        }
    }

    //Metodos 
    
    clickLoginButton(){
        I.waitForElement(this.fields.acceder, 5)
        I.click(this.fields.acceder)
    }

    ingresarCredenciales(){
        I.fillField(this.fields.campoEmail, this.fields.Email)
        I.fillField(this.fields.campoPassword, this.fields.Password)
        I.wait(5)
    }

    verificarLoginButton(){
        I.wait(3)
        I.seeElement(this.fields.accederLogin)
    }
}
module.exports = new LoginWiki();