// Import dependencies
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import axios from "axios";

// Import components
import IngredientList from "./components/IngredientList";

// Page function.
export default function SearchPage() {
  // Formik to handle the search form.

  const router = useRouter();
  const [goodFood, setGoodFood] = useState(["rice", "fish"]);

  const [goodFoodString, setGoodFoodString] = useState("");
  const [badFoodString, setBadFoodString] = useState("");

  // Add ingredients function.
  async function addIngredient(name) {
    if (goodFood.includes(name)) {
      return;
    } else {
      setGoodFood((goodFood) => [...goodFood, name]);
    }
  }

  // Delete ingredient function
  async function deleteIngredient(name) {
    setIngredients(goodFood.filter((item) => item !== name));
  }

  // Builds a string of comma-separated foods to avoid for API call.
  async function buildGoodFoodString() {
    let newString = "";
    for (let item of goodFood) {
      if (newString.length === 0) {
        newString = goodFood[0];
      } else {
        newString += ", ";
        newString += item;
      }
    }
    setGoodFoodString(newString);
  }

  // Builds a string of comma-separated desired foods for API call.
  async function buildBadFoodString() {
    let newString = "";
    const response = await fetch("http://localhost:3000/api/badfood/get");
    const data = await response.json();
    for (let item of data) {
      if (newString.length === 0) {
        newString = data[0].name;
      } else {
        newString += ", ";
        newString += item.name;
      }
    }
    setBadFoodString(newString);
  }

  async function searchRecipes() {
    await buildGoodFoodString();
    console.log(goodFoodString);
    console.log("rice, fish");
    let options = {
      headers: {
        "X-RapidAPI-Key": "c8546fca4fmshd88cb0f91ab8fddp11f32djsn1228ba2c02e0",
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
      params: {
        query: "*",
        instructionsRequired: "true",
        fillIngredients: "true",
        addRecipeInformation: "true",
        includeIngredients: { goodFoodString },
        excludeIngredients: "spinach",
        ignorePantry: "true",
        number: "4",
        limitLicense: "false",
        ranking: "1",
        offset: "34",
      },
    };
    const response = await axios.get(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
      options
    );
    const results = response.data.results;
    const names = [];
    for (let result of results) {
      names.push(result.title);
    }
    console.log(names);
  }

  useEffect(() => {
    async function getStrings(){
      await buildBadFoodString();
      await buildGoodFoodString();
    }
    getStrings()
    .then(console.log(goodFoodString))
    .then(console.log(badFoodString))
  }, []);

  // DOM return
  return (
    <>
      <div class="flex flex-col bg-white w-3/4 mt-24 items-center min-h-[400px] text-center">
        <h1 class="text-3xl mt-12">Add ingredients to recipe search</h1>

        

        <div class="flex flex-col p-8 items-center">
          <Formik
            initialValues={{
              name: "",
            }}
            onSubmit={async (values) => {
              addIngredient(values.name);
            }}
          >
            <Form>
              <Field type="text" id="name" name="name" className="border-gray border-4" placeholder="ingredient" />
              <button
                className="btn btn-blue ml-8"
                type="text"
                onClick={() => {
                  searchRecipes();
                }}
              >
                Add
              </button>
            </Form>
          </Formik>
        </div>

        <div id="addedList">
          <IngredientList ingredients={goodFood} onDelete={deleteIngredient} />
        </div>

        <div class="flex justify-between w-full items-center place-self-start p-4 mt-auto">
          <button class="btn btn-blue" onClick={() => router.push("/preferences")}>
            My Preferences
          </button>

          <button
            class="btn btn-lg btn-green justify-self-end"
            onClick={() => {
              router.push("/results");
            }}
          >
            Begin Search
          </button>
        </div>
      </div>
    </>
  );
}
