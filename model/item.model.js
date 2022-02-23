import mongoose from "mongoose";

const Schema = new mongoose.Schema({
	name: String,
	details: String,
	checked: Boolean,
	id: Number,
});

export default mongoose.models.Todo || mongoose.model("Todo", Schema);
