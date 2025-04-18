const { and } = require("ajv/dist/compile/codegen");
const menulateral = require("../pages/MenuLateral");
const { log } = require("neo-async");

const {I} = inject();

Given('Estoy en la pagina principal', () => {
    I.amOnPage('/')
})

When('Selecciono el menu lateral', () => {
    menulateral.seleccionoMenu()
})

When('selecciono una opcion del menu lateral', () => {
    menulateral.seleccionoOpcion()
})

Then('Veo que se presente el modulo de opcion', () => {
    menulateral.veoOpcion()
})