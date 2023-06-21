const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "<mongodb-uri>";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = await client.db("<database>");
    const collection = db.collection("<collection>");

    const result = await collection.aggregate().toArray();

    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
