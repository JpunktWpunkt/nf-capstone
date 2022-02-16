import Button from "@mui/material/Button";
import React from "react";
import Footer from "../footer";
import Header from "../header";
import { useSession, signIn } from "next-auth/react";
import HeaderLogin from "../login/header";

const Layout = ({ children }) => {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				<Header />
				<main>{children}</main>
				<Footer />
			</>
		);
	}
	return (
		<>
			<HeaderLogin />
			Not signed in <br />
			<Button onClick={() => signIn()}>Sign in</Button>
		</>
	);
};

export default Layout;
