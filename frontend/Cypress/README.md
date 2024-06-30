# README

## Exécution du Projet
Eco Bliss Bath une startup de 20 personnes specialisés dans la vente des produits de beauté écoresponsables dont le produit principal est un savon solide.
### Prérequis
-Docker

-Cypress

-Navigateur (chrome ou Firfox recommendé)

- Node.js 
- npm (Node Package Manager)

### Installation

1. **Clonez le dépôt :**

   ```bash
   git clone https://github.com/OpenClassrooms-Student-Center/TesteurLogiciel_Automatisez_des_tests_pour_une_boutique_en_ligne.git
cd votre-projet
## Lancer le Backend: 
Ouvrir un terminal de commande.  
Accéder au repertoire du projet cloné.  
Taper la commande suivante pour lancer le Backend: 
Docker compose up
## Lancer le Frontend
Ouvrir un terminal de commande.  
Accéder au repértoire du projet cloné.  
Taper les commandes suivantes:   
npm install  
npm start
## Démarrage du Projet
Lancez le serveur de développement :  
npm start  
L'application sera disponible à l'adresse http://localhost:8081.

## Lancement des Tests
### Prérequis   
Cypress (inclus dans les dépendances du projet)   
Lancer les Tests   
Ouvrez Cypress pour exécuter les tests :  

  ```bash
  npx cypress open
   ```       


Dans l'interface de Cypress, sélectionnez le test que vous souhaitez exécuter.  
Ou exécutez tous les tests en mode headless :  
  ```bash
npx cypress run
 ```
## Procédure pour la génération des rapports
Génération du Rapport  
Installation de l'outil de Rapport : 
Installez le module cypress-mochawesome-reporter :

 ``` bash
npm install --save-dev cypress-mochawesome-reporter
 ```
Configurez Cypress pour utiliser le reporter :

Ajoutez les lignes suivantes à votre fichier cypress.json : 
``` bash 
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": true,
    "json": true
```
Ajoutez les lignes suivantes à votre fichier cypress/support/e2e.js :

``` bash
import 'cypress-mochawesome-reporter/register';
```
Générer le Rapport
Exécutez les tests en mode headless avec le reporter :

``` bash
npx cypress run --reporter cypress-mochawesome-reporter
```
Le rapport sera généré dans le dossier cypress/reports.
## Login
Identifiants: test2@test.fr  
Mot de passe: testtest
## API
Lien Swagger: http://localhost:8081/api/doc
## Auteur
Amal kamli 
contact: amal.kemly@gmail.com
## Historique des versions
Version 1.0.0 Tests Manuels

Version 2.0.0 Ajout de Cypress, tests automatisés

Conclusion

Suivez ces étapes pour exécuter le projet, lancer les tests et générer les rapports.

Assurez-vous d'avoir les prérequis installés et configurés correctement. 

Pour toute question, consultez la documentation ou contactez le mainteneur du projet.