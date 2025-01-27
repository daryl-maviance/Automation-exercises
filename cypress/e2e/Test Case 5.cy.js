const baseUrl = Cypress.env("BASE_URL");
const selectors = {  
  loginLink: "[href='/login']",
  signupForm: `[action='/signup']`,
  signupName: "[data-qa='signup-name']",
  signupEmail: "[data-qa='signup-email']",
  signupButton: "[data-qa='signup-button']",
  erorMessge: "[data-qa='continue-button']",
};

describe('Registers User', () => {

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  // Test case for signing up a new user
  it('Registers a new User', () => {
    // Navigate to the login page
    cy.get(selectors.loginLink).click()
    // Verify the signup form exists
    cy.url().should('include', '/login');
    cy.get(selectors.signupForm).should("exist")

    cy.fixture("valid_user").then((user) => {
      // Fill out the signup form
      cy.get(selectors.signupName).type(user.name)
      cy.get(selectors.signupEmail).type(user.email)
      cy.get(selectors.signupButton).click()
    })
    // Verify the continue email already exists message exists
    cy.get(selectors.signupForm).find("p").contains("Email Address already exist!").should("exist")
    // Click on the delete account button
  })

})