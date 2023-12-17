import cors from "cors";
import * as dotenv from 'dotenv';
import express from "express";
import Logger from "./logger";

import globalErrorHandler from "./middleware/globalErrorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;


// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.status(200).json({ status: "OK", message: "Server running! :)" });
});

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.all("*", (req, res, next) => {
	res.status(404).send({ status: 404, message: `Can't find ${req.originalUrl} on the server` });
});

// error handling middleware
app.use(globalErrorHandler);

app.listen(PORT, () => {
	Logger.info(`🚀 App running on: http://localhost:${PORT}`);
});