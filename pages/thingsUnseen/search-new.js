// Import dependencies
import { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import axios from "axios";

// Import components
import IngredientList from "../components/IngredientList";

// Page function.
export default function SearchPage() {

  const router = useRouter();

  // DOM return
  return (
    <>
      <div class="flex flex-col bg-white w-3/4 mt-24 items-center min-h-[400px] text-center">
        <h1 class="text-3xl mt-12">Add ingredients to recipe search</h1>

        <div class="flex flex-col p-8 items-center">
          <Formik
            initialValues={{
              name: "",
            }}
            onSubmit={async (values) => {
              addIngredient(values.name);
            }}
          >
            <Form>
              <Field type="text" id="name" name="name" className="border-gray border-4" placeholder="ingredient" />
              <button
                className="btn btn-blue ml-8"
                type="text"
                onClick={() => {
                  searchRecipes();
                }}
              >
                Add Ingredient
              </button>
            </Form>
          </Formik>
        </div>

        <div id="addedList">
          <IngredientList ingredients={goodFood} onDelete={deleteIngredient} />
        </div>

        <div class="flex justify-between w-full items-center place-self-start p-4 mt-auto">
          <button class="btn btn-blue" onClick={() => router.push("/preferences")}>
            My Preferences
          </button>

          <button
            class="btn btn-lg btn-green justify-self-end"
            onClick={() => {
              router.push("/results");
            }}
          >
            Begin Search
          </button>
        </div>
      </div>
    </>
  );
}
