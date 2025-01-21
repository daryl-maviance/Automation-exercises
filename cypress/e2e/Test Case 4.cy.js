const baseUrl = Cypress.env("BASE_URL");
const selectors = {
    loginLink: "[href='/login']",
    loginForm: `[action='/login']`,
    loginEmail: "[data-qa='login-email']",
    loginPassword: "[data-qa='login-password']",
    loginButton: "[data-qa='login-button']",
    logoutLink: "[href='/logout']",
};

describe("Logout User", () => {

    beforeEach(() => {
        cy.visit(baseUrl)
    })

    it("Login User with correct email and password then log him out", () => {
        // Verify that the current pathname is the one of the home page
        cy.location("pathname").should("eq", "/")
        // Click on the login option
        cy.get(selectors.loginLink).click()
        cy.url().should('include', '/login');
        // Ensure the login form is present
        cy.get(selectors.loginForm).should("exist")
        cy.fixture("valid_user").then((user) => {
            // Fill out the login form
            cy.get(selectors.loginEmail).type(user.email)
            cy.get(selectors.loginPassword).type(user.password)
            // Click the login button
            cy.get(selectors.loginButton).click()
            // Verify that the user's name is displayed in the menu
            cy.get("a").contains(`Logged in as ${user.name}`).should("exist")
        })
        // Click on the logout button
        cy.get(selectors.logoutLink).click()
        // Verify that user is navigated to login page
        cy.location("pathname").should("eq", "/login")
    })

})