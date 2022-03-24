// Imports
import dotenv from 'dotenv';
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

// Setup
dotenv.config({ path: './secret.env' });
const router = express.Router();

const uri = `mongodb+srv://great_guy96:${process.env.MONGO_PASSWORD}@baddle-dev.coexs.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
	serverApi: ServerApiVersion.v1
});

// Route
router.get('/', async (req, res) => {
	const query = req.query;

	// Check for error
	if (query.error) {
		res.redirect(302, process.env.WEBSITE + '/login?error=UNKNOWN_GOOGLE');
		return;
	}

	// Check for invalid states
	if (query.hd !== 'chatham-nj.org') {
		res.redirect(302, process.env.WEBSITE + '/login?error=SCHOOL_ACCOUNT');
		return;
	} else if (query.state !== window.localStorage.getItem('googleAuthState')) {
		res.redirect(302, process.env.WEBSITE + '/login?error=INVALID_SESSION');
		return;
	}

	// Login
	const code = query.code;

	//res.redirect(301, process.env.WEBSITE + '/login/callback?');
});

export default router;
