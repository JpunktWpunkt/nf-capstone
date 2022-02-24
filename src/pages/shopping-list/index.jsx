import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../organisms/layout";
import AddShoppingList from "../../molecules/addShoppingList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@contour/react";

const btn = {
	display: "flex",
	width: "100px",
	height: "100px",
	left: 0,
	fontSize: "0.9rem",
	margin: "1px",
};

const Page = () => {
	const [items, setItems] = useState();
	//wird asyncron geladen
	React.useEffect(() => {
		const items = async () => {
			const result = await axios.get("/api/items");
			console.log("##########: " + result.data);
			setItems(result.data);
		};
		items();
	}, []);
	//solange items undefined ist, wird nichts gerendert
	if (!items) {
		return null;
	}

	const handleDelete = async itemId => {
		await axios.delete("/api/items", { params: { bratwurst: itemId } }); //1,Parameter aus der DB 2.Parameter aus useState
		const result = await axios.get("/api/items");
		setItems(result.data);
	};

	return (
		<Layout>
			<Head>
				<title key="title">Shopping-List</title>
				<meta key="description" name="description" content="Shopping-List" />
			</Head>
			<Box marginLeft="0.5em">
				<Stack spacing={2}>
					<Typography paddingLeft="0.2em" marginTop="1.5em" variant="h4">
						Shopping- List
					</Typography>
					<Grid strategy="grid" colCount={{ s: 3, m: 3, l: 4, xl: 4 }}>
						{items.map(item => {
							return (
								<Button
									key={item._id}
									sx={{ ...btn }}
									variant="outlined"
									onClick={() => handleDelete(item._id)}
								>
									{item.name}
								</Button>
							);
						})}
					</Grid>
				</Stack>
			</Box>
			<AddShoppingList shoppingListState={setItems} />
		</Layout>
	);
};

export default Page;
