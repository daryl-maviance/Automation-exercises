describe('Automation exercises login and sign up', () => {

  beforeEach(() => {
      cy.visit('https://automationexercise.com')
  })

  it('signs up a new user', () => {
    cy.getByHref("/login").click()
    cy.get(`[action='/signup']`).should("exist")
    cy.getByData("signup-name").type("Daryl  Nfoye")
    cy.getByData("signup-email").type("ewilde@gmail.com")
    cy.getByData("signup-button").click()
    cy.get(`[action='/signup']`).should("exist")
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
    cy.getByData("create-account").click()
    cy.getByData("continue-button").should("exist").click()
  })

  it("logs in a user and deletes his account", () => {
    cy.getByHref("/login").click()
    cy.get(`[action='/login']`).should("exist")
    cy.getByData("login-email").type("nfoyedewilde@gmail.com")
    cy.getByData("login-password").type("Mypassword")
    cy.getByData("login-button").should("exist").click()
    cy.getByHref("/delete_account").click()
    cy.getByData("continue-button").should("exist").click()
  })

})

