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

  // Page navigation
  const navigate = useNavigate();

  // DOM stuff
  return (
    <>
      <div class="flex flex-col bg-slate-500 w-3/4 mt-24 items-center min-h-[400px]">
        <div class="text-center">
          <h1 class="text-3xl mt-12">My Preferences</h1>
          <p class="text-xl mt-6">
            Add foods to the list below to exclude them from recipe searches.
          </p>
        </div>
        <div class=" flex flex-col p-8 items-center">
          <form
            class="flex flex-col items-center"
            onSubmit={(event) => {
              event.preventDefault();
              addIngredient();
            }}
          >
            <input
              type="search"
              id="foodSearch"
              name="foodSearch"
              placeholder="Search for ingredients..."
              onChange={formik.handleChange}
              value={formik.values.foodSearch}
            />
            <Button
              class="btn btn-blue mt-4"
              type="button"
              label="Add"
              onClick={addIngredient}
            />
          </form>
        </div>

        <div id="addedList">
          <IngredientList ingredients={ingredients} />
        </div>

        <div class="flex justify-end w-full p-4">
          <Button
            class="btn btn-lg btn-green"
            label="Begin Search"
            onClick={() => navigate("/search")}
          />
        </div>
      </div>
    </>
  );
}
