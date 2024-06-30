describe('POST /orders', () => {
  let token;
    const orderDetails = {
      firstname: 'John',
      lastname: 'Doe',
      address: '123 Elm St',
      zipCode: '12345',
      city: 'Springfield'
    };
  
    it('should handle internal server error (500)', () => {
      cy.request({
        method: "POST",
        url: "http://localhost:8081/orders",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          firstname: "string",
          lastname: "string",
          address: "string",
          zipCode: "strin",
          city: "string",
        },
        body: orderDetails,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(500);
        expect(response.body).to.have.property("status").eq(500);
      });
    });
  
    it('should create and validate the current user\'s order (200)', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:8081/orders',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: orderDetails
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

    // Test case: should handle no order found (404)
  it('should handle no order found (404)', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/orders',
      failOnStatusCode: false,
      headers: {
        'accept': 'application/json',
      }
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('message').eq('Pas de commande en cours');
    });
  });
  });
  