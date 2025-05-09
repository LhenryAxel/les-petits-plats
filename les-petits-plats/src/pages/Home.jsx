import { useState } from 'react';
import recettes from '../assets/recettes.json';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import FilterDropdown from '../components/FilterDropdown';

function Home() {
  const [filteredRecipes, setFilteredRecipes] = useState(recettes);
  const [activeFilters, setActiveFilters] = useState([]);

  const filterRecipes = (filters) => {
    const filtered = recettes.filter((recette) => {
      return filters.every(({ type, value }) => {
        if (type === 'ingredients') {
          return recette.ingredients.some(i => i.ingredient.toLowerCase() === value);
        }
        if (type === 'ustensils') {
          return recette.ustensils.some(u => u.toLowerCase() === value);
        }
        if (type === 'appliance') {
          return recette.appliance.toLowerCase() === value;
        }
        return false;
      });
    });

    setFilteredRecipes(filtered);
  };

  const handleAddFilter = (type, value) => {
    const newFilter = { type, value };
    if (!activeFilters.some(f => f.type === type && f.value === value)) {
      const updatedFilters = [...activeFilters, newFilter];
      setActiveFilters(updatedFilters);
      filterRecipes(updatedFilters);
    }
  };

  const handleRemoveFilter = (type, value) => {
    const updatedFilters = activeFilters.filter(f => !(f.type === type && f.value === value));
    setActiveFilters(updatedFilters);
    filterRecipes(updatedFilters);
  };

  return (
    <div>
      <Header onSearch={setFilteredRecipes} />

      <div className="filters-container">
        <div className="filters-row">
          <FilterDropdown type="ingredients" onFilter={handleAddFilter} />
          <FilterDropdown type="appliance" onFilter={handleAddFilter} />
          <FilterDropdown type="ustensils" onFilter={handleAddFilter} />
        </div>

        <div className="active-tags">
          {activeFilters.map((f, index) => (
            <div key={index} className="tag">
              <span>{f.value}</span>
              <button onClick={() => handleRemoveFilter(f.type, f.value)}>✕</button>
            </div>
          ))}
        </div>
      </div>


      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default Home;
