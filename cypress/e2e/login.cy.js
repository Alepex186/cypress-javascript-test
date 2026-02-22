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


        // Selector: campo de entrada del nombre de usuario en la página de login
        cy.get("[data-test='username']").type(loginData.users.invalidUsername);
        // Selector: campo de entrada de la contraseña en la página de login
        cy.get("[data-test='password']").type(loginData.passwords.validPassword);

        // Selector: botón para iniciar sesión
        cy.get("[data-test='login-button']").click();

        // Selector: contenedor del mensaje de error de login
        cy.get("[data-test='error']")
            .should('be.visible')
            .and('contain', loginData.messages.invalidCredentials.errorMessage);
    })


    it('Debe mostrar un error al intentar iniciar sesión con contraseña inválida', () => {


        // Selector: campo de entrada del nombre de usuario en la página de login
        cy.get("[data-test='username']").type(loginData.users.standardUsername);
        // Selector: campo de entrada de la contraseña en la página de login
        cy.get("[data-test='password']").type(loginData.passwords.invalidPassword);

        // Selector: botón para iniciar sesión
        cy.get("[data-test='login-button']").click();

        // Selector: contenedor del mensaje de error de login
        cy.get("[data-test='error']")
            .should('be.visible')
            .and('contain', loginData.messages.invalidCredentials.errorMessage);
    })

    it('Debe mostrar un error al intentar iniciar sesión sin ingresar credenciales', () => {

        // Selector: botón para iniciar sesión
        cy.get("[data-test='login-button']").click();

        // Selector: contenedor del mensaje de error de login
        cy.get("[data-test='error']")
            .should('be.visible')
            .and('contain', loginData.messages.usernameIsRequired);
    })

    it('Debe mostrar un error al intentar iniciar sesión sin ingresar contraseña', () => {

        // Selector: campo de entrada del nombre de usuario en la página de login
        cy.get("[data-test='username']").type(loginData.users.standardUsername);


        // Selector: botón para iniciar sesión
        cy.get("[data-test='login-button']").click();

        // Selector: contenedor del mensaje de error de login
        cy.get("[data-test='error']")
            .should('be.visible')
            .and('contain', loginData.messages.passwordIsRequired);
    })

    it('Debe mostrar un error al intentar iniciar sesión sin ingresar usuario', () => {

        // Selector: campo de entrada de la contraseña en la página de login
        cy.get("[data-test='password']").type(loginData.passwords.validPassword);

        // Selector: botón para iniciar sesión
        cy.get("[data-test='login-button']").click();

        // Selector: contenedor del mensaje de error de login
        cy.get("[data-test='error']")
            .should('be.visible')
            .and('contain', loginData.messages.usernameIsRequired);
    })


    it('Debe mostrar un error al intentar iniciar sesión con usuario bloqueado', () => {

        // Selector: campo de entrada del nombre de usuario en la página de login
        cy.get("[data-test='username']").type(loginData.users.lockedOutUser);
        // Selector: campo de entrada de la contraseña en la página de login
        cy.get("[data-test='password']").type(loginData.passwords.validPassword);

        // Selector: botón para iniciar sesión
        cy.get("[data-test='login-button']").click();

        // Selector: contenedor del mensaje de error de login
        cy.get("[data-test='error']")
            .should('be.visible')
            .and('contain', loginData.messages.usernameLocked);
    })





    it('Debe iniciar sesión correctamente y mostrar el título Swag Labs', () => {

        // Selector: campo de entrada del nombre de usuario en la página de login
        cy.get("[data-test='username']").type(loginData.users.standardUsername);
        // Selector: campo de entrada de la contraseña en la página de login
        cy.get("[data-test='password']").type(loginData.passwords.validPassword);

        // Selector: botón para iniciar sesión
        cy.get("[data-test='login-button']").click();

        // Selector: logo de la aplicación en la barra superior (valida login exitoso)
        cy.get("div.app_logo")
            .should('be.visible')
            .and('contain',loginData.messages.expected.title);
    })

})