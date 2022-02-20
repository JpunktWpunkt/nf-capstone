import { useRouter } from "next/router";
import React from "react";
import NoteList from "../../../molecules/noteList";
import Layout from "../../../organisms/layout";

const Page = () => {
	const { query } = useRouter();

	return (
		<Layout>
			<h3>Hi {query.name},</h3>
			<NoteList userId={query.id} />
		</Layout>
	);
};

export default Page;
