describe('Panier Tests', () => {
 
  it('should verify the cart is empty initially', () => {
    const authToken = window.localStorage.getItem('authToken');
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/orders',
      headers: {
        'Authorization': `Bearer ${authToken}`
      },
      failOnStatusCode: false, 
    }).then((response) => {
      // Vérifiez que le code de statut est 200 ou 404 (aucune commande en cours)
      if (response.status === 200) {
        expect(response.body.orderLines).to.have.length(0);
      } else if (response.status === 404) {
        expect(response.body.message).to.eq('Aucune commande en cours');
      } 
    });
  });

  it('should add a product to the cart', () => {
    const authToken = window.localStorage.getItem('authToken');
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/products',
      headers: {
        failOnStatusCode: false,
        'Authorization': `Bearer ${authToken}`
      }
    }).then((response) => {
      const product = response.body[0];
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8081/orders/add',
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
        body: { productId: product.id, quantity: 1 }
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Product added to the cart');
      });
    });
  });

  it('should change the quantity of a product in the cart', () => {
    const authToken = window.localStorage.getItem('authToken');
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/orders',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }).then((response) => {
      const order = response.body.orderLines[0];
      cy.request({
        method: 'PUT',
        url: `http://localhost:8081/orders/${order.id}/change-quantity`,
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
        body: { quantity: 2 }
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Product quantity updated in the cart');
      });
    });
  });

  it('should delete a product from the cart', () => {
    const authToken = window.localStorage.getItem('authToken');
    cy.request({
      method: 'GET',
      url: 'http://localhost:8081/orders',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }).then((response) => {
      const order = response.body.orderLines[0];
      cy.request({
        method: 'DELETE',
        url: `http://localhost:8081/orders/${order.id}/delete`,
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Product removed from the cart');
      });
    });
  });

  it('should validate the current order', () => {
    const authToken = window.localStorage.getItem('authToken');
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/orders',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log('Order validated');
    });
  });
});
