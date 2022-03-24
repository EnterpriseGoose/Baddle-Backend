import { AddressInfo } from 'ws';
import express, { NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';

import indexRouter from './src/routes/index';
import loginRouter from './src/routes/login';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json({ strict: false, type: 'json' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const listener = app.listen(3100, function () {
	console.log(
		'Listening on port ' + (listener.address() as AddressInfo).port
	);
});

app.use('/', indexRouter);
app.use('/login', loginRouter);
