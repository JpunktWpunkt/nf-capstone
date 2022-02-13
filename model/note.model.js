import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
	content: String,
	userId: String,
});

export default mongoose.models.Note || mongoose.model("Note", noteSchema);
