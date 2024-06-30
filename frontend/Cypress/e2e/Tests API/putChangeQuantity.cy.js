describe('PUT /orders/{id}/change-quantity', () => {
    const productId = 1;
    const token = 'votre_token_jwt';
  
    it('should handle internal server error (500)', () => {
      cy.request({
        method: 'PUT',
        url: `http://localhost:8081/orders/${productId}/change-quantity`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: {
          quantity: 5
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(500);
        expect(response.body).to.have.property('status').eq(500);
      });
    });
  
    it('should update the product quantity in the cart (200)', () => {
      cy.request({
        method: 'PUT',
        url: `http://localhost:8081/orders/${productId}/change-quantity`,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: {
          quantity: 5
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('product');
        // autres vérifications...
      });
    });
  
    it('should handle no order found (404)', () => {
      cy.request({
        method: 'PUT',
        url: `http://localhost:8081/orders/999/change-quantity`,
        failOnStatusCode: false,
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: {
          quantity: 5
        }
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message').eq('Produit non trouvé');
      });
    });
  });
  