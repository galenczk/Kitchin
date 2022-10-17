// Import dependencies.
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Import components
import Button from "../components/Button";

// Page function.
export default function PreferencesPage() {
  // Formik to handle the search form.
  const formik = useFormik({
    initialValues: {
      foodSearch: "",
    },
  });

  const navigate = useNavigate();

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
            ></input>
            <Button
              class="btn btn-blue mt-8"
              label="Add"
              //onCLick
            />
          </form>
        </div>

        <div id="addedList">{/** Place IngredientsList.js here */}</div>
        <Button
          class="btn btn-lg btn-green mb-24"
          label="Begin Search"
          onClick={() => navigate("/search")}
        />
      </div>
    </>
  );
}
