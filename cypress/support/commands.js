// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to wait for network requests to complete
Cypress.Commands.add('waitForNetworkIdle', (timeout = 1000) => {
    cy.wait(timeout)
    cy.window().then(win => {
        if (win.pendingXHRs > 0) {
            cy.waitForNetworkIdle(timeout)
        }
    })
})

// Custom command to check cart item count
Cypress.Commands.add('verifyCartItemCount', (expectedCount) => {
    cy.get('[data-cy="cart"]')
        .find('li')
        .should('have.length', expectedCount)
        .then($items => {
            cy.log(`Cart has ${$items.length} items`)
        })
})

// Custom command to check if element exists
Cypress.Commands.add('elementExists', (dataCyValue) => {
    cy.get(`[data-cy="${dataCyValue}"]`).should('exist')
})

// Custom command to get element by data-cy
Cypress.Commands.add('getByCy', (value) => {
    return cy.get(`[data-cy="${value}"]`)
})

// Custom command to get element by data-cy contains
Cypress.Commands.add('getByCyLike', (value) => {
    return cy.get(`[data-cy*="${value}"]`)
})
