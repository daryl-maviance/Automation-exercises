const baseUrl =  Cypress.env("BASE_URL");

describe("Login User with incorrect email and password", () => {

    beforeEach(() => {
        cy.visit(baseUrl)
    })

    it("verifies that someone with invalid credentials can't log in", () => {
        // Verify that the current pathname is the one of the home page
        cy.location("pathname").should("eq","/")
        // Click on the login option
        cy.getByHref("/login").click()
        // Ensure the login form is present
        
        cy.getByClass("login-form").should("exist")
        cy.fixture("invalid_user").then((user) => {
            // Fill out the login form
            cy.getByData("login-email").type(user.email)
            cy.getByData("login-password").type(user.password)
        })
        // Click the login button
        cy.getByData("login-button").click()
        cy.getByClass("login-form").find("p").contains("Your email or password is incorrect!").should("exist")
    })

})