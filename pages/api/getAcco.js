import connectMongoDB from "@/libs/mongodb";
import Acco from "@/models/accountswip";
import clientPromise from "@/libs/mongoPromise";

export default async function handler(req,res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("information");
    const  {username,dorm,faculty,gender } = req.body ;
    const accountswip = await db.collection("acco").insertOne(
      {username,dorm,faculty,gender }
    )
    res.json(accountswip);
  }
  if (req.method === "GET") {
    await connectMongoDB();
    const accountswip = await Acco.find();
    return res.json({ accountswip});
  }
}