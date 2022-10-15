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
      <h1>My Preferences</h1>
      <p>Add foods to the list below to exclude them from recipe searches.</p>
      <form>
        <input
          type="search"
          id="foodSearch"
          name="foodSearch"
          placeholder="Search for ingredients..."
          onChange={formik.handleChange}
          value={formik.values.foodSearch}
        ></input>
        <Button
          label="Add"
          //onCLick
        />
      </form>
      <div id="addedList">{/** Place IngredientsList.js here */}</div>
      <Button label="Begin Search" onClick={() => navigate("/search")} />
    </>
  );
}

