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

    it("Entrar a detalles del producto por medio de su imagen como boton",()=>{
        // Selector: imagen del producto con ID 4 que actúa como enlace a sus detalles
        cy.get('[data-test="item-4-img-link"]').click();

        // Selector: nombre del producto en la página de detalles
        cy.get('[data-test="inventory-item-name"]').should('contain', productDetails.firstProductDetails.title);
        // Selector: descripción del producto en la página de detalles
        cy.get('[data-test="inventory-item-desc"]').should('contain', productDetails.firstProductDetails.description);
        // Selector: precio del producto en la página de detalles
        cy.get('[data-test="inventory-item-price"]').should('contain', productDetails.firstProductDetails.price);

    })


    it("Entrar a detalles del producto por medio de su título",()=>{
        // Selector: título/nombre del producto con ID 4 que actúa como enlace a sus detalles
        cy.get('[data-test="item-4-title-link"]').click();

        // Selector: nombre del producto en la página de detalles
        cy.get('[data-test="inventory-item-name"]').should('contain', productDetails.firstProductDetails.title);
        // Selector: descripción del producto en la página de detalles
        cy.get('[data-test="inventory-item-desc"]').should('contain', productDetails.firstProductDetails.description);
        // Selector: precio del producto en la página de detalles
        cy.get('[data-test="inventory-item-price"]').should('contain', productDetails.firstProductDetails.price);
    })

})