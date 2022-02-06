import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../../../organisms/layout";


const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">FamilyHub</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<br />
			<TextField id="outlined-basic" label="Username" variant="outlined" />
			<br />
			<br />
			<TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
			<br />
			<br />
			<Link passHref href="/home"><Button variant="outlined">Add new User</Button>
			</Link>
		</Layout>
	);
};

export default Page;
