import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
	name: String,
	isChecked: Boolean,
});

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
