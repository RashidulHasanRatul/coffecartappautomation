export const COFFEE_TYPES = {
    MOCHA: 'Mocha',
    AMERICANO: 'Americano',
    ESPRESSO: 'Espresso' 
}

export const SELECTORS = {
    // Coffee Items
    MOCHA: '[data-cy="Mocha"]',
    AMERICANO: '[data-cy="Americano"]',
    ESPRESSO: '[data-cy="Espresso"]',
    
    // Cart and Checkout
    CART_LIST: 'ul[data-v-bb7b5941=""]',
    CHECKOUT_BUTTON: '[data-test="checkout"]',
    TOTAL_BUTTON: '[aria-label="Proceed to checkout"]',
    
    // Special Offer
    ACCEPT_OFFER: '.yes',
    
    // Payment Form
    NAME_INPUT: '#name',
    EMAIL_INPUT: '#email',
    PROMOTION_CHECKBOX: '#promotion',
    SUBMIT_PAYMENT: '#submit-payment',
    
    // Confirmation
    SNACKBAR: '.snackbar'
}
