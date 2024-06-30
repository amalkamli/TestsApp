describe('Smoke Test - Page Produit', () => {
    it('should display the add to cart button and product availability field', () => {
      cy.visit('http://localhost:8080/#/products'); 
  
      // Vérifier la présence du bouton d'ajout au panier
      cy.get('button[data-cy="Ajout-panier"]').contains('Ajouter au panier').should('be.visible');
  
      // Vérifier la présence du champ de disponibilité des produits
      cy.get('.produits disponibles').should('be.visible'); 
    });
  });
