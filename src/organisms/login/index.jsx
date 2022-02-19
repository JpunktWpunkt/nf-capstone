import Box from "@mui/material/Box";
import React from "react";
import Header from "./header";

const Login = ({ children }) => {
	return (
		<>
			<Header />
			<Box marginTop="8em" marginBottom="8em">
				{children}
			</Box>
		</>
	);
};

export default Login;
