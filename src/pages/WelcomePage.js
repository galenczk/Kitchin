// Import dependencies.
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Import components.
import Button from "../components/Button";

// Page function.
export default function WelcomePage() {
  const navigate = useNavigate();

  const options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
    params: {
      query: "pasta",
      cuisine: "italian",
      diet: "vegetarian",
      type: "main course",
      instructionsRequired: "true",
      fillIngredients: "true",
      addRecipeInformation: "true",
      number: "2",
      limitLicense: "false",
    },
    headers: {
      "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
    },
  };

  // DOM return
  return (
    <>
      <div class={`flex flex-col bg-white w-3/4 mt-24 items-center min-h-[400px] h-1/2 `}>
        <div class=" text-center">
          <h1 class="text-3xl mt-12">Welcome to kitchin</h1>
          <h2 class="text-xl mt-4">The helpful chef app</h2>
          <h3 class="mt-8">
            Click on "Begin Search" to start looking for recipes based on the ingredients you have in your kitchen.
          </h3>
          <h3 class="mt-2">or</h3>
          <h3 class="mt-2">Click on "My Preferences" to start adding ingredients that you want to avoid.</h3>
          <h3>Recipes including these ingredients will not be included in your results.</h3>
        </div>

        <div class="flex justify-between w-full items-center place-self-start p-4 mt-auto">
          <Button class="btn btn-blue" label="My Preferences" onClick={() => navigate("/preferences")} />

          <Button class="btn btn-lg btn-green" label="Begin Search" onClick={() => navigate("/search")} />

          <Button
            label="API call"
            onClick={() => {
              axios.request(options).then(function (response) {
                console.log(response.data);
              });
            }}
          />
        </div>
      </div>
    </>
  );
}
