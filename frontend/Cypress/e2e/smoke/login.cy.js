describe('Smoke Test - Connexion', () => {
  it('should display the login form with email and password fields and a login button', () => {
    cy.visit('http://localhost:8080/#/login'); 

    // Vérifier la présence du champ email
    cy.get('input[data-cy="login-input-username"]').should('be.visible').type('your_email@example.com').then(() => {
    },)
    // Vérifier la présence du champ mot de passe
    cy.get('input[data-cy="login-input-password"]').should('be.visible').type('your_password').then(() => {
    },)
    // Vérifier la présence du bouton de connexion avec le texte "Se connecter"
    cy.get('button[data-cy="login-submit"]').should('be.visible').click().then(() => {
      },)    });
});
