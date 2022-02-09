import mongoose from "mongoose";
import process from "node:process";
import Todo from "../../../../model/todo.model";
import dbConnect from "../../../../database/index";

/*const connect = async uri => {
	if (!uri) {
		throw new Error("No uri was provided");
	}
	try {
		console.log("Connecting to MongoDB");
		await mongoose.connect(uri);
	} catch (error_) {
		console.error(error_);
		throw new Error(error_);
	}
};

void connect(process.env.MONGODB_URI);*/

const handler = async (request, response) => {
	const { method } = request;
	await dbConnect;

	switch (method) {
		case "GET":
			try {
				const mongoResponse = await Todo.find();
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
			}
			break;

		case "POST":
			try {
				const mongoResponse = await Todo.create(request.body);
				response.status(200).json(mongoResponse);
			} catch (err) {
				console.log(err);
			}
			break;

		default:
			response.status(404).send("not found");
	}
};

export default handler;
