import Button from "@mui/material/Button";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Login from "../organisms/login";

const Page = () => {
	return (
		<Login>
			<Head>
				<title key="title">FamilyHub</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<Link passHref href="/home">
				<Button variant="outlined">Login</Button>
			</Link>
		</Login>
	);
};

export default Page;
