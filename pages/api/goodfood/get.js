import connectDB from "../../../db/connectDB";
import BadFood from "../../../db/model";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function getBadFood(req, res) {
  await connectDB();
  const badFoods = await BadFood.find()
  res.status(200).json(badFoods)
}
