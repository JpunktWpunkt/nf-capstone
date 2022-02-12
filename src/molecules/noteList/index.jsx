import axios from "axios";
import * as React from "react";
import NoteItem from "../noteItem";

//runs client
const NoteList = ({ userId }) => {
	console.log("NoteList userId: ", userId);
	const [notes, setNotes] = React.useState(null);

	React.useEffect(() => {
		//TODO show loading spinner

		axios.get("/api/notes").then(response => {
			console.log(response);
			setNotes(response.data);
		});
	}, []);

	if (!notes) return null;

	return (
		<>
			<h3>NoteList</h3>
			{notes.map(note => {
				return <NoteItem key={note.id} note={note} userId={userId} />;
			})}
		</>
	);
};

export default NoteList;
