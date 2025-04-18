Feature: Cambiar apariencia

Scenario: Seleccionar todas las opciones de apariencia
    Given Estoy en la pagina principal
    When Valido apartado de Apariencia
    And Cambio todas las opciones presentes
    Then Veo el cambio desde la portada