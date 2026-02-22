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

    it('Compra exitosa de un producto',()=>{
        // Selector: botón para agregar el producto "Sauce Labs Backpack" al carrito
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        // Selector: ícono/enlace del carrito de compras en la barra superior
        cy.get('[data-test="shopping-cart-link"]').click();
        // Selector: elemento(s) de producto en el inventario del carrito (verifica que haya al menos 1)
        cy.get('[data-test="inventory-item"]').its('length').should('be.gt', 0);
        // Selector: botón "Checkout" para iniciar el proceso de compra
        cy.get('[data-test="checkout"]').click();
        // Selector: campo de entrada del nombre en el formulario de checkout
        cy.get('[data-test="firstName"]').type(checkOut.firstName);
        // Selector: campo de entrada del apellido en el formulario de checkout
        cy.get('[data-test="lastName"]').type(checkOut.lastName);
        // Selector: campo de entrada del código postal en el formulario de checkout
        cy.get('[data-test="postalCode"]').type(checkOut.zipCode);
        // Selector: botón "Continue" para avanzar al resumen de la compra
        cy.get('[data-test="continue"]').click();
        // Selector: botón "Finish" para confirmar y finalizar la compra
        cy.get('[data-test="finish"]').click();
        // Selector: encabezado de confirmación de compra exitosa
        cy.get('[data-test="complete-header"]').should("contain",checkOut.messages.expected.title)


    })

})    