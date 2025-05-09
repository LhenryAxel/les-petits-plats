import React, { useState, useEffect } from 'react';
import recettes from '../assets/recettes.json';
import { FiSearch } from 'react-icons/fi';
import '../styles/FilterDropdown.css';

const LABELS_FR = {
  ingredients: 'Ingrédients',
  appliance: 'Appareils',
  ustensils: 'Ustensiles',
};

const FilterDropdown = ({ type, onFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const values = new Set();

    recettes.forEach((recette) => {
      if (type === 'ingredients') {
        recette.ingredients.forEach(i => values.add(i.ingredient.toLowerCase()));
      } else if (type === 'ustensils') {
        recette.ustensils.forEach(u => values.add(u.toLowerCase()));
      } else if (type === 'appliance') {
        values.add(recette.appliance.toLowerCase());
      }
    });

    setOptions([...values].sort());
  }, [type]);

  const filtered = options.filter(option =>
    option.includes(query.toLowerCase())
  );

  const handleSelect = (value) => {
    if (onFilter) {
      onFilter(type, value);
    }
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="filter-dropdown">
      <button className="filter-toggle" onClick={() => setIsOpen(!isOpen)}>
        {LABELS_FR[type] || type}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="dropdown-panel">
          <div className="search-field">
            <input
              type="text"
              placeholder={`Rechercher un ${LABELS_FR[type] || type}`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <FiSearch />
          </div>
          <ul className="options-list">
            {filtered.map((item, i) => (
              <li key={i} onClick={() => handleSelect(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
