/// <reference types="cypress" />
// ***********************************************
Cypress.Commands.add('login', (username, password) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8081/login', // Assurez-vous que cette URL est correcte
    failOnStatusCode: false, // Ajouter cette option pour ne pas échouer en cas de statut non 2xx ou 3xx
    body: {
      username: 'test2@test.fr',
      password: 'testtest'
    }
  }).then((resp) => {
    if (resp.status === 200) {
      window.localStorage.setItem('authToken', resp.body.token);
    } else {
      throw new Error(`Login failed with status code: ${resp.status}`);
    }
  });
  });
  
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
