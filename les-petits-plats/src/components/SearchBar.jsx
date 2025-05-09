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

sqs