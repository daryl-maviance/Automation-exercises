const baseUrl = Cypress.env("BASE_URL");
const selectors = {  
  loginLink: "[href='/login']",
  signupForm: `[action='/signup']`,
  signupName: "[data-cy='signup-name']",
  signupEmail: "[data-cy='signup-email']",
  signupButton: "[data-cy='signup-button']",
  additionalDetailsForm: `[action='/signup']`,
  createAccountButton: "[data-cy='create-account']",
  continueButton: "[data-cy='continue-button']",
  deleteAccountLink: "[href='/delete_account']",
  titleMr: "[value='Mr']",
  password: "[data-cy='password']",
  days: "[data-cy='days']",
  months: "[data-cy='months']",
  years: "[data-cy='years']",
  newsletter: "#newsletter",
  optin: "#optin",
  firstName: "[data-cy='first_name']",
  lastName: "[data-cy='last_name']",
  company: "[data-cy='company']",
  address: "[data-cy='address']",
  address2: "[data-cy='address2']",
  country: "[data-cy='country']",
  state: "[data-cy='state']",
  city: "[data-cy='city']",
  zipcode: "[data-cy='zipcode']",
  mobileNumber: "[data-cy='mobile_number']"
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
    cy.get(selectors.signupForm).should("exist")

    cy.fixture("new_user").then((user) => {
      // Fill out the signup form
      cy.get(selectors.signupName).type(user.name)
      cy.get(selectors.signupEmail).type(user.email)
      cy.get(selectors.signupButton).click()
      // Verify that the follow up additional details form appears
      cy.get(selectors.signupForm).should("exist")
      // Fill out additional details
      cy.get(selectors.titleMr).click()
      cy.get(selectors.password).type(user.password)
      cy.get(selectors.days).type(user.day)
      cy.get(selectors.months).type(user.month)
      cy.get(selectors.years).type(user.year)
      cy.get(selectors.newsletter).click()
      cy.get(selectors.optin).click()
      cy.get(selectors.firstName).type(user.first_name)
      cy.get(selectors.lastName).type(user.last_name)
      cy.get(selectors.company).type(user.company)
      cy.get(selectors.address).type(user.address)
      cy.get(selectors.address2).type(user.address2)
      cy.get(selectors.country).select(user.country)
      cy.get(selectors.state).type(user.state)
      cy.get(selectors.city).type(user.city)
      cy.get(selectors.zipcode).type(user.zipcode)
      cy.get(selectors.mobileNumber).type(user.mobile_number)
    })
    // Submit the signup form
    cy.get(selectors.createAccountButton).click()
    // Verify the continue button exists and click it
    cy.get(selectors.continueButton).should("exist").click()
    // Click on the delete account button
    cy.get(selectors.deleteAccountLink).click()
    // Verify the continue button exists and click it
    cy.get(selectors.continueButton).should("exist").click()
  })

})