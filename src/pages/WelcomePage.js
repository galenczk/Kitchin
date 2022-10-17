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
    <div
      class="flex flex-col bg-slate-500 w-2/3 mt-24 items-center"
    >
      <div class=" text-center">
        <h1 class="text-3xl mt-12">Welcome to kitchin</h1>
        <h2 class="text-xl mt-6">The helpful chef app</h2>
      </div>

      <div class="mt-20 flex flex-col p-8 items-center">
        <Button
          class="btn btn-lg btn-green mb-24"
          label="Begin Search"
          onClick={() => navigate("/search")}
        />
        <Button
          class="btn btn-blue"
          label="My Preferences"
          onClick={() => navigate("/preferences")}
        />
      </div>
    </div>
      
    </>
  );
}
