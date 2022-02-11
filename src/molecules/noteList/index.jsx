import * as React from "react";
import NoteItem from "../noteItem";

//runs client
const NoteList = ({ userId }) => {
	const notes = getNotes(userId);
	return (
		<>
			<h3>NoteList</h3>
			{notes.map(note => {
				return <NoteItem key={note.id} note={note} />;
			})}
		</>
	);
};

/*this is a placeholder for later fetching*/
function getNotes(userId) {
	console.log("userid", userId);
	return [
		{
			id: 1,
			name: "Mama",
			text: "Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans",
		},
		{
			id: 2,
			name: "Papa",
			text: "Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen",
		},
		{
			id: 3,
			name: "Kind 1",
			text: "Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben.",
		},
		{
			id: 4,
			name: "Kind 2",
			text: "Eines Tages aber beschloß eine kleine Zeile Blindtext, ihr Name war Lorem Ipsum, hinaus zu gehen in die weite Grammatik. Der große Oxmox riet ihr davon ab, da es dort wimmele von bösen Kommata, wilden Fragezeichen und hinterhältigen Semikoli, doch das Blindtextchen ließ sich nicht beirren.",
		},
		{
			id: 5,
			name: "Kind 3",
			text: "Es packte seine sieben Versalien, schob sich sein Initial in den Gürtel und machte sich auf den Weg.",
		},
	];
}

export default NoteList;
