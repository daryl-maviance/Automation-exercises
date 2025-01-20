describe('Automation exercises login and sign up', () => {

  beforeEach(() => {
      cy.visit('https://automationexercise.com')
  })

  // Test case for signing up a new user
  it.only('signs up a new user', () => {
    // Navigate to the login page
    cy.getByHref("/login").click()
    // Verify the signup form exists
    cy.get(`[action='/signup']`).should("exist")
    // Fill out the signup form
    cy.getByData("signup-name").type("Daryl  Nfoye")
    cy.getByData("signup-email").type("ewilde@gmail.com")
    cy.getByData("signup-button").click()
    // Verify that the follow up additional details form appears
    cy.get(`[action='/signup']`).should("exist")
    // Fill out additional details
    cy.getByValue("Mr").click()
    cy.getByData("password").type("Mypassword")
    cy.getByData("days").type("01")
    cy.getByData("months").type("03")
    cy.getByData("years").type("2004")
    cy.getById("newsletter").click()
    cy.getById("optin").click()
    cy.getByData("first_name").type("Daryl")
    cy.getByData("last_name").type("Nfoye")
    cy.getByData("company").type("Maviance")
    cy.getByData("address").type("Lendi")
    cy.getByData("address2").type("Bonanjo")
    cy.getByData("country").select("Canada")
    cy.getByData("state").type("Cameroon")
    cy.getByData("city").type("Douala")
    cy.getByData("zipcode").type("00237")
    cy.getByData("mobile_number").type("699255753")
    // Submit the signup form
    cy.getByData("create-account").click()
    // Verify the continue button exists and click it
    cy.getByData("continue-button").should("exist").click()
  })

  // Test case for logging in a user and deleting the account
  it("logs in a user and deletes his account", () => {
    // Navigate to the login page
    cy.getByHref("/login").click()
    // Verify the login form exists
    cy.get(`[action='/login']`).should("exist")
    // Fill out the login form
    cy.getByData("login-email").type("nfoyedewilde@gmail.com")
    cy.getByData("login-password").type("Mypassword")
    // Submit the login form
    cy.getByData("login-button").should("exist").click()
    // CLick on the delete account button
    cy.getByHref("/delete_account").click()
    // Verify the continue button exists and click it
    cy.getByData("continue-button").should("exist").click()
  })

})
