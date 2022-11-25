import connectDB from "../../../db/connectDB";
import SearchResults from "../../../db/searchModel";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function getSearchResults(req, res) {
  await connectDB();
  const recipes = await SearchResults.find();
  res.status(200).json(recipes)
}
