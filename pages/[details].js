// Import dependencies
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"
import axios from "axios"

// Import components

export default function ResultsPage(props) {
  const router = useRouter();
  const recipeID = router.query.details;

  const thisRecipe = props.recipeList[recipeID];

  // Handles readyInTime
  let time = thisRecipe.readyInMinutes;
  let timePostfix = "Minutes";
  if (time > 60) {
    timePostfix = "Hour";
    time = Math.round(time / 60);
    if (time > 1) {
      timePostfix = "Hours";
    }
  }

  // Handles ingredients
  function parseIngredients(){
    let ingredientsArray = thisRecipe.extendedIngredients
    return ingredientsArray
  }
  let inputs = parseIngredients()


  // Handles steps
  let steps = [];

  function parseSteps(){
  let stepsArray = thisRecipe.analyzedInstructions[0].steps;
  for (let item of stepsArray){
    if(item.step.includes(";")){
      splitSteps(item.step)
      }else{
        steps.push(item.step)
      }
    }
  }
  
  // Handles steps in block of text
  function splitSteps(item){
    let blockSteps = item.split(";")
        for(let step of blockSteps){
          steps.push(step)
        }
      }

  parseSteps()
  console.log(steps)

  // DOM return
  return (
    <>
      <div class="flex flex-col bg-white w-3/4 mt-24 items-center min-h-[400px] text-center">
        <img src={thisRecipe.image}></img>
        <h1 class="text-3xl">{thisRecipe.title}</h1>
        <p>
          by:{" "}
          <a href={thisRecipe.sourceUrl} className="text-sky-600">
            {thisRecipe.sourceName}
          </a>
        </p>

        <div>
          <h1>Ingredients</h1>
          <ul>
            {inputs.map((input) => (
              <li>
                {input.amount} {input.unit} {input.originalName}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1>Steps</h1>
          <ol style={{ listStyleType: "decimal" }}>
            {steps.map((step) => (
              <li>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Get list of recipes from mongo through API.
  // Probably replace this with direct mongo call to be faster.
  const response = await axios.get("http://localhost:3000/api/search-results/get");
  const recipes = await response.data[0].recipes;

  return { props: {recipeList: recipes}}
}
