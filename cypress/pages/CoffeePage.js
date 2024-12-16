import { SELECTORS } from '../constants/selectors'

class CoffeePage {
    visit() {
        cy.visit('/')
    }

    addMochaToCoffee() {
        cy.get(SELECTORS.MOCHA)
            .should('be.visible')
            .click()
    }

    addAmericanoToCoffee() {
        cy.get(SELECTORS.AMERICANO)
            .should('be.visible')
            .click()
    }

    addEspressoToCoffee() {
        cy.get(SELECTORS.ESPRESSO)
            .should('be.visible')
            .click()
    }

    hoverOverTotal() {
        cy.get(SELECTORS.TOTAL_BUTTON)
            .trigger('mouseover')
    }

    verifyCartItemCount(count) {
        cy.get(SELECTORS.CART_LIST)
            .should('contain', count)
    }

    acceptSpecialOffer() {
        cy.get(SELECTORS.ACCEPT_OFFER)
            .click()
    }

    proceedToCheckout() {
        cy.get(SELECTORS.CHECKOUT_BUTTON)
            .click()
    }

    generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 8)
        return `${randomString}@example.com`
    }

    fillPaymentForm(name) {
        const email = this.generateRandomEmail()
        cy.get(SELECTORS.NAME_INPUT)
            .type(name)
        cy.get(SELECTORS.EMAIL_INPUT)
            .type(email)
        cy.get(SELECTORS.PROMOTION_CHECKBOX)
            .check()
    }

    submitPayment() {
        cy.get(SELECTORS.SUBMIT_PAYMENT)
            .click()
    }

    verifyOrderConfirmation() {
        cy.get(SELECTORS.SNACKBAR)
            .should('contain', 'Thanks for your purchase. Please check your email for payment.')
    }
}

export default new CoffeePage()
