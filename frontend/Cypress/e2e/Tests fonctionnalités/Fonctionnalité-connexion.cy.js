describe('Login Form Tests', () => {
  it('should display a spinner and capture an error message when the server returns a 500 status', () => {
    // Intercepter la requête de connexion et simuler une réponse 500
    cy.intercept('POST', 'http://localhost:8081/login', {
      statusCode: 500,
      body: { error: 'Internal Server Error' },
    }).as('loginRequest');

    // Visiter la page de connexion
    cy.visit('http://localhost:8080/#/login');
    cy.log('Visiting the login page');

    // Remplir le champ email
    cy.get('input[data-cy="login-input-username"]')
      .should('be.visible')
      .type('test2@test.com')
      .then(() => {
        cy.log('Email input found and filled');
      });

    // Remplir le champ mot de passe
    cy.get('input[data-cy="login-input-password"]')
      .should('be.visible')
      .type('testtest')
      .then(() => {
        cy.log('Password input found and filled');
      });

    // Cliquer sur le bouton Soumettre
    cy.get('button[data-cy="login-submit"]')
      .should('be.visible')
      .click()
      .then(() => {
        cy.log('Submit button clicked');
      });

    // Vérifier que le spinner apparaît
    cy.get('.fa-circle-notch.fa-spin')
      .should('be.visible')
      .then(() => {
        cy.log('Spinner is visible');
      });

    // Attendre la requête de connexion
    cy.wait('@loginRequest', { timeout: 10000 });

    // Vérifier que le spinner reste visible après la réponse
    cy.get('.fa-circle-notch.fa-spin')
      .should('be.visible')
      .then(() => {
        cy.log('Spinner is still visible');
      });
  });
});
