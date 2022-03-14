import dotenv from 'dotenv';
dotenv.config({ path: './secret.env' });
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const router = express.Router();

const uri = `mongodb+srv://great_guy96:${process.env.MONGO_PASSWORD}@baddle-dev.coexs.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	serverApi: ServerApiVersion.v1,
});

router.get('/', async (req, res) => {
	try {
		await client.connect();
		const collection = client.db('test').collection('test_collection');
		console.log(collection.collectionName);
		console.log(await collection.countDocuments());
		client.close();
	} catch (err) {
		console.log(err);
		res.send({ it: "didn't work" });
		return;
	}

	res.send({ it: 'worked' });
});

export default router;
