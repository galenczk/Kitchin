// Import dependencies
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios"

// Import components
import IngredientList from "./components/IngredientList";
import Ingredient from "./components/Ingredient";

// Page function.
export default function PreferencesPage() {
  const [ingredients, setIngredients] = useState([]);

  // Add ingredients function.
  async function addIngredient(values) {
    console.log(values)
    await fetch("http://localhost:3000/api/badfood/add", {
      method: "POST",
      body: values.name
    })
    
  }

  // Delete ingredient function
  function deleteIngredient(name) {
  }

  // DOM return 
  return (
    <>
      <div class="flex flex-col bg-white w-3/4 mt-24 items-center min-h-[400px]">
        <div class="text-center">
          <h1 class="text-3xl mt-12">My Preferences</h1>
          <h3 class="mt-6">
            Enter an ingredient that you would like to avoid and click "Add" to add it to your exclusion list. <br />{" "}
            Recipes using these ingredients will not be included in your search results.
            <br />
            Don't worry! If you make a mistake, click the "delete" button next to an ingredient to remove it from the
            list.
          </h3>
          <h3 class="mt-4">When you are done adding ingredients to exclude, click on "Search Page" to continue.</h3>
        </div>
        <div class=" flex flex-col p-8 items-center">
          
          <Formik
            initialValues={{
              name: "",
            }}
            onSubmit={async (values) =>{
              addIngredient(values)
            }}
          >
            <Form>
              <Field type="text" id="name" name="name" className="border-gray border-4" placeholder="Ingredient"/>
              <button class="btn btn-blue ml-8" type="submit" label="Add">Add</button>
            </Form>
          </Formik>
          
            
        </div>

        <div id="addedList">
          <IngredientList ingredients={ingredients} onDelete={deleteIngredient} />
        </div>

        <div class="flex justify-end w-full p-4 mt-auto ">
          <button class="btn btn-lg btn-green" label="Search Page" onClick={() => navigate("/search")} >Search Page</button>
        </div>
      </div>
    </>
  );
}
