import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import RecipeGrid from './components/RecipeGrid';
import recettes from './assets/recettes.json';

function App() {
  const [filteredRecipes, setFilteredRecipes] = useState(recettes);

  return (
    <>
      <Header onSearch={setFilteredRecipes} />
      <RecipeGrid recipes={filteredRecipes} />
    </>
  );
}

export default App;