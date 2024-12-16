const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://coffee-cart.app',
    viewportWidth: 1280,
    viewportHeight: 720,
    supportFile : false
  },
})
