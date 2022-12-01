// Import dependencies
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"
import Image from "next/image"
import axios from "axios"
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


export default function DetailsPage(props) {
  const router = useRouter();

  // Grabs a specific recipe to display
  const recipeID = router.query.details;
  const thisRecipe = props.recipeList[recipeID];

  // loading is a state that toggles loading indicator
  const [loading, setLoading] = useState(false);

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
  function parseIngredients() {
    let ingredientsArray = thisRecipe.extendedIngredients;
    return ingredientsArray;
  }
  let inputs = parseIngredients();

  // Handles steps list
  let steps = [];

  function parseSteps() {
    let instructions = thisRecipe.analyzedInstructions;
    let stepsArray = [];
    for (let object of instructions) {
      for (let step of object.steps) {
        stepsArray.push(step);
      }
    }
    for (let object of stepsArray) {
      if (stepsArray.length === 1 && object.step.includes(";")) {
        splitSteps(object.step);
      } else {
        steps.push(object.step);
      }
    }
  }

  // Handles case where all steps are in one object separated by ";"
  function splitSteps(item) {
    let blockSteps = item.split(";");
    for (let step of blockSteps) {
      steps.push(step);
    }
  }

  parseSteps();

    useEffect(() => {
      setLoading(false);
    }, []);

  // DOM return
  return (
    <>
      <div class="mx-12 flex flex-col bg-white my-12 text-center border-4 border-neutral-600">
        <div className="ml-auto">
          <button
            className=" btn-help border-l-2 border-fuchsia-600"
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
            className="mx-auto my-auto w-1/3 border-2 border-neutral-600 "
            width={1000}
            height={0}
            src={thisRecipe.image}
          />
        </div>

        <div className="w-1/3 mx-auto">
          <h1 className="text-2xl text-start border-b-2 border-slate-600 p-2">Ingredients</h1>
          <ul className="mt-6 text-start pl-6" style={{ listStyleType: "disc" }}>
            {inputs.map((input, key) => (
              <li className="m-1" key={key}>
                {input.amount} {input.unit} {input.originalName}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-3/4 mx-auto">
          <h1 className="text-2xl text-start border-b-2 border-slate-600 p-2 mt-2">Steps</h1>
          <ol className="my-6 text-start pl-6" style={{ listStyleType: "decimal" }}>
            {steps.map((step, key) => (
              <li className="m-2" key={key}>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex ">
          {loading === true ? (
            <p className=" btn text-white bg-sky-900 font-bold m-6">Loading...</p>
          ) : (
            <div className="flex flex-grow justify-between">
              <button
                className="btn-small btn-blue m-8 border-r-4 border-b-4 border-sky-600"
                onClick={() => {
                  confirmAlert({
                    title: "Return to Results?",
                    buttons: [
                      {
                        label: "Yes",
                        onClick: () => {
                          setLoading(true), router.push("/results");
                        },
                      },
                      {
                        label: "No",
                      },
                    ],
                  });
                }}
              >
                Back to Results
              </button>

              <button
                className="btn-small btn-blue m-8 border-l-4 border-b-4 border-sky-600"
                onClick={() => {
                  confirmAlert({
                    title: "Return to Search?",
                    buttons: [
                      {
                        label: "Yes",
                        onClick: () => {
                          setLoading(true), router.push("/fridge");
                        },
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
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Get list of recipes from mongo through API.  
  const response = await axios.get("https://kitchin.vercel.app/api/results-get");
  const recipes = await response.data[0].recipes;

  return { props: {recipeList: recipes}}
}
