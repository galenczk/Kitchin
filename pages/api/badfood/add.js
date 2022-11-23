import mongoose from "mongoose"
import connectDB from "../../../db/connectDB"
import BadFood from "../../../db/model"


/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */
export default async function addBadFood(req, res){
  const name = req.body
  console.log(name)
  console.log("CONNECTING TO MONGO")
  await connectDB()
  console.log("CONNECTED TO MONGO")
  const badFood = await BadFood.create({ name: name })
  res.json(badFood)
}