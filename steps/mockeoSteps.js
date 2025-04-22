const { and } = require("ajv/dist/compile/codegen");
const mockeo = require("../pages/Mockeo");
const { log } = require("neo-async");

const {I} = inject();

Given('Estoy en la pagina princial', () => {
    mockeo.inicial()
})

When('Me posiciono en campos a mockear', () => {
    mockeo.apartadoMockeo()
})

Then('Veo los datos mokeados', () => {
    mockeo.verificarCambio()
})