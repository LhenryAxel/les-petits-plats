import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; 
import recettes from '../assets/recettes.json';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtered = recettes.filter((recette) => {
      const name = recette.name.toLowerCase();
      const description = recette.description.toLowerCase();
      const appliance = recette.appliance?.toLowerCase() || '';
      const ustensils = recette.ustensils?.join(' ').toLowerCase() || '';
      const ingredients = recette.ingredients?.map(i => i.ingredient.toLowerCase()).join(' ') || '';

      return (
        name.includes(value) ||
        description.includes(value) ||
        appliance.includes(value) ||
        ustensils.includes(value) ||
        ingredients.includes(value)
      );
    });

    onSearch(filtered);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Rechercher une recette, un ingrédient, ..."
        value={query}
        onChange={handleInputChange}
        style={styles.input}
      />
      <div style={styles.icon}>
        <FiSearch size={20} color="white" />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    margin: '0 auto',
  },
  input: {
    width: '100%',
    padding: '18px 60px 18px 20px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  icon: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#1e1e1e',
    borderRadius: '8px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  }
};

export default SearchBar;
