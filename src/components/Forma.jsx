import { Box, Button, TextField, styled } from "@mui/material";
import React, { useEffect, useState } from "react";

const Forma = ({ onSubmit, onClose, data }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [url, setUrl] = useState("");
	const [id, setId] = useState("");

	useEffect(() => {
		if (data) {
			setEmail(data.email);
			setId(data.id);
			setPassword(data.password);
			setUrl(data.url);
		}
	}, [data]);

	const submitHandler = (e) => {
		e.preventDefault();
		const newValue = {
			email,
			password,
			url,
			id,
		};

		onSubmit(newValue);
		onClose();
		setEmail("");
		setPassword("");
		setUrl("");
	};

	return (
		<BoxMuiForma component="form" onSubmit={submitHandler}>
			<TextField
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="text"
			/>
			<TextField
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="text"
			/>
			<TextField
				value={url}
				onChange={(e) => setUrl(e.target.value)}
				type="url"
			/>
			<Button variant="contained" type="submit">
				Create
			</Button>
			<Button onClick={onClose} variant="outlined">
				Cansel
			</Button>
		</BoxMuiForma>
	);
};

export default Forma;
const BoxMuiForma = styled(Box)(() => {
	return {
		width: "38em",
		minHeight: "20em",
		backgroundColor: "white",
		borderRadius: 10,
		display: "flex",
		flexDirection: "column",
		gap: 20,
		padding: 20,
	};
});
