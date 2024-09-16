const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout:70000,
  e2e: {
    baseUrl: 'https://automationexercise.com',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
