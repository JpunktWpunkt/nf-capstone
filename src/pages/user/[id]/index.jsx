import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React from "react";
import NoteList from "../../../molecules/noteList";
import Layout from "../../../organisms/layout";

const Page = () => {
	const { query } = useRouter();

	return (
		<Layout>
			<Typography marginLeft="0.5em" marginTop="0.5em" color="primary">
				Hi {query.name},
			</Typography>
			<NoteList userId={query.id} />
		</Layout>
	);
};

export default Page;
