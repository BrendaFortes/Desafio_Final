Feature: Inicio de sesion

Scenario: Ingresar información de incio de sesion
    Given Estoy en la pagina principal
    When Voy a la pagina de log in
    And Escribo el nombre de usuario y contraseña
    Then Veo el boton de log in 