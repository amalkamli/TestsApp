describe('XSS Vulnerability Test', () => {
  const xssPayload = '<script>alert("XSS")</script>';

  it('should not allow XSS via reviews endpoint', () => {
    // POST request to submit a review with potential XSS payload
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/reviews',
      body: {
        title: 'Test Title',
        comment: xssPayload,
        rating: 5
      },
      failOnStatusCode: false // Permettez au test de continuer même si le serveur renvoie une erreur
    }).then((response) => {
     // Vérifiez si l'état de la réponse est 401 en raison de l'authentification manquante
      expect(response.status).to.equal(401);
    });

// Obtenez une demande pour récupérer les avis et vérifier la charge utile XSS
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/reviews',
      failOnStatusCode: false // Allow the test to continue even if the server returns an error
    }).then((response) => {
      // Vérifiez si le statut de réponse est de 200 (succès)
      if (response.status === 500) {
        // Si l'erreur du serveur persiste, enregistrez-la et échouez au test
        cy.log('Server error encountered, unable to complete XSS test');
        expect(response.status).to.equal(200); // This will intentionally fail the test
      } else {
// s'assurer que la charge utile n'est pas présente dans la réponse
        expect(response.body).to.not.contain(xssPayload);
      }
    });
  });
});
