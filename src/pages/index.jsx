import Button from "@mui/material/Button";
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
			<Link passHref href="/user/mama">
				<Button variant="outlined" type="button">Mama</Button>
			</Link>
			<br />
			<Link passHref href="/user/papa">
				<Button variant="outlined" type="button">Papa</Button>
			</Link>
			<br />
			<Link passHref href="/user/kind1">
				<Button variant="outlined" type="button">Kind 1</Button>
			</Link>
			<br />
			<Link passHref href="/user/kind2">
				<Button variant="outlined" type="button">Kind 2</Button>
			</Link>
			<br />
		</Layout>
	);
};

export default Page;
