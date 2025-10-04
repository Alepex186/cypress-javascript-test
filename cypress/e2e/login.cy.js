describe('Pruebas de Inicio de Sesión', () => {
    let loginData;
    let globalConfigData;

    before(()=>{
        cy.fixture("login").then((data)=>{
            loginData=data;
        })
        cy.fixture("globalConfig").then((data)=>{
            globalConfigData=data;
        })

    })

    beforeEach(() => {
        cy.visit(globalConfigData.page_url)
    })

    it('Debe mostrar un error al intentar iniciar sesión con nombre de usuario inválido', () => {


        cy.get("[data-test='username']").type(loginData.users.invalidUsername);
        cy.get("[data-test='password']").type(loginData.passwords.validPassword);

        cy.get("[data-test='login-button']").click();

        cy.get("[data-test='error']")
            .should('be.visible')
            .and('contain', loginData.messages.invalidCredentials.errorMessage);
    })


    it('Debe mostrar el titulo Swag Labs', () => {


        cy.get("[data-test='username']").type(loginData.users.standardUsername);
        cy.get("[data-test='password']").type(loginData.passwords.invalidPassword);

        cy.get("[data-test='login-button']").click();

        cy.get("[data-test='error']")
            .should('be.visible')
            .and('contain', loginData.messages.invalidCredentials.errorMessage);
    })

    it('Debe mostrar el título Swag Labs', () => {

        cy.get("[data-test='username']").type(loginData.users.standardUsername);
        cy.get("[data-test='password']").type(loginData.passwords.validPassword);

        cy.get("[data-test='login-button']").click();

        cy.get("div.app_logo")
            .should('be.visible')
            .and('contain',loginData.messages.expected.title);
    })

})