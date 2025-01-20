describe("Verify  logged in user", () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com')
    })

    it("logs in use and verify", () => {
        cy.location("pathname").should("eq","/")
        cy.getByHref("/login").click()
        cy.getByClass("login-form").should("exist")
        cy.getByData("login-email").type("ewilde@gmail.com")
        cy.getByData("login-password").type("Mypassword")
        cy.getByData("login-button").should("exist").click()
        cy.get("a").contains("Logged in as Daryl Nfoye").should("exist")
    })

})