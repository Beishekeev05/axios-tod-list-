import React from "react";
import Forma from "./Forma";
import { useDispatch } from "react-redux";
import { putRequestTodo } from "../store/asynk/asynkRequest";
import { Box, styled } from "@mui/material";

const Update = ({ editValue, onCloseEdit }) => {
	const dispatch = useDispatch();

	const upDate = (data) => {
		dispatch(putRequestTodo(data));
	};

	return (
		<BoxMuiContainer>
			<Forma onSubmit={upDate} data={editValue} onClose={onCloseEdit} />
		</BoxMuiContainer>
	);
};

export default Update;
const BoxMuiContainer = styled(Box)(() => {
	return {
		position: "absolute",
		top: "30%",
		left: "30%",
	};
});
