// Import dependencies
import React, { useState } from "react";

// Import components
import RecipeList from "./components/RecipeList";

export default function ResultsPage({ recipes }) {

  
  // DOM return
  return (
    <>
      <div class="flex flex-col bg-white w-3/4 mt-24 items-center min-h-[400px] text-center">
        <h1 class="text-3xl mt-12">Recipes</h1>
        <div class="mt-8">
          <RecipeList recipes={recipes} />
        </div>

        <div class="flex justify-between w-full items-center place-self-start p-4 mt-auto">
          <button class="btn btn-blue" label="Search Again" onClick={() => navigate("/search")}>Search Again</button>
        </div>
      </div>
    </>
  );
}
