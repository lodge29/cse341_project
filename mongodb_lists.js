/*
* week 1 lesson 1.1
* first attempt - different from lesson 1.2
* retrieve MongoDB database lists
* command: node mongodb_lists.js
*/

const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');

async function main(){

    const uri = process.env.MONGODB_URL;

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

/*
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};