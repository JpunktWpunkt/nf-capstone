import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
	id: String,
	userId: String,
	content: String,
});

export default mongoose.models.Note || mongoose.model("Note", noteSchema);
