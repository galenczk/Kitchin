import clientPromise from "../../../lib/mongodb";

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

    await db.collection("fridgefoods").deleteOne({ name: name });

    res.send(`Successfully deleted ingredient ${name} `);
  } catch (error) {
    console.log(error);
  }
}
