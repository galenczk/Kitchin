// Import dependencies
import React, { useState, useEffect } from "react";
import axios from "axios"

// Import components
import RecipeList from "./components/RecipeList";

export default function ResultsPage() {

  const [recipes, setRecipes] = useState([])
  
  async function getRecipes() {
    const response = await axios.get("http://localhost:3000/api/search-results/get");
    const recipes = await response.data[0].recipes;
    setRecipes(recipes);
  }

  useEffect(() => {
    getRecipes();
  }, []);
  
  // DOM return
  return (
    <>
      <div class="flex flex-col bg-white w-3/4 mt-24 items-center min-h-[400px] text-center">
        <h1 class="text-3xl mt-12">Recipes</h1>
        <div class="m-8">
          <RecipeList recipes={recipes} />
        </div>
      </div>
    </>
  );
}
