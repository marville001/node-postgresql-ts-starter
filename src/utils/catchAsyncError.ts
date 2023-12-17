import { RequestHandler } from "express";

const catchAsyncError = (fn: RequestHandler): RequestHandler => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch((error) => {
		console.log(error);
		res.status(500).json({
			status: 500,
			message: error.message,
			error: "InternalServerError",
			success: false,
			stack: error.stack,
		});
	});
};

export default catchAsyncError;