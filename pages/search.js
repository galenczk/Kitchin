// Import dependencies
import { useState, useEffect } from "react"
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";

// Import components
import IngredientList from "./components/IngredientList";

// Page function.
export default function SearchPage() {
  // Formik to handle the search form.

  const router = useRouter()
  const [goodFood, setGoodFood] = useState(["Rice", "Fish"]);
  
  const [goodFoodString, setGoodFoodString] = useState("")
  const [badFoodString, setBadFoodString] = useState("")


  // Add ingredients function.
  async function addIngredient(name) {
    if (goodFood.includes(name)){
      return
    }else{
      setGoodFood((goodFood) => [...goodFood, name])
    }
  }

  // Delete ingredient function
  async function deleteIngredient(name) {
    setIngredients(goodFood.filter((item) => item !== name));
  }
  
  // Builds a string of comma-separated foods to avoid for API call.
  async function buildGoodFoodString(){
    let newString = ""
    for (let item of goodFood){
      if (newString.length === 0){
        newString = goodFood[0]
      }else{
        newString += ", "
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
    console.log(data)
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
  
  async function searchRecipes(){
    buildGoodFoodString()
    console.log(goodFoodString)
    console.log(badFoodString)
    //const response = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch", {
    //  method: "GET",
    //  params: {
    //    type: "main course",
    //    query: "pasta",
    //    instructionsRequired: "true",
    //    fillIngredients: "true",
    //    addRecipeInformation: "true",
    //    includeIngredients: { goodFoodString },
    //    excludeIngredients: { badFoodString },
    //    ignorePantry: "true",
    //    limitLicence: "true",
    //  },
    //  headers: {
    //    "X-RapidAPI-Key": "c3b45144d2mshe0fec3e877b8518p1c5da8jsnb5a66dc57015",
    //    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    //  },
    //});
    //const data = await response.json()
    //console.log(data)
  }

  useEffect(()=>{
    buildBadFoodString()
    buildGoodFoodString()
  }, [])

  // DOM return
  return (
    <>
      <div class="flex flex-col bg-white w-3/4 mt-24 items-center min-h-[400px] text-center">
        <h1 class="text-3xl mt-12">Add ingredients to recipe search</h1>

        <h3 class="mt-4">
          Enter an ingredient that you have in your kitchen and click "Add" to add it to your search list.
          <br /> When you are done adding ingredients, click on "Begin Search" to see recipes including these
          ingredients.
          <br />
          If you make a mistake, click on the "delete" button next to the ingredient to remove it from the list.
        </h3>

        <div class="flex flex-col p-8 items-center">
          <Formik
            initialValues={{
              name: "",
            }}
            onSubmit={async (values)=>{
              addIngredient(values.name)
            }}
          >
            <Form>
              <Field type="text" id="name" name="name" className="border-gray border-4" placeholder="ingredient" />
              <button className="btn btn-blue ml-8" type="text" onClick={() => {searchRecipes()}}>Add</button>
            </Form>
          </Formik>
        </div>

        <div id="addedList">
          <IngredientList ingredients={goodFood} onDelete={deleteIngredient} />
        </div>

        <div class="flex justify-between w-full items-center place-self-start p-4 mt-auto">
          <button class="btn btn-blue" onClick={() => router.push("/preferences")}>My Preferences</button>

          <button
            class="btn btn-lg btn-green justify-self-end"
            onClick={() => {
              router.push("/results");
            }}
          >Begin Search</button>
        </div>
      </div>
    </>
  );
}
