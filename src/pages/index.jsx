import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">FamilyHub</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h1>FamilyHub</h1>

			<Link passHref href="/user/mama">
				<button type="button">Mama</button>
			</Link>
			<br />
			<Link passHref href="/user/papa">
				<button type="button">Papa</button>
			</Link>
			<br />
			<Link passHref href="/user/kind1">
				<button type="button">Kind 1</button>
			</Link>
			<br />
			<Link passHref href="/user/kind2">
				<button type="button">Kind 2</button>
			</Link>
			<br />
		</Layout>
	);
};

export default Page;
