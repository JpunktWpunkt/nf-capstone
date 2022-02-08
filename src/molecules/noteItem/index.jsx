import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Card from "@mui/material/Card";

const NoteItem = ({ note }) => {
	return (
		<div>
			<Card variant="outlined" sx={{ maxWidth: 345 }}>
				<IconButton>
					<TextareaAutosize
						aria-label="empty textarea"
						placeholder="Put your Notes here"
						defaultValue={note.text}
						style={{ width: 400, height: 400 }}
					/>
				</IconButton>
			</Card>
		</div>
	);
};

export default NoteItem;
