import recettes from '../assets/recettes.json';
import Header from '../components/Header';
import RecipeList from '../components/RecipeList';
import { useState } from 'react';

function Home() {
  const [filteredRecipes, setFilteredRecipes] = useState(recettes);

  return (
    <div>
      <Header onSearch={setFilteredRecipes} />
      <RecipeList />
    </div>
  );
}

export default Home;
