// Import dependencies
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

// Import components
import IngredientList from "./components/IngredientList";

// Page function.
export default function FridgePage(props) {
  // Router for page navigation
  const router = useRouter();
  // fridgeFood is the list of ingredients
  const [fridgeFood, setFridgeFood] = useState(props.ingredients);
  // loading is a state that toggles loading indicator
  const [loading, setLoading] = useState(false);

  // Add ingredient
  async function addFridgeFood(values) {
    if (values.name) {
      const response = await axios.post("http://localhost:3000/api/food-add", { name: values.name });
      if (response.status === 201) {
        getFridgeFood();
      } else {
        console.log(response.status);
      }
    }
  }

  // Delete ingredient
  async function deleteFridgeFood(name) {
    const response = await axios.post("http://localhost:3000/api/food-delete", { name: name });
    if (response.status === 200) {
      getFridgeFood();
    }
  }

  // Get ingredients
  async function getFridgeFood() {
    const foodArray = [];
    const response = await axios.get("http://localhost:3000/api/food-get");
    const data = await response.data;
    for (var item of data) {
      foodArray.push(item.name);
    }
    setFridgeFood(foodArray);
  }

  // Builds comma-separated string of ingredients for use in API call
  function buildFoodString() {
    let foodString = "";
    for (let food of fridgeFood) {
      if (foodString.length === 0) {
        foodString = fridgeFood[0].toString();
      } else {
        foodString += ", ";
        foodString += food.toString();
      }
    }
    return foodString;
  }

  // Calls API for search
  async function search() {
    setLoading(true)
    const response = await axios.post("http://localhost:3000/api/recipe-search", { string: buildFoodString(), diet: formRef.current.values.diet });
    const recipes = response.data;
    const saveResults = await axios.post("http://localhost:3000/api/results-add", recipes);
    router.push("/results")
  }

  useEffect(() => {
    setLoading(false);
  }, []);

  const formRef = useRef()

  // DOM return
  return (
    <>
      <div class="flex flex-col bg-white w-1/2 h-1/2 my-12 border-slate-600 border-4">
        <div className="ml-auto">
          <button
            className="btn-help border-l-2 border-fuchsia-600"
            onClick={() => {
              router.push("/tutorial#fridgeTut");
            }}
          >
            Help
          </button>
        </div>

        <div className="h-12" />

        <div className="ml-8">
          <h1 class="text-3xl">What&apos;s in the Fridge?</h1>
        </div>

        <div className="h-12" />

        <div className="flex mx-auto">
          <Formik
            initialValues={{
              name: "",
              diet: "*"
            }}
            onSubmit={async (values, actions) => {
              await addFridgeFood(values);
              actions.resetForm();
            }}
            innerRef={formRef}
          >
            <Form>
              <Field
                type="text"
                id="name"
                name="name"
                className="border-gray border-4"
                placeholder="Add an ingredient"
              />
              <button class="btn-small btn-blue border-b-4 border-r-4 border-sky-700 ml-8" type="submit" label="Add">
                Add
              </button>
              <div className="flex flex-col mt-6">
                <p>Select a diet (optional)</p>
                <Field name="diet"  as="select" className="p-2">
                  <option value="*" >-</option>
                  <option value="pescatarian">Pescetarian</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="paleo">Paleo</option>
                </Field>
              </div>
            </Form>
          </Formik>
        </div>

        <div className="h-8" />

        <div className="mx-8">
          {fridgeFood.length > 0 ? (
            <IngredientList ingredients={fridgeFood} onDelete={deleteFridgeFood} />
          ) : (
            <p className="bg-slate-300 p-2 text-center">
              You don&apos;t have any ingredients listed currently. Add a few and start a search!
            </p>
          )}
        </div>

        <div className="h-4" />

        <div className="mx-auto">
          <Formik></Formik>
        </div>

        <div class="mx-auto mt-8">
          {loading === true ? (
            <p className="py-2 px-8 text-white bg-emerald-900 font-bold">Loading...</p>
          ) : (
            <button
              class="btn btn-green border-b-4 border-emerald-600 flex"
              label="Search Page"
              onClick={async () => {
                search();
              }}
            >
              Search for Recipes
            </button>
          )}
        </div>

        <div className="h-8" />
      </div>
    </>
  );
}

// Get list of ingredients with GSSP; faster re-load if ingredients doesn't change.
export async function getServerSideProps() {
  const ingredientArray = [];
  const response = await axios.get("http://localhost:3000/api/food-get");
  const ingredients = await response.data;
  for (let item of ingredients) {
    ingredientArray.push(item.name);
  }

  return { props: { ingredients: ingredientArray } };
}
