const baseUrl =  Cypress.env("BASE_URL");

describe("Logout User", () => {

    beforeEach(() => {
        cy.visit(baseUrl)
    })

    it("Login User with correct email and password then log him out", () => {
        // Verify that the current pathname is the one of the home page
        cy.location("pathname").should("eq","/")
        // Click on the login option
        cy.getByHref("/login").click()
        // Ensure the login form is present
        cy.getByClass("login-form").should("exist")
        cy.fixture("valid_user").then((user) => {
            // Fill out the login form
            cy.getByData("login-email").type(user.email)
            cy.getByData("login-password").type(user.password)
            // Click the login button
            cy.getByData("login-button").click()
            // Verify that the user's name is displayed in the menu
            cy.get("a").contains(`Logged in as ${user.name}`).should("exist")
        })
        // CLick on the logout button
        cy.getByHref("/logout").click()
        // Verify that user is navigated to login page
        cy.location("pathname").should("eq","/login")
    })

})