describe("Verificar entrar a los detalles de un producto", ()=>{
    let globalConfigData;
    let loginData;
    let productDetails;

    before(()=>{
        cy.fixture("login").then((data)=>{
            loginData=data;
        });
        cy.fixture("globalConfig").then((data)=>{
            globalConfigData=data;
        });
        cy.fixture("productDetails").then((data)=>{
            productDetails=data;
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

    it("Entrar a detalles del producto por medio de su imagen como boton",()=>{
        cy.get('[data-test="item-4-img-link"]').click();

        cy.get('[data-test="inventory-item-name"]').should('contain', productDetails.firstProductDetails.title);
        cy.get('[data-test="inventory-item-desc"]').should('contain', productDetails.firstProductDetails.description);
        cy.get('[data-test="inventory-item-price"]').should('contain', productDetails.firstProductDetails.price);

    })


    it("Entrar a detalles del producto por medio de su título",()=>{
        cy.get('[data-test="item-4-title-link"]').click();

        cy.get('[data-test="inventory-item-name"]').should('contain', productDetails.firstProductDetails.title);
        cy.get('[data-test="inventory-item-desc"]').should('contain', productDetails.firstProductDetails.description);
        cy.get('[data-test="inventory-item-price"]').should('contain', productDetails.firstProductDetails.price);
    })

})