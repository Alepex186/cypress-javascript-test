describe('Pruebas de Inicio de Sesión', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    })

    it('Debe mostrar un error al intentar iniciar sesión con nombre de usuario inválido', () => {

        const invalidUsername = "usuario_no_registrado";
        const validPassword = "secret_sauce";
        const errorMessage = "Epic sadface: Username and password do not match any user in this service";

        cy.get("[data-test='username']").type(invalidUsername);
        cy.get("[data-test='password']").type(validPassword);

        cy.get("[data-test='login-button']").click();

        cy.get("[data-test='error']")
            .should('be.visible')
            .and('contain', errorMessage);
    })


    it('Debe mostrar el titulo Swag Labs', () => {

        const validUsername = "standard_user";
        const invalidPassword = "contraseña_invalida";
        const errorMessage = "Epic sadface: Username and password do not match any user in this service";

        cy.get("[data-test='username']").type(validUsername);
        cy.get("[data-test='password']").type(invalidPassword);

        cy.get("[data-test='login-button']").click();

        cy.get("[data-test='error']")
            .should('be.visible')
            .and('contain', errorMessage);
    })

    it('Debe mostrar el título Swag Labs', () => {

        const validUsername = "standard_user";
        const validPassword = "secret_sauce";
        const title = "Swag Labs";

        cy.get("[data-test='username']").type(validUsername);
        cy.get("[data-test='password']").type(validPassword);

        cy.get("[data-test='login-button']").click();

        cy.get("div.app_logo")
            .should('be.visible')
            .and('contain', title);
    })

})