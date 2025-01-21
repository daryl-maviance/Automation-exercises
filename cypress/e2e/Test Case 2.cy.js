const baseUrl =  Cypress.env("BASE_URL");

const paths = {
  login: '/login',
  deleteAccount: '/delete_account',
};

describe("Login User with correct email and password", () => {

    beforeEach(() => {
        cy.visit(baseUrl)
    })

    it("logs in the user and verifies that his name is displayed in the Menu", () => {
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
        })
        // Click the login button
        cy.getByData("login-button").click()
        // Verify that the user's name is displayed in the menu
        cy.get("a").contains("Logged in as Daryl Nfoye").should("exist")
        // CLick on the delete account button
        cy.getByHref("/delete_account").click()
        // Verify the continue button exists and click it
        cy.getByData("account-deleted").should("exist")
    })

})