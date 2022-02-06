import { useRouter } from "next/router";
import React from "react";
import Layout from "../../../organisms/layout";

const Page = () => {
	const { query } = useRouter();
	return (
		<Layout>
			<div>Hallo {query.name}</div>
		</Layout>
	);
};

export default Page;
