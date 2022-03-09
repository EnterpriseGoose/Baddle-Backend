import { AddressInfo } from "express-ws/node_modules/@types/ws";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./src/routes/index";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

console.log(process.env);

const listener = app.listen(3100, function () {
  console.log("Listening on port " + (listener.address() as AddressInfo).port);
});

app.use("", indexRouter);
