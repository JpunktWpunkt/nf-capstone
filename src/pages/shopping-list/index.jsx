import { ButtonGroup } from "@mui/material";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../organisms/layout";
import AddShoppingList from "../../molecules/addShoppingList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@contour/react";
import ItemButtons from "../../molecules/itemButtons";

const handleDelete = async () => {
	await axios.delete("/api/items", { name: item }); //1,Parameter aus der DB 2.Parameter aus useState
	const result = await axios.get("/api/items", { params: { name: item } });
	window.location.reload();
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
						<Box
							display="grid"
							flexWrap="wrap"
							justifyContent="center"
							sx={{ rowGap: 1 }}
						>
							<ItemButtons onClick={handleDelete} />
						</Box>
					</Grid>
				</Stack>
			</Box>
			<AddShoppingList />
		</Layout>
	);
};

export default Page;
