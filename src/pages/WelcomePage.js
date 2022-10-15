// Import dependencies.
import React from "react";
import { useNavigate } from "react-router-dom";

// Import components.
import Button from "../components/Button";

// Page function.
export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to kitchin</h1>
      <h2>The helpful chef app</h2>
      <Button label="Begin Search" onClick={() => navigate("/search")} />
      <Button
        label="My Preferences"
        onClick={() => navigate("/preferences")}
      />
    </>
  );
}

