const { and } = require("ajv/dist/compile/codegen");
const CambiarApariencia = require("../pages/CambiarApariencia");
const { log } = require("neo-async");

const {I} = inject();

Given('Estoy en la pagina principal', () => {
    I.amOnPage('/')
})

When('Valido apartado de Apariencia', () => {
    CambiarApariencia.encuentraApariencia()
})

When('Cambio todas las opciones presentes', () => {
    CambiarApariencia.actualizaApariencia()
})

Then('Veo el cambio desde la portada', () => {
    CambiarApariencia.verificarCambioApariencia()
})