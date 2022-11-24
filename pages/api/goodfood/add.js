import connectDB from "../../../db/connectDB"
import BadFood from "../../../db/model"


/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */
export default async function addGoodFood(req, res){
  const name = req.body
  await connectDB()
  await BadFood.create({ name: name })
  res.status(201).send(`Successfully added ingredient ${name}`)
}