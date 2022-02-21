import axios from "axios";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const btnAdd = {
	borderRadius: "6px 6px 0 0",
	display: "flex",
	position: "fixed",
	width: "100vw",
	zIndex: 1,
	left: 0,
	fontSize: "1.5rem",
	bottom: "4.5rem",
	background: "#5B764A",
	padding: "0.5rem 1rem",
};

const AddUserForm = () => {
	const [open, setOpen] = React.useState(false);
	const [users, setUsers] = React.useState("");

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	React.useEffect(() => {
		const items = async () => {
			const result = await axios.get("/api/users", { params: { userId: userId } });
			setUsers(result.user);
		};
	});
	const handleAddUser = async () => {
		await axios.post("/api/users", { userId: userId });
		const result = await axios.get("/api/users", { params: { userId: userId } });
		setNotes(result.data);

		if (users) {
			console.log("for post: ", users);
			axios.put("/api/users", { users: users, userId: userId, noteId: user._id });
		}
	};

	return (
		<div>
			<Button variant="contained" sx={{ ...btnAdd }} onClick={handleClickOpen}>
				+ Add New User
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>New User</DialogTitle>
				<DialogContent>
					<DialogContentText>Add a new pinboard user</DialogContentText>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Name"
						type="name"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleAddUser}>Enter User</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default AddUserForm;
