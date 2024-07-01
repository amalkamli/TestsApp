const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://localhost:8080/#/",
    "viewportWidth": 1280,
    "viewportHeight": 720,
    "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": true,
      "json": true,
    },
    "supportFile": false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Path to E2E tests
  },
});
