import mongoose from "mongoose";
import process from "node:process";
import Todo from "../../../model/todo.model";

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
//Poc so i should post information in the db

export default async function handler(request, response) {
	const myTodo1 = new Todo({ name: "Foo" });
	const myTodo2 = new Todo({ name: "Bar" });
	const myTodo3 = new Todo({ name: "FooBar" });

	await myTodo1.save();
	await myTodo2.save();
	await myTodo3.save();
	const mongoResponse = await Todo.find();
	response.status(200).json(mongoResponse);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
