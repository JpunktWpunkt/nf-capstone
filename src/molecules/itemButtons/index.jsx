import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import React, { useState } from "react";

const btn = {
	display: "flex",
	width: "100px",
	height: "100px",
	left: 0,
	fontSize: "0.9rem",
	margin: "5px",
};

const ItemButtons = () => {
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

	//sobald der fetch angekommen ist, wird der State von der Component verändert und bewirkt damit ein neurendern der component
	return (
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
	);
};

export default ItemButtons;
