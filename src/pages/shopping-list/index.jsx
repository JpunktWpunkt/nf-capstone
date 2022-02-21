import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import AddUserForm from "../../molecules/addUserForm";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">Shopping-List</title>
				<meta key="description" name="description" content="Shopping-List" />
			</Head>
			<h1>Shopping-List</h1>
			<AddUserForm />
		</Layout>
	);
};

export default Page;
