import { Grid } from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import axios from "axios";

const NoteItem = () => {
	const [title, setTitle] = useState("");
	const [titleError, setTitleError] = useState(false);

	const handleSubmit = submitEvent => {
		submitEvent.preventDefault();
		/*	console.log(submitEvent.target.elements.noteContent.value);*/
		setTitleError(false);

		if (title) {
			console.log("for post: ", title);
			const input = { title };
			axios.post("/api/notes", input);
		}
	};
	return (
		<Card className="noteItem" variant="outlined" sx={{ maxWidth: 345 }}>
			<Grid container>
				<Grid item xs={4}>
					<Button> - Delete note</Button>
				</Grid>
				<form onSubmit={handleSubmit}>
					<TextField
						multiline
						fullWidth
						required
						sx={{
							marginTop: 5,
							display: "block",
						}}
						variant="outlined"
						color="secondary"
						label="Put your notes here"
						rows={6}
						name="put"
						error={titleError}
						onChange={e => setTitle(e.target.value)}
					/>
					<Button type="submit">Save</Button>
				</form>
			</Grid>
		</Card>
	);
};

export default NoteItem;
