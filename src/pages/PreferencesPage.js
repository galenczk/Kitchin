// Import dependencies
import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Import components
import Button from "../components/Button";
import IngredientList from "../components/IngredientList";
import Ingredient from "../components/Ingredient";

// Page function.
export default function PreferencesPage() {
  // Formik to handle the search form.
  const formik = useFormik({
    initialValues: {
      foodSearch: "",
    },
  });

  const [ingredients, setIngredients] = useState([]);

  // Add ingredients function.
  function addIngredient(event) {
    setIngredients([...ingredients, formik.values.foodSearch]);
    formik.resetForm();
  }

  // Delete ingredient function
  function deleteIngredient(name) {
    setIngredients(ingredients.filter((item) => item !== name));
  }

  // Page navigation
  const navigate = useNavigate();

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
          <form
            class="flex "
            onSubmit={(event) => {
              event.preventDefault();
              addIngredient();
            }}
          >
            <input
              class="px-4"
              type="search"
              id="foodSearch"
              name="foodSearch"
              placeholder="Search for ingredients..."
              onChange={formik.handleChange}
              value={formik.values.foodSearch}
            />
            <Button class="btn btn-blue ml-8" type="button" label="Add" onClick={addIngredient} />
          </form>
        </div>

        <div id="addedList">
          <IngredientList ingredients={ingredients} onDelete={deleteIngredient} />
        </div>

        <div class="flex justify-end w-full p-4 mt-auto ">
          <Button class="btn btn-lg btn-green" label="Search Page" onClick={() => navigate("/search")} />
        </div>
      </div>
    </>
  );
}
