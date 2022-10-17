// Import dependencies
import React, { useState } from "react";
import { setIn, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Import components
import Button from "../components/Button";
import IngredientList from "../components/IngredientList";
import Ingredient from "../components/Ingredient";

// Page function.
export default function SearchPage() {
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
    formik.resetForm();
  }

  // Delete ingredient function
  function deleteIngredient(name){
    setIngredients(ingredients.filter(item => item !== name))
}

  // Page navigation.
  const navigate = useNavigate();

  // DOM stuff
  return (
    <>
      <div class="flex flex-col bg-slate-500 w-3/4 mt-24 items-center min-h-[400px]">
        <h1 class="text-3xl mt-12">Add ingredients to recipe search</h1>

        <div class="flex flex-col p-8 items-center">
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

        <div  id="addedList">
          <IngredientList
            ingredients={ingredients}
            onDelete={deleteIngredient}
          />
        </div>

        <div class="flex justify-between w-full items-center place-self-start p-4 mt-auto">
          <Button
            class="btn btn-blue"
            label="My Preferences"
            onClick={() => navigate("/preferences")}
          />

          <Button
            class="btn btn-lg btn-green justify-self-end"
            label="Begin Search"
            onClick={() => {
              navigate("/results");
            }}
          />
        </div>
      </div>
    </>
  );
}
