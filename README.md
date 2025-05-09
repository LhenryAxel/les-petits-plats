# 🍽️ Les Petits Plats

Application web React permettant de rechercher et filtrer dynamiquement parmi plus de 1500 recettes à partir de divers critères : ingrédients, appareils, ustensiles.

---

## 🔧 Fonctionnalités

* 🔍 Barre de recherche principale (recherche par nom, description, ingrédients, appareils, ustensiles)
* 🪄 Filtres dynamiques par catégories (dropdowns) :

  * Ingrédients
  * Appareils
  * Ustensiles
* 🏷️ Affichage des filtres actifs sous forme de tags
* ❌ Suppression d’un filtre via la croix du tag
* 📦 Affichage dynamique des recettes filtrées

---

## 🚀 Installation

```bash
git clone https://github.com/votre-utilisateur/les-petits-plats.git
cd les-petits-plats
npm install
npm run dev
```

Le projet sera accessible sur [http://localhost:5173](http://localhost:5173)

---

## 📂 Structure du projet

```
src/
├── assets/
│   └── recettes.json         # Données des recettes
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── FilterDropdown.jsx
│   └── RecipeList.jsx
├── pages/
│   └── Home.jsx              # Page principale
├── styles/
│   ├── Header.css
│   ├── SearchBar.css
│   └── FilterDropdown.css
├── App.jsx
└── main.jsx
```

---

## 📦 Données

Les données sont extraites depuis un fichier `recettes.json`, structuré comme suit :

```json
{
  "id": 1,
  "name": "Recette de test",
  "description": "...",
  "appliance": "Mixeur",
  "ustensils": ["spatule", "couteau"],
  "ingredients": [
    { "ingredient": "Tomate", "quantity": 2, "unit": "" }
  ]
}
```

---

## 🎨 UI

L’interface est responsive et reprend la charte graphique définie dans la maquette Figma.

---

## 📌 TODOs (facultatif)

* Intégration d’un système de favoris
* Affichage détaillé des recettes
* Ajout de tests unitaires

---

## 🧑‍💻 Auteur

Projet réalisé dans le cadre d’un exercice React.
Développement : Amin-Eddine Mito, Lhenry Axel

---

## 📄 Licence

Libre de réutilisation dans un cadre pédagogique.
