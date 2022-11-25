import connectDB from "../../../db/connectDB";
import FridgeFood from "../../../db/fridgeModel";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function getBadFood(req, res) {
  await connectDB();
  const food = await FridgeFood.find();
  res.status(200).json(food)
}
