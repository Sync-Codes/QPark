const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://bhavya:bhavya@cluster0.4vjhf8h.mongodb.net/test';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const db = client.db('orion');
        const users = db.collection('users');

        // const query = { vehnum: "DL10170" };
        // const user = await users.findOne(query);

        const user = {
            vehnum: "DL10170",
            history: [
              {
                "mallname": "V3S Mall",
                "date": "21/01/2023",
                "timein": "3:53:42",
                "timeout": "4:30:03",
                "fare": 23
              }
            ]
          }
          const result = await users.insertOne(user);
          console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);