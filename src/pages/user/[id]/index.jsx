import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import NoteList from "../../../molecules/noteList";
import Layout from "../../../organisms/layout";
import Button from "@mui/material/Button";

const Page = () => {
	const { query } = useRouter();
	const handleAddNote = () => {
		axios.post("/api/notes", { userId: query.id });
		window.location.reload();
		console.log("page loaded");
	};
	return (
		<Layout>
			<div>Hallo {query.name}</div>
			<NoteList userId={query.id} />
			<Button onClick={handleAddNote}>+ Add Note</Button>
		</Layout>
	);
};

export default Page;
