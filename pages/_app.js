import '../styles/globals.css'
import Layout from "./components/Layout"
import axios from "axios"

import { useState } from "react";

function CustomApp({ Component, pageProps, number }) {

  const [recipes, setRecipes] = useState()
  
  // Function for executing recipe search
  async function searchRecipes(foodString) {
    let options = {
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
      params: {
        query: "*",
        instructionsRequired: "true",
        fillIngredients: "true",
        addRecipeInformation: "true",
        includeIngredients: foodString,
        ignorePantry: "true",
        number: "10",
        limitLicense: "false",
        ranking: "2",
        offset: "0",
      },
    };
    const response = await axios.get(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
      options
    );
    const results = response.data.results;
    setRecipes(results)
    
    // Logging just for debugging
    const names = [];
    for (let result of results) {
      names.push(result.title);
    }
    console.log(names);
  }

  return (
    <Layout number={number}>
      <Component 
      {...pageProps}
      recipes={recipes}
      searchRecipes={searchRecipes}
      />
    </Layout>
  );
}

CustomApp.getInitialProps = async () => {
  const response = await axios.get("https://testmicro.vercel.app/");
  let number = await response.data;
  number = number % 10;
  return { number: number }
}

export default CustomApp