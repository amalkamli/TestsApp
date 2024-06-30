describe('Order API Tests', () => {
  let token;
  // Before all tests, get a JWT token
  before(() => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/login', 
      body: {
        username: 'test2@test.fr', 
        password: 'testtest'  
      },
      failOnStatusCode: false 
    }).then((response) => {
      token = response.body.token; 
    });
  });

  // Test case: should return 401 if JWT token is missing
  it('should return 401 if JWT token is missing', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/orders',
      failOnStatusCode: false,
      headers: {
        'accept': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property('message').eq('JWT Token not found');
    });
  });

  // Test case: should retrieve the current user's order
  it('should retrieve the current user\'s order', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/orders',
      failOnStatusCode: false,
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
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

  // Test case: should handle no order found (404)
  it('should handle no order found (404)', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/orders',
      failOnStatusCode: false,
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('message').eq('Pas de commande en cours');
    });
  });
});
