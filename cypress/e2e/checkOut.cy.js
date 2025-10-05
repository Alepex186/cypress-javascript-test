describe('Pruebas de compra de producto', () => {
    let loginData;
    let globalConfigData;
    let checkOut;


    before(()=>{
        cy.fixture("login").then((data)=>{
            loginData=data;
        })
        cy.fixture("globalConfig").then((data)=>{
            globalConfigData=data;
        })
        cy.fixture("checkOut").then((data)=>{
            checkOut=data;
        })
    })

    beforeEach(()=>{
        cy.visit(globalConfigData.page_url);

        cy.get("[data-test='username']").type(loginData.users.standardUsername);
        cy.get("[data-test='password']").type(loginData.passwords.validPassword);
        cy.get("[data-test='login-button']").click();

        cy.get("div.app_logo")
            .should('be.visible')
            .and('contain',loginData.messages.expected.title);
    })

    it('Compra exitosa de un producto',()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="inventory-item"]').its('length').should('be.gt', 0);
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type(checkOut.firstName);
        cy.get('[data-test="lastName"]').type(checkOut.lastName);
        cy.get('[data-test="postalCode"]').type(checkOut.zipCode);
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="complete-header"]').should("contain",checkOut.messages.expected.title)


    })

})    