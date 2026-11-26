const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video: true,
    screenshotOnRunFailure: true,

    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 10000,
    responseTimeout: 30000,

    e2e: {
        baseUrl: "http://127.0.0.1:5500/ripe-theory-3388",

        specPattern: "cypress/e2e/**/*.cy.js",

        supportFile: false,

        testIsolation: true,

        setupNodeEvents(on, config) {
            // Node event configuration
        }
    }
});