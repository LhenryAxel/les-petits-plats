import React from 'react';
import RecipeCard from './RecipeCard';
import '../styles/RecipeList.css'; 

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p>Aucune recette trouvée.</p>
      )}
    </div>
  );
};

export default RecipeList;
