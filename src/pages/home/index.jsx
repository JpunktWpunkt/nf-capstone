import Button from "@mui/material/Button";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">FamilyHub</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<Link passHref href="/user/mama">
				<Button variant="outlined">Chaosqueen</Button>
			</Link>
			<br />
			<Link passHref href="/user/papa">
				<Button variant="outlined">Master of Desaster</Button>
			</Link>
			<br />
			<Link passHref href="/user/kind1">
				<Button variant="outlined">Kind 1</Button>
			</Link>
			<br />
			<Link passHref href="/user/kind2">
				<Button variant="outlined">Kind 2</Button>
			</Link>
			<br />
			<Link passHref href="/user/kind3">
				<Button variant="outlined">Kind 3</Button>
			</Link>
			<br />
			<Link passHref href="/profile/add">
				<Button variant="outlined">Add new User</Button>
			</Link>

		</Layout>
	);
};

export default Page;
