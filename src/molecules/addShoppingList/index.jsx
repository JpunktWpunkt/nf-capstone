import axios from "axios";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const btnAdd = {
	borderRadius: "6px 6px 0 0",
	display: "flex",
	position: "fixed",
	width: "100vw",
	zIndex: 1,
	left: 0,
	fontSize: "1.2rem",
	bottom: "4.5rem",
	background: "#5B764A",
	padding: "0.5rem 1rem",
};

const AddShoppingList = () => {
	const [open, setOpen] = React.useState(false);
	const [item, setItem] = React.useState(null);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleAddUser = async () => {
		await axios.post("/api/items", { name: item }); //1,Parameter aus der DB 2.Parameter aus useState
		setOpen(false);
		window.location.reload();
	};

	return (
		<div>
			<Button variant="contained" sx={{ ...btnAdd }} onClick={handleClickOpen}>
				+ Add New Item
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
					<DialogContentText>Add a new Item to our Shopping-List </DialogContentText>
					<TextField
						autoFocus
						fullWidth
						margin="dense"
						id="name"
						label="Name"
						type="name"
						variant="standard"
						onChange={e => setItem(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleAddUser}>Enter Item</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default AddShoppingList;
