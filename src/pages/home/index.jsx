import Button from "@mui/material/Button";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../../organisms/layout";

// eslint-disable-next-line react/function-component-definition
const Page = ({ users }) => {
	console.log(users);
	return (
		<Layout>
			<Head>
				<title key="title">FamilyHub</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			{users.map(user => {
				return (
					<Link key={user._id} passHref href={`/user/${user._id}?name=${user.username}`}>
						<Button variant="outlined">{user.username}</Button>
					</Link>
				);
			})}
		</Layout>
	);
};
//serverside connection for security shit, the rest can be handle with axios i would try it on this point with getServerSideProps to learn this part !?
export async function getServerSideProps() {
	const { default: dbConnect } = await import("../../../database/index"); //dynamic promise Routing
	const { default: User } = await import("../../../model/User.model");
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
