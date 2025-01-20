describe("Login User with incorrect email and password", () => {
    it("verifies that someone with invalid credentials can't log in", () => {
        cy.visit('https://automationexercise.com')
        // Verify that the current pathname is the one of the home page
        cy.location("pathname").should("eq","/")
        // Click on the login option
        cy.getByHref("/login").click()
        // Ensure the login form is present
        cy.getByClass("login-form").should("exist")
        // Fill out the login form
        cy.getByData("login-email").type("Invalid@gmail.com")
        cy.getByData("login-password").type("fake")
        // Click the login button
        cy.getByData("login-button").click()
        cy.getByClass("login-form").find("p").contains("Your email or password is incorrect!").should("exist")
    })

})