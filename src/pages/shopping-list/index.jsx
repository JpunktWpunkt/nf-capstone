import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import AddShoppingList from "../../molecules/addShoppingList";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">Shopping-List</title>
				<meta key="description" name="description" content="Shopping-List" />
			</Head>
			<h1>Shopping-List</h1>
			<AddShoppingList />
		</Layout>
	);
};

export default Page;
