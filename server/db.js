import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017/TodoApp';
const client = new MongoClient(url);


async function connectDb() {
  // Use connect method to connect to the server
 try {
  await client.connect();
  const db = client.db();
  console.log('DataBase Connected successfully to server');
  return db;
 } catch (error) {
  res.status(500).send(error.message);
 }
}

process.on('SIGINT', async () => {
  await client.close();
  process.exit(0);
}); 

export default connectDb;