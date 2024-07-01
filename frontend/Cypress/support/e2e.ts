// Import commands.js using ES2015 syntax:
import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  