describe('Pruebas del carrito de compras', () => {
    let loginData;
    let globalConfigData;

    before(() => {
        cy.fixture("login").then((data) => loginData = data);
        cy.fixture("globalConfig").then((data) => globalConfigData = data);
    });

    beforeEach(() => {
        cy.visit(globalConfigData.page_url);
        cy.get("[data-test='username']").type(loginData.users.standardUsername);
        cy.get("[data-test='password']").type(loginData.passwords.validPassword);
        cy.get("[data-test='login-button']").click();
    });

    it('Eliminar producto del carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('.cart_item').should('not.exist');
    });
});
