import React from 'react';
import recipes from '../assets/recettes.json'; 
import RecipeCard from './RecipeCard';
import '../styles/RecipeList.css'; 

const RecipeList = () => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
