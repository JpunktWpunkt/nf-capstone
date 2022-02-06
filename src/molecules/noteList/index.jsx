import * as React from 'react';
import NoteItem from "../noteItem";



// eslint-disable-next-line react/function-component-definition
export default function NoteList({userId}) {
const notes = getNotes(userId);
	return (
		<>
			<h3>NoteList</h3>
			{notes.map((note) => {
				return (
				<NoteItem key={note.id} note={note} />
				);
			})}
		</>
	);
}
/*this is a placeholder for later fetching*/
function getNotes(userId) {
	console.log(userId);
	return [
		{
			id: 1,
			name: "Mama",
			text:"Lorem Ipsum"
		},
		{
			id: 2,
			name: "Papa",
			text:"Lorem Ipsum"
		},
		{
			id: 3,
			name: "Kind 1",
			text: "Lorem Ipsum"
		},
		{
			id: 4,
			name: "Kind 2",
			text: "Lorem Ipsum"
		},
		{
			id: 5,
			name: "Kind 3",
			text: "Lorem Ipsum"
		}
	];
}
