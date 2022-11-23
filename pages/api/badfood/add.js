import connectDB from "../../../db/connectDB"
import BadFood from "../../../db/model"


/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */
export default async function addBadFood(req, res){
  const name = req.body
  console.log("CONNECTING TO MONGO")
  await connectDB()
  console.log("CONNECTED TO MONGO")
  await BadFood.create({ name: name })
  console.log("INGREDIENT ADDED");
  res.status(201).send(`Successfully added ingredient ${name}`)
}