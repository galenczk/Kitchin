import connectDB from "../../../db/connectDB";
import BadFood from "../../../db/model";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function deleteBadFood(req, res) {
  const name = req.body;
  await connectDB();
  const drop = await BadFood.deleteOne({ name: name });
  res.status(200).send(`Successfully deleted ingredient ${name}`);
}
