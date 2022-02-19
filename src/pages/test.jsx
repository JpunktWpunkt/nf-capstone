import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import Image from "next/image";
import logo from "../images/logo_familyhub.png";
import logo2 from "../images/familiyhub300x300light_3d.png";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">FamilyHub</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<nav>
				<div className="logo">
					{/*			//logotest 1
					<Image
						src="/src/images/familyhub.gif"
						alt="Logo_familyhub"
						width="10"
						height="10"
						sizes="50%"
						layout="responsive"
						quality="100"
						priority="true"
						sx={{ mb: "5rem" }}
					/>*/}
				</div>
				//logotest 2
				<Image src={logo} alt="logo" display="flex" justifyContent="center" />
				<Image src={logo2} alt="logo" display="flex" justifyContent="center" />
				<Button variant="outlined" margin-top="50">
					Jessica
				</Button>
			</nav>
			Das hier ist ein Text, den anderen Quatsch kann ich oben nicht mehr sehen
		</Layout>
	);
};

export default Page;
