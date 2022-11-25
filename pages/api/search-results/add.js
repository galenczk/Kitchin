//import connectDB from "../../../db/connectDB"
//import SearchResults from "../../../db/searchModel"
//import mongoose from "mongoose"

import clientPromise from "../../../lib/mongodb"


/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */
export default async function saveResults(req, res){
  const recipes = req.body
  try{
    const client = await clientPromise
    const db = client.db("test")

    await db.collection("searchresults").deleteMany( {} )
    await db.collection("searchresults").insertOne({ recipes: recipes})

    res.send("Successfully added search results.")

  }catch (error){
    console.log(error)
  }
}




//export default async function saveResults(req, res){
//  //const SearchResults = mongoose.model("SearchResults")
//  const recipes = req.body
//  console.log(recipes)
//  await connectDB()
//  await SearchResults.deleteMany({});
//  await SearchResults.create({ recipes: recipes })
//  res.status(201).send(`Successfully added SearchResults ${recipes[0].title}`)
//}