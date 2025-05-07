import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import recettes from './assets/recettes.json';

function App() {
  const [filteredRecipes, setFilteredRecipes] = useState(recettes);

  return (
    <>
    <Home />
    </>
  );
}

export default App;