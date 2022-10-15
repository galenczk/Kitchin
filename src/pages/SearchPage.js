// Import dependencies
import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Import components
import Button from "../components/Button";
import IngredientList from "../components/IngredientList";
import Ingredient from "../components/Ingredient";

// Page function.
export default function SearchPage() {
  // Using Formik to handle the search form.
  const formik = useFormik({
    initialValues: {
      foodSearch: "",
    },
  });

  const [ingredients, setIngredients] = useState(["rice", "soup"]);

  // Add ingredients function.
  function addIngredient() {
    setIngredients([...ingredients, formik.values.foodSearch]);
  }

  // Navigate to handle page navigation.
  const navigate = useNavigate();
  return (
    <>
      <h1>Add ingredients for recipe search</h1>
      <form>
        <input
          type="search"
          id="foodSearch"
          name="foodSearch"
          placeholder="Search for ingredients..."
          onChange={formik.handleChange}
          value={formik.values.foodSearch}
        />
        <Button type="button" label="Add" onClick={addIngredient} />
      </form>
      <div id="addedList">
        <IngredientList ingredients={ingredients} />
      </div>

      <Button
        label="Change My Preferences"
        onClick={() => navigate("/preferences")}
      />

      <Button
        label="Begin Search"
        onClick={() => {
          navigate("/results");
        }}
      />
    </>
  );
}
