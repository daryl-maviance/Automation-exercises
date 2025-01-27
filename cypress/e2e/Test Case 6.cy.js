import 'cypress-file-upload';

const baseUrl = Cypress.env("BASE_URL");
const selectors = {
    contactUsLink: "[href='/contact_us']",
    submitButton: "[data-qa='submit-button']",
    nameField: "[data-qa='name']",
    emailField:"[data-qa='email']",
    subjectField:"[data-qa='subject']",
    messageField:"[data-qa='message']",
    fileField:"[name='upload_file']",
    successMessage:"[class='status alert alert-success']",
    homeButton:"[href='/']",
    h2:"h2",
}

describe("Contact Us Form", () => {
    beforeEach(()=>{
        cy.visit(baseUrl)
    })

    it("successfully fill out and submit the cointact form", ()=>{
        cy.location("pathname").should("eq", "/")
        cy.get(selectors.contactUsLink).click()
        cy.get(selectors.h2).should("contain", "Get In Touch")
        cy.fixture("contact_us").then((user)=>{
            cy.get(selectors.nameField).type(user.name)
            cy.get(selectors.emailField).type(user.email)
            cy.get(selectors.subjectField).type(user.subject)
            cy.get(selectors.messageField).type(user.message)
            cy.get(selectors.fileField).attachFile(user.filePath)
        })
        cy.get(selectors.submitButton).click()
        cy.get(selectors.successMessage).should("be.visible").should("contain","Success! Your details have been submitted successfully.")
        cy.get(selectors.homeButton).eq(0).click()
        cy.location("pathname").should("eq", "/")
    })
})