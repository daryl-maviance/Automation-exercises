const baseUrl =  Cypress.env("BASE_URL");

describe('Registers  User', () => {

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  // Test case for signing up a new user
  it('Registers a new User', () => {
     // Navigate to the login page
    cy.getByHref("/login").click()
    // Verify the signup form exists
    cy.get(`[action='/signup']`).should("exist")

    cy.fixture("new_user").then((user) => {
      // Fill out the signup form
      cy.getByData("signup-name").type(user.name)
      cy.getByData("signup-email").type(user.email)
      cy.getByData("signup-button").click()
      // Verify that the follow up additional details form appears
      cy.get(`[action='/signup']`).should("exist")
      // Fill out additional details
      cy.getByValue("Mr").click()
      cy.getByData("password").type(user.password)
      cy.getByData("days").type(user.day)
      cy.getByData("months").type(user.month)
      cy.getByData("years").type(user.year)
      cy.getById("newsletter").click()
      cy.getById("optin").click()
      cy.getByData("first_name").type(user.first_name)
      cy.getByData("last_name").type(user.last_name)
      cy.getByData("company").type(user.company)
      cy.getByData("address").type(user.address)
      cy.getByData("address2").type(user.address2)
      cy.getByData("country").select(user.country)
      cy.getByData("state").type(user.state)
      cy.getByData("city").type(user.city)
      cy.getByData("zipcode").type(user.zipcode)
      cy.getByData("mobile_number").type(user.mobile_number)
    })
    // Submit the signup form
    cy.getByData("create-account").click()
    // Verify the continue button exists and click it
    cy.getByData("continue-button").should("exist").click()
    // CLick on the delete account button
    cy.getByHref("/delete_account").click()
    // Verify the continue button exists and click it
    cy.getByData("continue-button").should("exist").click()
  })

})