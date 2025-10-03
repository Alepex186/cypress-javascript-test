describe("Verificar entrar a los detalles de un producto", ()=>{

    beforeEach(()=>{
        const validUsername = "standard_user";
        const validPassword = "secret_sauce";
        const title = "Swag Labs";

        cy.visit("https://www.saucedemo.com/")

        cy.get("[data-test='username']").type(validUsername);
        cy.get("[data-test='password']").type(validPassword);
        cy.get("[data-test='login-button']").click();



        cy.get("div.app_logo")
            .should('be.visible')
            .and('contain', title);
    })

    it("Entrar a detalles del producto por medio de su imagen como boton",()=>{
        const firstProductTitle="Sauce Labs Backpack"
        const firstProductDescription="carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.";
        const firstProductPrice="$29.99"

        cy.get('[data-test="item-4-img-link"]').click()
        cy.contains(firstProductTitle);
        cy.contains(firstProductDescription);
        cy.contains(firstProductPrice);
    })


    it("Entrar a detalles del producto por medio de su título",()=>{
        const firstProductTitle="Sauce Labs Backpack"
        const firstProductDescription="carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.";
        const firstProductPrice="$29.99"

        cy.get('[data-test="item-4-title-link"]').click()
        cy.contains(firstProductTitle);
        cy.contains(firstProductDescription);
        cy.contains(firstProductPrice);
    })

})