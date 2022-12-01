import axios from "axios";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function searchRecipes(req, res) {
  const foodString = req.body.string;
  const diet = req.body.diet
  const recipes = await callAPI(foodString, diet);
  res.status(200).send(recipes);
}

// Call to Spoontacular API
async function callAPI(foodString, diet) {
  let options = {
    headers: {
      "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
    params: {
      query: "",
      instructionsRequired: "true",
      fillIngredients: "true",
      addRecipeInformation: "true",
      type: "main course",
      includeIngredients: foodString,
      diet: diet,
      ignorePantry: "true",
      number: "10",
      limitLicense: "false",
      ranking: "2",
    },
  };
  const response = await axios.get(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
    options
  );
  const results = response.data.results;
  return results;
}
