// db.js
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.DB_URI;
let database;

async function connectDB() {
  if (database) {
    return database; // Return the existing connection if it's already established
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
      useUnifiedTopology: true 
    }
  });

  try {
    await client.connect();
    database = client.db("mevn"); // Replace "mevn" with your database name
    console.log("Connected to MongoDB, database:", database.databaseName);

    const collections = await database.listCollections().toArray();
    console.log("Collections in database:", collections.map(col => col.name));
    return database;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    throw err;
  }
}

module.exports = { connectDB };
