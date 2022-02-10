import { Grid } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const NoteItem = ({ note }) => {
	const handleSubmit = submitEvent => {
		submitEvent.preventDefault();
		console.log(submitEvent.target.elements.kackwurst.value);
	};
	return (
		<Card className="noteItem" variant="outlined" sx={{ maxWidth: 345 }}>
			<Grid container>
				<Grid item xs={4}>
					<Button> - Delete note</Button>
				</Grid>
				<form onSubmit={submitEvent => handleSubmit(submitEvent)}>
					<TextareaAutosize
						name="kackwurst"
						aria-label="empty textarea"
						placeholder="Put your Notes here"
						defaultValue={note.text}
						style={{ width: 350, height: 350 }}
					/>
					<Button type="submit">Save</Button>
				</form>
			</Grid>
		</Card>
	);
};

export default NoteItem;
