const { and } = require("ajv/dist/compile/codegen");
const Busqueda = require("../pages/Busqueda");
const { log } = require("neo-async");

const {I} = inject();

Given('Estoy en la pagina principal', () => {
    I.amOnPage('/')
})

When('Selecciono barra de busqueda y busco articulo con mi nombre', () => {
    Busqueda.realizaBusqueda()
})

When('Veo la lista de articulos y selecciono ver mas busquedas', () => {
    for (var i = 0; i < 3; i++) {
        Busqueda.avanzoPagina()
    }
})

When('Seleciono el último articulo de la página', () => {
    Busqueda.seleccionoArticulo()
})

Then('Veo que se presente el articulo', () => {
    Busqueda.verificoArticulo()
})