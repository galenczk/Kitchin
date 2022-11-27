// Import dependencies
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"
import axios from "axios"


export default function DetailsPage(props) {

  console.log(props.data)

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

  // DOM return
  return (
    <>
      <div class="flex flex-col bg-white my-12 text-center border-4 border-slate-600">
        <div className="flex">
          <div className="my-auto mx-12">
            <h1 class="text-3xl font-bold">{thisRecipe.title}</h1>
            <p className="mt-8">
              by:{" "}
              <a href={thisRecipe.sourceUrl} className="text-sky-600">
                {thisRecipe.sourceName}
              </a>
            </p>
          </div>
          <img className="mx-12 my-12 w-1/2" src={thisRecipe.image}></img>
        </div>

        <div className="w-1/3 mx-auto">
          <h1 className="text-2xl text-start border-b-2 border-slate-600 p-2">Ingredients</h1>
          <ul className="mt-6 text-start pl-6" style={{ listStyleType: "disc" }}>
            {inputs.map((input) => (
              <li className="m-1">
                {input.amount} {input.unit} {input.originalName}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-3/4 mx-auto">
          <h1 className="text-2xl text-start border-b-2 border-slate-600 p-2 mt-2">Steps</h1>
          <ol className="my-6 text-start pl-6" style={{ listStyleType: "decimal" }}>
            {steps.map((step) => (
              <li className="m-2">{step}</li>
            ))}
          </ol>
        </div>

        <div className="flex justify-between mx-auto">
          <button className="btn-small btn-blue m-6 border-r-4 border-b-4 border-sky-600">Back to Results</button>
          <div className="w-24" />
          <button className="btn-small btn-blue m-6 border-l-4 border-b-4 border-sky-600">Back to Search</button>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Get list of recipes from mongo through API.  
  const response = await axios.get("http://localhost:3000/api/results-get");
  const recipes = await response.data[0].recipes;

  return { props: {recipeList: recipes}}
}
