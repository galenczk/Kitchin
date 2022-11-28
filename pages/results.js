// Import dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

// Import components
import RecipeList from "./components/RecipeList";

// Page function
export default function ResultsPage(props) {
  // Router for page navigation
  const router = useRouter();
  // list of recipes
  const [recipes, setRecipes] = useState(props.recipes);

  // DOM return
  return (
    <>
      <div class="flex flex-col bg-white w-3/4 my-12 min-h-[400px] text-center border-4 border-slate-600">
        <div className="ml-auto">
          <button
            className=" btn-help border-l-2 border-sky-700"
            onClick={() => {
              router.push("/tutorial#resultsTut");
            }}
          >
            Help
          </button>
        </div>
        <div className="ml-8">
          <h1 class="text-3xl mt-12 text-start">Recipes</h1>
        </div>

        <div class="m-8">
          <RecipeList recipes={recipes} />
        </div>

        <div>
          <button
            className="btn btn-blue mb-8 border-b-4 border-r-4 border-sky-700"
            onClick={() => {
              router.push("/fridge");
            }}
          >
            Back to Search
          </button>
        </div>
      </div>
    </>
  );
}

// Get list of recipes with GSSP
export async function getServerSideProps() {
  let recipeArray = [];
  const response = await axios.get("https://kitchin.vercel.app/api/results-get");
  const recipes = await response.data[0].recipes;
  for (let recipe of recipes) {
    recipeArray.push(recipe);
  }
  
  return { props: { recipes: recipeArray } };
}