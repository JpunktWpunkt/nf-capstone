import { useRouter } from "next/router";
import React from "react";

const Page = () => {
	const { query } = useRouter();
	return <div>Hallo {query.username}</div>;
};

export default Page;
