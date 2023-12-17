import { Request, Response } from "express";
import { IError } from "../utils/appError";

const globalErrorHandler = (err: IError, _req: Request, res: Response) => {

	res.status(err.statusCode || 500).json({
		success: false,
		status: err.status || 'error',
		error: err.name,
		message: err.message,
		stack: err.stack,
	});
};

export default globalErrorHandler;