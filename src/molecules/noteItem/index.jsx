import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import axios from "axios";

const field = {
	display: "flex",
	flexDirection: "center",
	backgroundColor: "#EDAE49",
	borderRadius: "0 0 0 0",
};

const btnDelete = {
	backgroundColor: "#D1495B",
	borderRadius: "0 0 0 0",
	/*		display: "flex",
		position: "fixed",
		width: "100vw",
		zIndex: 1,
		left: 0,
		fontSize: "1.5rem",
		bottom: "3.5rem",
		background: "linear-gradient( 45deg, #5B764A 50%, #30638E 100%)",
		padding: "0.5rem 1rem",*/
};

const btnSave = {
	borderRadius: "0 0 6px 6px",
	/*	width: "100vw",
	fontSize: "1rem",
	background: "primary",
	padding: "0.5rem 1rem",*/
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
			<Button sx={{ ...btnDelete }} onClick={handleDelete}>
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
					<Button type="submit" sx={{ ...btnSave }}>
						Save
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default NoteItem;
