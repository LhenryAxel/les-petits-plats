import React from 'react';
import '../styles/RecipeCard.css'; 

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={`/images/${recipe.image}`} alt={recipe.name} />
        <span className="time-badge">{recipe.time}min</span>
      </div>

      <div className="recipe-content">
        <h2>{recipe.name}</h2>
        <h3 className="section-title">Recette</h3>
        <p>{recipe.description}</p>

        <h3 className="section-title">Ingrédients</h3>
        <div className="ingredients-grid">
          {recipe.ingredients.map((item, index) => (
            <div key={index}>
              <strong>{item.ingredient}</strong><br />
              <small>{item.quantity || ''} {item.unit || ''}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
