import dotenv from 'dotenv';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

import callbackRouter from './callback';

dotenv.config({ path: './secret.env' });
const router = express.Router();

const uri = `mongodb+srv://great_guy96:${process.env.MONGO_PASSWORD}@baddle-dev.coexs.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	serverApi: ServerApiVersion.v1
});

router.post('/', async (req, res) => {
	console.log(req.params);
	//res.redirect(301, process.env.WEBSITE + '/login/callback?');
});

router.use('/callback', callbackRouter);

export default router;
