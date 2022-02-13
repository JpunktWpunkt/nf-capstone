import axios from "axios";
import * as React from "react";
import NoteItem from "../noteItem";

//runs client
const NoteList = ({ userId }) => {
	console.log("NoteList userId: ", userId);
	const [notes, setNotes] = React.useState(null);

	React.useEffect(() => {
		//TODO show loading spinner

		const items = async () => {
			const result = await axios.get("/api/notes", { params: { userId: userId } });
			setNotes(result.data);
		};
		items();
	}, [userId]); //wird als parameter hier eingefügt, um sie für den Axios zu nutzen

	if (!notes) {
		return null;
	}

	return (
		<>
			<h3>NoteList</h3>
			{notes.map(note => {
				return <NoteItem key={note._id} note={note} userId={userId} />;
			})}
		</>
	);
};

export default NoteList;
