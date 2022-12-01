// Import dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"

// Import components
import RecipeList from "./components/RecipeList";

export default function ResultsPage(props) {
  const router = useRouter();
  
  // list of recipes
  const [recipes, setRecipes] = useState(props.recipes);

  let recipeIndexArray = [];
  for (let index in recipes) {
    recipeIndexArray.push(index);
  }

  // DOM return
  return (
    <>
      <div class="flex flex-col bg-white w-3/4 my-12 min-h-[400px] text-center border-4 border-neutral-600">
        <div className="ml-auto">
          <button
            className=" btn-help border-l-2 border-fuchsia-600"
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

        <div className="place-self-start ml-8">
          <button
            className="btn btn-blue mb-8 border-b-4 border-r-4 border-sky-700"
            onClick={() => {
              confirmAlert({
                title: "Return to Search?",
                buttons: [
                  {
                    label: "Yes",
                    onClick: () => router.push("/fridge"),
                  },
                  {
                    label: "No",
                  },
                ],
              });
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