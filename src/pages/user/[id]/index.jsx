import { useRouter } from "next/router";
import React from "react";
import NoteList from "../../../molecules/noteList";
import Layout from "../../../organisms/layout";

const Page = () => {
	const { query } = useRouter();
	return (
		<Layout>
			<div>Hallo {query.name}</div>
			<NoteList />
		</Layout>
	);
};

export default Page;
