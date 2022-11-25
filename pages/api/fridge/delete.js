import connectDB from "../../../db/connectDB";
import FridgeFood from "../../../db/fridgeModel";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function deleteResults(req, res) {
  const name = req.body;
  await connectDB();
  const drop = await FridgeFood.deleteOne({ name: name });
  res.status(200).send(`Successfully deleted ingredient ${name}`);
}