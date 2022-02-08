import mongoose from "mongoose";
import process from "node:process";
import Todo from "../../../../model/todo.model";

const connect = async uri => {
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

void connect(process.env.MONGODB_URI);

const handler = async (request, response) => {
	const mongoResponse = await Todo.find();
	response.status(200).json(mongoResponse);
};

export default handler;
