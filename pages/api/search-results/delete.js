import connectDB from "../../../db/connectDB";
import SearchResults from "../../../db/searchModel";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function deleteFood(req, res) {
  await connectDB();
  const drop = await SearchResults.deleteMany({});
  res.status(200).send(`Successfully deleted SearchResults.`);
}
