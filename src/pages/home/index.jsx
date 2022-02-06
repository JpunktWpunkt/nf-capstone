import Button from "@mui/material/Button";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../../organisms/layout";


// eslint-disable-next-line react/function-component-definition
export default function Page({ users }) {
	return (
		<Layout>
			<Head>
				<title key="title">FamilyHub</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			{/*create const getStaticProps, will be changed later*/}
			{users.map((user) =>{
				return (
					<Link key={user.id} passHref href={`user/${user.id}?name=${user.name}`}>
						<Button variant="outlined">{user.name}</Button>
					</Link>
				)
			})}


		</Layout>
	);
};

export const getStaticProps = async () => {
	const users = [
		{
			id: 1,
			name: "Mama"
		},
		{
			id: 2,
			name: "Papa"
		},
		{
			id: 3,
			name: "Kind 1"
		},
		{
			id: 4,
			name: "Kind 2"
		},
		{
			id: 5,
			name: "Kind 3"
		}
	];

	return {
		props: {
			users
		}
	};

};
