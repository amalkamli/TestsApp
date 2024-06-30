describe('PUT /orders/add', () => {
    const token = 'votre_token_jwt';
  
    it('should return 401 if JWT token is missing', () => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8081/orders/add',
        failOnStatusCode: false,
        headers: {
          'accept': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body).to.have.property('code', 401);
        // autres vérifications...
      });
    });
  
    it('should add the product and update the cart (200)', () => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8081/orders/add',    
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: {
          productId: 1,
          quantity: 2
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('firstname');
      expect(response.body).to.have.property('lastname');
      expect(response.body).to.have.property('address');
      expect(response.body).to.have.property('zipCode');
      expect(response.body).to.have.property('city');
      expect(response.body).to.have.property('date');
      expect(response.body).to.have.property('validated');
      expect(response.body).to.have.property('orderLines'); 
      });
    });
  });
  