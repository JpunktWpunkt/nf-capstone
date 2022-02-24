import { ButtonGroup } from "@mui/material";
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
	margin: "5px",
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
			<Box marginLeft="1em">
				<Stack spacing={2}>
					<Typography paddingLeft="0.2em" marginTop="1.5em" variant="h4">
						Shopping- List
					</Typography>
					<Grid strategy="flex" rowCount={{ s: 1, m: 2, l: 3, xl: 4 }}>
						<Box display="grid" flexWrap="wrap" sx={{ rowGap: 1 }}>
							<div>
								{items.map(item => {
									return (
										<ButtonGroup>
											<Button
												key={item._id}
												sx={{ ...btn }}
												variant="outlined"
												onClick={() => handleDelete(item._id)}
											>
												{item.name}
											</Button>
										</ButtonGroup>
									);
								})}
							</div>
						</Box>
					</Grid>
				</Stack>
			</Box>
			<AddShoppingList shoppingListState={setItems} />
		</Layout>
	);
};

export default Page;
