import React from "react";
import Header from "./header";

const Login = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Login;
