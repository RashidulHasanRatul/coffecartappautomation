import CoffeePage from '../pages/CoffeePage'

describe('Coffee Cart Tests', () => {
  before(() => {
    CoffeePage.visit()
  })

  it('Scenario 1: Adding multiple coffees and accepting special offer', () => {
    // 1. Add Mocha to cart
    CoffeePage.addMochaToCoffee()

    // 2. Add Americano to cart
    CoffeePage.addAmericanoToCoffee()

    // 3. Hover over Total and add another Mocha
    CoffeePage.hoverOverTotal()
    CoffeePage.addMochaToCoffee()

    // 4. Add Espresso three times
    CoffeePage.addEspressoToCoffee()
    CoffeePage.addEspressoToCoffee()
    CoffeePage.addEspressoToCoffee()

    // Verify 6 items in cart
    CoffeePage.verifyCartItemCount(6)

    // 5. Accept special offer for extra cup
    CoffeePage.acceptSpecialOffer()

    // Verify 7 items in cart after special offer
    CoffeePage.verifyCartItemCount(7)

    // Complete checkout process
    CoffeePage.proceedToCheckout()
    CoffeePage.fillPaymentForm('Rashidul Hasan')
    CoffeePage.submitPayment()
    CoffeePage.verifyOrderConfirmation()
  })
})
