import SearchBar from '../components/SearchBar';
import RecipeGrid from '../components/RecipeGrid';
import recettes from '../assets/recettes.json';
import { useState } from 'react';

function Home() {
  const [filteredRecipes, setFilteredRecipes] = useState(recettes);

  return (
    <div>
      <SearchBar onSearch={setFilteredRecipes} />
      <RecipeGrid recipes={filteredRecipes} />
    </div>
  );
}

export default Home;
