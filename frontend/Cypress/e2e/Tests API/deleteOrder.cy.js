describe('DELETE /orders/{id}/delete', () => {
    const productId = 1;
    const token = 'votre_token_jwt';
  
    it('should handle internal server error (500)', () => {
      cy.request({
        method: 'DELETE',
        url: `http://localhost:8081/orders/${productId}/delete`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(500);
        expect(response.body).to.have.property('status').eq(500);
        // autres vérifications...
      });
    });
  
    it('should delete a product from the cart (200)', () => {
      cy.request({
        method: 'DELETE',
        url: `http://localhost:8081/orders/${productId}/delete`,
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
  
      cy.request({
        method: 'GET',
        url: 'http://localhost:8081/orders',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        const isProductDeleted = response.body.orderLines.every(line => line.id !== productId);
        expect(isProductDeleted).to.be.true;
      });
    });
  
    it('should handle no order found (404)', () => {
      cy.request({
        method: 'DELETE',
        url: `http://localhost:8081/orders/${productId}/delete`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message').eq('Produit non trouvé');
      });
    });
  });
  