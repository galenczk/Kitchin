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
      <div class="flex flex-col bg-slate-500 w-3/4 mt-24 items-center min-h-[400px] h-1/2">
        <div class=" text-center">
          <h1 class="text-3xl mt-12">Welcome to kitchin</h1>
          <h2 class="text-xl mt-6">The helpful chef app</h2>
        </div>

        <div class="flex justify-between w-full items-center place-self-start p-4 mt-auto">
          <Button
            class="btn btn-blue"
            label="My Preferences"
            onClick={() => navigate("/preferences")}
          />

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
