const baseUrl = Cypress.env("BASE_URL");
const selectors = {
    loginLink: "[href='/login']",
    loginForm: `[action='/login']`,
    loginEmail: "[data-qa='login-email']",
    loginPassword: "[data-qa='login-password']",
    loginButton: "[data-qa='login-button']",
};

describe("Login User with incorrect email and password", () => {

    beforeEach(() => {
        cy.visit(baseUrl)
    })

    it("verifies that someone with invalid credentials can't log in", () => {
        // Verify that the current pathname is the one of the home page
        cy.location("pathname").should("eq", "/")
        // Click on the login option
        cy.get(selectors.loginLink).click()
        cy.url().should('include', '/login');
        // Ensure the login form is present
        cy.get(selectors.loginForm).should("exist")
        cy.fixture("invalid_user").then((user) => {
            // Fill out the login form
            cy.get(selectors.loginEmail).type(user.email)
            cy.get(selectors.loginPassword).type(user.password)
        })
        // Click the login button
        cy.get(selectors.loginButton).click()
        cy.get(selectors.loginForm).find("p").contains("Your email or password is incorrect!").should("exist")
    })

})
