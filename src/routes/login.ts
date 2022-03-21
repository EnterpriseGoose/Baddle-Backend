import dotenv from 'dotenv';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
dotenv.config({ path: './secret.env' });

const router = express.Router();

const uri = `mongodb+srv://great_guy96:${process.env.MONGO_PASSWORD}@baddle-dev.coexs.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	serverApi: ServerApiVersion.v1,
});

router.post('/', async (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

export default router;
