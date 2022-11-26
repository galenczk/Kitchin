import axios from "axios";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function searchRecipes(req, res) {
  const foodString = req.body.string;
  const rng = await callRNG()
  const recipes = await callAPI(foodString, rng);
  res.status(200).send(recipes);
}

// Call to Spoontacular API
async function callAPI(foodString, rng) {
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
      type: "main course",
      includeIngredients: foodString,
      ignorePantry: "true",
      number: "10",
      limitLicense: "false",
      ranking: "2",
      //offset: rng,
    },
  };
  const response = await axios.get(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
    options
  );
  console.log(response.data);
  const results = response.data.results;
  return results;
}

async function callRNG() {
  const response = await axios.get("https://testmicro.vercel.app/");
  let number = await response.data;
  number = number % 20;
  return number;
}