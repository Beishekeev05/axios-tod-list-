import React from "react";
import Forma from "./Forma";
import { Box, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { postRequestTodo } from "../store/asynk/asynkRequest";

const Create = ({onClose}) => {
	const dispatch = useDispatch();
	const addTodo = (data) => {
		dispatch(postRequestTodo(data));
	};
	return (
		<BoxMuiContainer>
			<Forma onClose={onClose} onSubmit={addTodo} />
		</BoxMuiContainer>
	);
};

export default Create;
const BoxMuiContainer = styled(Box)(() => {
	return {
		width: "100vw",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0,0,0,0.65)",
		position: "absolute",
		top: 0,
	};
});
