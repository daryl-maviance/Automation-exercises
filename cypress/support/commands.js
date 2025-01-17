// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


Cypress.Commands.add("getByHref", (href) =>{
    return cy.get(`[href='${href}']`)
})

Cypress.Commands.add("getByData", (data) => 
{
        return cy.get(`[data-qa='${data}']`)
})

Cypress.Commands.add("getById", (id) => {
    return  cy.get(`[id='${id}']`)
})

Cypress.Commands.add("getByValue", (value) => {
    return cy.get(`[value='${value}']`)
})



//*1.
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })