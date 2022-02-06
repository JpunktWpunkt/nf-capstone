import Toolbar from "@mui/material/Toolbar";
import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Card from '@mui/material/Card';


// eslint-disable-next-line react/function-component-definition
export default function NoteItem({ note }) {
	return (
		<div>
			<Card variant="outlined" sx={{maxWidth: 345 }}>
				<TextareaAutosize aria-label="empty textarea" placeholder="Put your Notes here" defaultValue={note.text} style={{ width: 400, height: 400 }}/>
			</Card>
		</div>
	);
};


