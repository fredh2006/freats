const { MongoClient } = require('mongodb');

async function testConnection() {
    const uri = "mongodb+srv://fredhe56:ieatdogs69420@freats.tjuajhz.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Successfully connected to MongoDB.");

        // Test database access
        const db = client.db("freats");
        const collection = db.collection("posts");
        const testQuery = await collection.findOne({});
        
        if (testQuery) {
            console.log("Successfully queried the database. Sample document:");
            console.log(testQuery);
        } else {
            console.log("Connected but found no documents");
        }

    } catch (e) {
        console.error("Connection error:", e);
    } finally {
        await client.close();
    }
}

testConnection(); 