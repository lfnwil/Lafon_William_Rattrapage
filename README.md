# Projet de rattrapage React et TypeScript.

## Installation et lancement

Prérequis : Node.js 22.12 ou plus récent et npm.

Dans le dossier du projet :

```bash
npm install
npm run dev
```

Ouvrir l'adresse indiquée par Vite dans le terminal, généralement `http://127.0.0.1:5173`.

Pour vérifier TypeScript et préparer la version de production :

```bash
npm run build
npm run preview
```

Le dossier `dist/` est généré par le build. `node_modules/` et `dist/` sont exclus de Git.

## Fonctionnalités réalisées

- Recherche de recettes par nom avec un délai de 400 ms après la saisie.
- Cartes avec photo, titre, catégorie et origine.
- États de chargement, d'erreur avec bouton Réessayer et de recherche sans résultat.
- Fiche détaillée à l'adresse `/item/:id` : ingrédients, quantités et préparation.
- Fiche accessible directement et après rechargement de la page.
- Ajout et retrait depuis les résultats ou la fiche détaillée, sans doublon.
- Collection persistante dans le navigateur grâce à `localStorage`.
- Trois statuts : À découvrir, En cours et Terminée.
- Note entière de 1 à 5, commentaire facultatif et date d'ajout.
- Modification des entrées avec enregistrement automatique.
- Filtre par statut, recherche par titre et tri par date d'ajout ou par note, dans les deux sens.
- Confirmation avant chaque suppression, avec possibilité d'annuler.
- Statistiques : nombre de recettes, note moyenne et répartition par statut avec barres CSS.
- Navigation commune, indication de la page active et interface adaptée à 375 px.

À l'ajout, une recette reçoit le statut À découvrir, une note initiale de 1/5 et un commentaire vide. La note est modifiable dans Ma collection. La moyenne tient compte de toutes les notes enregistrées.

## Choix techniques

- React avec composants fonctionnels, TypeScript en mode strict et Vite.
- React Router pour les pages et les paramètres d'URL.
- Context API pour partager la collection sans transmettre les mêmes props sur plusieurs niveaux.
- `useLocalStorage<T>` : hook générique qui lit et enregistre une valeur typée.
- `useDebounce<T>` : hook qui attend la fin de la saisie avant de changer la valeur utilisée pour la recherche.
- `useCollection` : accès simplifié au contexte de la collection.
- CSS classique et composants écrits dans le projet, sans bibliothèque de composants ni de graphiques.
- Données externes lues comme `unknown`, puis vérifiées avant utilisation ; aucun type `any`.

## Organisation du code

```text
src/
├── components/   Cartes, filtres, confirmation et mise en page
├── pages/        Recherche, détail, collection et statistiques
├── hooks/        useLocalStorage, useDebounce et useCollection
├── context/      État et actions de la collection
├── services/     Requêtes TheMealDB et conversion des réponses
├── types/        Interfaces de l'API, recettes et collection
├── utils/        Tri, filtres, validation et calculs
└── data/         mock.ts, données de test de la première étape
```

Les composants reçoivent le type `Recipe`. Le service transforme les réponses `MealApi` en `Recipe` : les composants n'ont donc pas besoin de connaître les noms de champs de TheMealDB. Les données de test utilisent ce même type.

## API utilisée

Documentation : <https://www.themealdb.com/api.php>

- Recherche : `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`
- Détail : `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52771`

La clé de test publique `1` est prévue par TheMealDB pour le développement et l'usage pédagogique. Aucun compte ni fichier de configuration privé n'est nécessaire.

## Difficulté rencontrée et solution

L'API fournit les ingrédients dans des champs séparés (`strIngredient1` à `strIngredient20`) et certaines valeurs sont vides ou nulles. La fonction `normalizeMeal` les convertit en un tableau d'ingrédients, élimine les lignes vides et associe chaque ingrédient à sa quantité. L'interface peut ensuite afficher une liste simple et typée.

Les recherches peuvent également se terminer dans un ordre différent de leur lancement. Le nettoyage de `useEffect` annule la requête précédente avec `AbortController`, et les mises à jour vérifient que la requête n'est pas annulée. Une réponse ancienne ne remplace donc pas le résultat récent. Une attente de plus de 15 secondes affiche un message d'erreur.

