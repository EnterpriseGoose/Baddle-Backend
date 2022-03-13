import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const router = express.Router();

console.log('index route');
const uri = `mongodb+srv://great_guy96:${process.env.MONGO_PASSWORD}@baddle-dev.coexs.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	serverApi: ServerApiVersion.v1
});

router.get('/', async (req, res) => {
	client.connect((err) => {
		console.log(err);
		const collection = client.db('test').collection('test_collection');
		// perform actions on the collection object
		console.log(collection);
		console.log(collection.collectionName);
		client.close();
	});
	res.send({ hello: 'world' });
});

export default router;
