import connectToDatabase from "@/lib/mongodb"; // or wherever your connection file is
import Item from "@/models/Item"; // your Mongoose model

export async function GET(req) {
  try {
    await connectToDatabase();
    const items = await Item.find({});
    return new Response(JSON.stringify(items), { status: 200 });
  } catch (err) {
    console.error("API error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
