import React from 'react';

const RecipeGrid = ({ recipes }) => {
  return (
    <div style={styles.grid}>
      {recipes.map((recipe, index) => (
        <div key={index} style={styles.card}>
          <h3>{recipe.name}</h3>
          <p><strong>Durée :</strong> {recipe.time} min</p>
          <ul>
            {recipe.ingredients.map((item, i) => (
              <li key={i}>
                {item.ingredient}{item.quantity ? ` : ${item.quantity}` : ''}
                {item.unit ? ` ${item.unit}` : ''}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "10px" }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    marginBottom: '30px',
  },
  input: {
    width: '100%',
    padding: '14px 60px 14px 20px', 
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  icon: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#1e1e1e',
    borderRadius: '6px',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }
};

export default RecipeGrid;
