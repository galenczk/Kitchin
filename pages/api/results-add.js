import clientPromise from "../../lib/mongodb"


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