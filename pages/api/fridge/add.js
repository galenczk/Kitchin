import connectDB from "../../../db/connectDB"
import FridgeFood from "../../../db/fridgeModel";


/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */
export default async function addFood(req, res){
  const name = req.body
  await connectDB()
  await FridgeFood.create({ name: name })
  res.status(201).send(`Successfully added ingredient ${name}`)
}