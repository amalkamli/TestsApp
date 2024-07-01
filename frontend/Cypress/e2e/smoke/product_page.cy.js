describe('Product API Tests', () => {
  const baseUrl = 'http://localhost:8081';

  it('should verify the availability field and add_to_cart button in /products endpoint', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/products`,
      failOnStatusCode: false // Permet de ne pas échouer le test en cas d'erreur 500
    }).then((response) => {
      expect(response.status).to.eq(200);
      const products = response.body;
      products.forEach((product) => {
        expect(product).to.have.property('availableStock');
        expect(product).to.have.property('add_to_cart');
      });
    });
  });

  it('should verify the availability field and add_to_cart button in /products/random endpoint', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/products/random`,
      failOnStatusCode: false // Permet de ne pas échouer le test en cas d'erreur 500
    }).then((response) => {
      expect(response.status).to.eq(200);
      const products = response.body;
      products.forEach((product) => {
        expect(product).to.have.property('availableStock');
        expect(product).to.have.property('add_to_cart');
      });
    });
  });

  it('should verify the availability field and add_to_cart button in /products/{id} endpoint', () => {
    const productId = 1; 
    cy.request({
      method: 'GET',
      url: `${baseUrl}/products/${productId}`,
      failOnStatusCode: false // Permet de ne pas échouer le test en cas d'erreur 500
    }).then((response) => {
      expect(response.status).to.eq(200);
      const product = response.body;
      expect(product).to.have.property('availableStock');
      expect(product).to.have.property('add_to_cart');
    });
  });
});
