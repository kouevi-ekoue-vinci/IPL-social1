# IPL Social

## Informations personnelles
- **Nom** : Ekoue  
- **Prénom** : Kouevi  
- **Email** : kouevi.ekoue@student.vinci.be  
- **URL GitHub** : https://github.com/kouevi-ekoue-vinci/IPL-social1.git

---

## Description du projet

Ce projet met en œuvre une fonction de validation de mot de passe en JavaScript. Cette fonction s'assure qu'un mot de passe respecte les règles suivantes :  
1. Il doit contenir au moins 8 caractères.  
2. Il doit inclure au moins un caractère spécial (par exemple : `@`, `#`, `!`, etc.).  
3. Il doit inclure au moins un chiffre.  
4. Il ne doit pas contenir la chaîne de caractères "IPL", quelle que soit la casse (ex. : "ipl", "IPL", etc.).

La méthodologie **TDD (Test Driven Development)** a été utilisée pour écrire et valider cette fonction avec des tests automatisés. Les tests sont implémentés avec **Jasmine**, et un pipeline d'intégration continue (CI) a été configuré avec **GitHub Actions** pour exécuter les tests automatiquement lors de chaque Pull Request (PR) vers la branche principale.

---

## Ligne de commande pour exécuter les tests

Pour exécuter les tests et valider le bon fonctionnement du code, utilisez la commande suivante dans votre terminal :

```bash
npm test

