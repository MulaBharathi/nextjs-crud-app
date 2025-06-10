import connectToDatabase from "./lib/mongodb.js";

async function testConnection() {
  try {
    const db = await connectToDatabase();
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Connection failed:", error);
  }
}

testConnection();

