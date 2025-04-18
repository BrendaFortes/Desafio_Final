Feature: Busqueda

Scenario: Consulta de un articulo entre pagina
    Given Estoy en la pagina principal
    When Selecciono barra de busqueda y busco articulo con mi nombre
    And Veo la lista de articulos y selecciono ver mas busquedas
    And Seleciono el último articulo de la página
    Then Veo que se presente el articulo