Feature: Menu lateral

Scenario: Navego en opciones de menu lateral
    Given Estoy en la pagina principal
    When Selecciono el menu lateral
    And selecciono una opcion del menu lateral
    Then Veo que se presente el modulo de opcion