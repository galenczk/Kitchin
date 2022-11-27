import clientPromise from "../../lib/mongodb";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function saveResults(req, res) {
  const name = req.body;
  console.log(name)
  try {
    const client = await clientPromise;
    const db = client.db("test");

    const response = await db.collection("fridgefood").deleteOne(name);
    console.log(response)

    res.send(`Successfully deleted ingredient ${name} `);
  } catch (error) {
    console.log(error);
  }
}
