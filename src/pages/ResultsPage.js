// Import dependencies
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import components
import RecipeList from "../components/RecipeList";
import Button from "../components/Button";

export default function ResultsPage() {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([
    "Chicken Rissotto",
    "BBQ Chicken with Rice",
    "Chicken Fried Rice",
    "Chicken and Wild Rice Soup",
  ]);

  // DOM return
  return (
    <>
      <div class="flex flex-col bg-white w-3/4 mt-24 items-center min-h-[400px] text-center">
        <h1 class="text-3xl mt-12">Recipes</h1>
        <div class="mt-8">
          <RecipeList recipes={recipes} />
        </div>

        <div class="flex justify-between w-full items-center place-self-start p-4 mt-auto">
          <Button class="btn btn-blue" label="My Preferences" onClick={() => navigate("/preferences")} />
          <Button class="btn btn-blue" label="Search Again" onClick={() => navigate("/search")} />
        </div>
      </div>
    </>
  );
}
