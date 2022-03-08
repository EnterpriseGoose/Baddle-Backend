import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const router = express.Router();
const uri =
	'mongodb+srv://great_guy96:<password>@baddle-dev.coexs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
	serverApi: ServerApiVersion.v1
});
client.connect((err) => {
	const collection = client.db('test').collection('devices');
	// perform actions on the collection object
	client.close();
});

router.use('/', () => {});

export default router;
