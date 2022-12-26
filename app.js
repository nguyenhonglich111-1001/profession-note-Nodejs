const { MongoClient } = require("mongodb");
require("dotenv").config();

PERSONAL_MONGODB_CLIENT_PASSWORD = process.env.PERSONAL_MONGODB_CLIENT_PASSWORD;
PERSONAL_MONGODB_CLIENT_USERNAME = process.env.PERSONAL_MONGODB_CLIENT_USERNAME;
// Connection URL
const url = `mongodb+srv://${PERSONAL_MONGODB_CLIENT_USERNAME}:${PERSONAL_MONGODB_CLIENT_PASSWORD}@personal.r7jxpl0.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");

    const codingDB = client.db('coding')

    var cardDocs = codingDB.collection('cards')

    const findResult = await cardDocs.find({}).toArray();
    console.log('Found documents =>', findResult);

    return "done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
