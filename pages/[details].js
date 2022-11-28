// Import dependencies
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"
import Image from "next/image"
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
  let instructions = thisRecipe.analyzedInstructions
  let stepsArray = []
  for (let object of instructions){
    for (let step of object.steps){
      stepsArray.push(step)
    }
  }
  console.log(stepsArray)
  for (let object of stepsArray){
    if(stepsArray.length === 1 && object.step.includes(";")){
      splitSteps(object.step)
      }else{
        steps.push(object.step)
      }
    }
  }
  
  // Handles case where all steps are in one object separated by ";"
  function splitSteps(item){
    let blockSteps = item.split(";")
        for(let step of blockSteps){
          steps.push(step)
        }
      }

  parseSteps()
  console.log(steps)
  console.log(thisRecipe)

  // DOM return
  return (
    <>
      <div class="mx-12 flex flex-col bg-white my-12 text-center border-4 border-slate-600">
        <div className="ml-auto">
          <button
            className=" btn-help border-l-2 border-sky-700"
            onClick={() => {
              router.push("/tutorial#recipeTut");
            }}
          >
            Help
          </button>
        </div>

        <div className="flex m-6">
          <div className="my-auto mx-12">
            <h1 class="text-3xl font-bold">{thisRecipe.title}</h1>
            <p className="mt-8">
              by:{" "}
              <a href={thisRecipe.sourceUrl} className="text-sky-600">
                {thisRecipe.sourceName}
              </a>
            </p>
          </div>
          <Image
            className="mx-auto my-auto w-1/3 border-2 border-slate-500 "
            width={1000}
            height={0}
            src={thisRecipe.image}
          />
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
