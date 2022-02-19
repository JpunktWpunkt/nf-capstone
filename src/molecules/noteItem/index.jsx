import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import axios from "axios";

const field = {
	display: "flex",
	flexDirection: "column",
	backgroundColor: "#EDAE49",
};

const NoteItem = ({ userId, note, setNotes }) => {
	//parameter kommen vom parent noteList
	/*userID comes from getserversideprops home/ and note comes from noteList with axios, useState, useEffect*/
	console.log("NoteItem userId", userId);
	const [content, setContent] = useState("");
	const [contentError, setContentError] = useState(false);

	const handleSubmit = submitEvent => {
		submitEvent.preventDefault();
		/*	console.log(submitEvent.target.elements.noteContent.value);*/
		setContentError(false);

		if (content) {
			console.log("for post: ", content);
			axios.put("/api/notes", { content: content, userId: userId, noteId: note._id });
		}
	};

	const handleDelete = async () => {
		await axios.delete("/api/notes", { params: { noteId: note._id } });
		const result = await axios.get("/api/notes", { params: { userId: userId } });
		setNotes(result.data);
	};
	return (
		<Card className="noteItem" variant="outlined">
			<Button sx={{ display: "flex", backgroundColor: "#D1495B" }} onClick={handleDelete}>
				{" "}
				- Delete note
			</Button>
			<form onSubmit={handleSubmit}>
				<TextField
					multiline
					fullWidth
					required
					sx={{ ...field }}
					variant="outlined"
					color="secondary"
					rows={6}
					name="put"
					error={contentError}
					defaultValue={note.content}
					onChange={e => setContent(e.target.value)}
				/>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<Button type="submit">Save</Button>
				</div>
			</form>
		</Card>
	);
};

export default NoteItem;
