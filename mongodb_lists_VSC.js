/*
* retrieve MongoDB database lists
* command: node mongodb_lists.js
*/

const { MongoClient } = require('mongodb');

async function main(){

    const uri = require('./.env.MONGODB_URL_VSC');

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