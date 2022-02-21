import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../organisms/layout";
import Image from "next/image";
import logo from "../images/logo_familyhub.png";
import AddUserForm from "../molecules/addUserForm";

//TODO BTN und CRD Gap funktioniert nicht, evtl. Cards falsch umrandet, nochmal checken
const btn = {
	display: "flex",
	width: "80vw",
	rowGap: 10,
	left: 0,
	fontSize: 25,
	margin: "100",
};

// eslint-disable-next-line react/function-component-definition
const Page = ({ users }) => {
	console.log(users);
	return (
		<Layout>
			<Head>
				<title key="title">FamilyHub</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<Box display="flex" justifyContent="center">
				<Image src={logo} alt="logo" />
			</Box>
			<Box display="grid" flexWrap="wrap" justifyContent="center" sx={{ rowGap: 1 }}>
				{users.map(user => {
					return (
						<Link
							key={user._id}
							passHref
							href={`/user/${user._id}?name=${user.username}`}
						>
							<Button sx={{ ...btn }} variant="outlined">
								{user.username}
							</Button>
						</Link>
					);
				})}
			</Box>
			<Box marginTop="1em" display="flex" justifyContent="center">
				<Typography width="80vw" color="primary">
					These are the users of your peergroup, go in there and look at the notes or
					create some. Select here which user notes you want to view.{" "}
				</Typography>
				<AddUserForm />
			</Box>
		</Layout>
	);
};

//serverside connection for security shit, the rest can be handle with axios i would try it on this point with getServerSideProps to learn this part !?
export async function getServerSideProps() {
	const { default: dbConnect } = await import("../../database/index"); //dynamic promise Routing
	const { default: User } = await import("../../model/User.model");
	await dbConnect();
	try {
		const users = await User.find();
		console.log(users, typeof users, Array.isArray(users));
		return {
			props: {
				users: JSON.parse(JSON.stringify(users)),
			},
		};
	} catch (err) {
		console.log(err);
		return {
			props: {
				users: [],
			},
		};
	}
}

export default Page;
