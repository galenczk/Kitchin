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
  function addIngredient() {
    setIngredients([...ingredients, formik.values.foodSearch]);
  }

  // Page navigation
  const navigate = useNavigate();

  // DOM stuff
  return (
    <>
      <div class="flex flex-col bg-slate-500 w-2/3 mt-24 items-center">
        <div class="text-center">
          <h1 class="text-3xl mt-12">My Preferences</h1>
          <p class="text-xl mt-6">
            Add foods to the list below to exclude them from recipe searches.
          </p>
        </div>
        <div class=" flex flex-col p-8 items-center">
          <form class="flex flex-col items-center">
            <input
              type="search"
              id="foodSearch"
              name="foodSearch"
              placeholder="Search for ingredients..."
              onChange={formik.handleChange}
              value={formik.values.foodSearch}
            />
            <Button
              class="btn btn-blue mt-8"
              type="button"
              label="Add"
              onClick={addIngredient}
            />
          </form>
        </div>

        <div id="addedList">
          <IngredientList ingredients={ingredients} />
        </div>
        <Button
          class="btn btn-lg btn-green mb-24"
          label="Begin Search"
          onClick={() => navigate("/search")}
        />
      </div>
    </>
  );
}
