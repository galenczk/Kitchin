// Import dependencies
import React from "react";
import { useNavigate } from "react-router-dom";

//Import components
import Button from "../components/Button";

export default function RecipePage() {
  const navigate = useNavigate();
  return (
    <>
      <Button label="Search Again" onClick={() => navigate("/search")} />
      <Button label="Finished Cooking?" onClick={() => navigate("/")} />
    </>
  );
}

