import clientPromise from "../../lib/mongodb";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function saveResults(req, res) {
  const name = req.body;
  try {
    const client = await clientPromise;
    const db = client.db("test");

    const fridgeFood = await db.collection("fridgefood").find().toArray();
    res.json(fridgeFood);
  } catch (error) {
    console.log(error);
  }
}
