# 🎬 Projet Films & Séries - TMDb

Ce projet est une application web permettant d'afficher une liste de films et de séries en utilisant l'API de **TheMovieDB (TMDb)**. Il permet également d'ajouter des films et séries en favoris et de rechercher des contenus.

## Fonctionnalités

- **Affichage des films et séries** : Liste paginée des films et séries populaires.
- **Détails des films et séries** : Accès à la page de détails d'un film ou d'une série.
- **Ajout en favoris** : Sauvegarde des films et séries favoris.
- **Recherche avancée** : Possibilité de rechercher un film ou une série.
- **Suppression des favoris** : Option pour retirer un film ou une série de la liste des favoris.

## 🛠 Technologies utilisées

- **React** (avec TypeScript) - Framework front-end
- **React Router** - Navigation entre les pages
- **Zustand** - Gestion des favoris via un store global
- **TanStack Query** - Gestion des requêtes API et du cache
- **TheMovieDB API** - Source des films et séries

## Prérequis

- **npm** ou **yarn** installé

## Installation

1. **Cloner le dépôt** :

   ```sh
   git clone https://github.com/votre-utilisateur/votre-repo.git
   cd votre-repo
   ```

2. **Installer les dépendances** :

   ```sh
   npm install
   ```

   ou

   ```sh
   yarn install
   ```

3. \*\*Créer un fichier \*\***`.env`** à la racine et ajouter votre clé API TMDb :

   ```env
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

4. **Lancer l'application en mode développement** :

   ```sh
   npm run dev
   ```

   ou

   ```sh
   yarn dev
   ```

## 🔗 API TheMovieDB

L'application interagit avec l'API TMDb pour récupérer les films et séries. Référence : [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)