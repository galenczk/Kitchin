// Import dependencies
import React from "react";
import { useNavigate } from "react-router-dom";

// Import components
import Button from "../components/Button";

export default function ResultsPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Recipes</h1>
      <div className="recipeList">{/** Place RecipeList.js here */}</div>
      <Button label="Search Again" onClick={() => navigate("/search")} />
      <Button
        label="Change My Preferences"
        onClick={() => navigate("/preferences")}
      />
    </>
  );
}

