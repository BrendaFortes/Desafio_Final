const { and } = require("ajv/dist/compile/codegen");
const LoginWiki = require("../pages/Login");
const { log } = require("neo-async");

const {I} = inject();

Given('Estoy en la pagina principal', () => {
    I.amOnPage('/')
})

When('Voy a la pagina de log in', () => {
    LoginWiki.clickLoginButton()
})

When('Escribo el nombre de usuario y contraseña', () => {
    LoginWiki.ingresarCredenciales()
})

Then('Veo el boton de log in', () => {
    LoginWiki.verificarLoginButton()
})