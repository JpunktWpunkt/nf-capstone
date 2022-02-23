import Stack from "@mui/material/Stack";
import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import AddShoppingList from "../../molecules/addShoppingList";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@contour/react";

const btn = {
	display: "flex",
	width: "100px",
	height: "100px",
	left: 0,
	fontSize: 14,
	margin: "5px",
};

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">Shopping-List</title>
				<meta key="description" name="description" content="Shopping-List" />
			</Head>
			<Box marginLeft="1em">
				<Stack spacing={2}>
					<Typography paddingLeft="0.2em" marginTop="1.5em" variant="h4">
						Shopping- List
					</Typography>
					<Grid
						strategy="flex"
						justifyContent="space-around"
						rowCount={{ s: 1, m: 2, l: 3, xl: 4 }}
					>
						<Button sx={{ ...btn }} variant="outlined">
							Banana
						</Button>
						<Button sx={{ ...btn }} variant="outlined">
							Apple
						</Button>
						<Button sx={{ ...btn }} variant="outlined">
							Milk
						</Button>
						<Button sx={{ ...btn }} variant="outlined">
							Beer
						</Button>
						<Button sx={{ ...btn }} variant="outlined">
							Chocolate
						</Button>
						<Button sx={{ ...btn }} variant="outlined">
							Flowers
						</Button>
						<Button sx={{ ...btn }} variant="outlined">
							Flowers
						</Button>
						<Button sx={{ ...btn }} variant="outlined">
							Flowers
						</Button>
						<Button sx={{ ...btn }} variant="outlined">
							Flowers
						</Button>
						<Button sx={{ ...btn }} variant="outlined">
							Flowers
						</Button>
					</Grid>
				</Stack>
			</Box>
			<AddShoppingList zIndex="1" />
		</Layout>
	);
};

export default Page;
