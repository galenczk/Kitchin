import clientPromise from "../../lib/mongodb";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function saveResults(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("test");

    await db.collection("searchresults").deleteMany({});

    res.send("Successfully deleted all search results.");
  } catch (error) {
    console.log(error);
  }
}
