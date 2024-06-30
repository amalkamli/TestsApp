const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080/#/',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // Implémentation des hooks ou plugins si nécessaire
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Chemin vers les tests E2E
  },
});
