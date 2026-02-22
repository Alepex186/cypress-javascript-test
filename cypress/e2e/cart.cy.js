describe('Pruebas del carrito de compras', () => {
    let loginData;
    let globalConfigData;

    before(() => {
        cy.fixture("login").then((data) => loginData = data);
        cy.fixture("globalConfig").then((data) => globalConfigData = data);
    });

    beforeEach(() => {
        cy.visit(globalConfigData.page_url);
        // Selector: campo de entrada del nombre de usuario en la página de login
        cy.get("[data-test='username']").type(loginData.users.standardUsername);
        // Selector: campo de entrada de la contraseña en la página de login
        cy.get("[data-test='password']").type(loginData.passwords.validPassword);
        // Selector: botón para iniciar sesión
        cy.get("[data-test='login-button']").click();
    });

    it('Eliminar producto del carrito', () => {
        // Selector: botón para agregar el producto "Sauce Labs Backpack" al carrito
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        // Selector: ícono/enlace del carrito de compras en la barra superior
        cy.get('[data-test="shopping-cart-link"]').click();
        // Selector: botón para remover el producto "Sauce Labs Backpack" del carrito
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        // Selector: elemento de producto dentro del carrito (verifica que ya no exista)
        cy.get('.cart_item').should('not.exist');
    });
});
