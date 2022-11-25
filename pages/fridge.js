// Import dependencies
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import {useEffect, useState} from "react"
import axios from "axios";

// Import components
import IngredientList from "./components/IngredientList";

// Page function.
export default function PreferencesPage({ searchRecipes, recipes }) {

  const router = useRouter()
  const [fridgeFood, setFridgeFood] = useState([]);
  

  // Add ingredients
  async function addFridgeFood(values) {
    const response = await axios.post("http://localhost:3000/api/fridge/add", values.name)
    if(response.status === 201){
      getFridgeFood();
    }
  }

  // Delete ingredient 
  async function deleteFridgeFood(name) {
    const response = await axios.post("http://localhost:3000/api/fridge/delete", name)
    if(response.status === 200){
      getFridgeFood();
    };
  }

  // Get ingredients
  async function getFridgeFood() {
    const foodArray = [];
    const response = await axios.get("http://localhost:3000/api/fridge/get");
    const data = await response.data
    for (var item of data) {
      foodArray.push(item.name);
    }
    if(response.status === 200){
      setFridgeFood(foodArray)
    }
}

  // Builds string of ingredients for use in API call
  function buildFoodString(){
    let foodString = ""
    for (let food of fridgeFood){
      if (foodString.length === 0){
        foodString = fridgeFood[0].toString()
      }else{
        foodString += ", "
        foodString += food.toString()
      }
    }
    return foodString
  }

  // Calls API for search
  async function search(){
    const response = await axios.post("http://localhost:3000/api/recipe-search", {string: buildFoodString()} )
    const recipes =  response.data
    const loadResults = await axios.post("http://localhost:3000/api/search-results/add", recipes)
  }

  useEffect(()=>{
    getFridgeFood();
  }, [])

  // DOM return 
  return (
    <>
      <div class="flex flex-col bg-white w-3/4 mt-24 items-center min-h-[400px]">
        <div class="text-center">
          <h1 class="text-3xl mt-12">My Fridge</h1>
        </div>
        <div class=" flex flex-col p-8 items-center  min-w-full">
          
          <Formik
            initialValues={{
              name: "",
            }}
            onSubmit={async (values) =>{
              addFridgeFood(values)
            }}
          >
            <Form>
              <Field type="text" id="name" name="name" className="border-gray border-4" placeholder="Ingredient"/>
              <button class="btn btn-blue ml-8" type="submit" label="Add">Add</button>
            </Form>
          </Formik>
          
            
        </div>

        <div className="flex min-w-full justify-center">
          {fridgeFood.length > 0 ?
          <IngredientList ingredients={fridgeFood} onDelete={deleteFridgeFood} />
          : <p className="bg-slate-300 p-2">You don't have any ingredients listed currently.  Add a few to start!</p>
          }
        </div>

        <div class="flex justify-end w-full p-4 mt-auto ">
          <button class="btn btn-lg btn-green" label="Search Page" onClick={async () => {
            await search();
            //router.push("/results")
            }} >Search For Recipes</button>
        </div>

      </div>
    </>
  );
}
