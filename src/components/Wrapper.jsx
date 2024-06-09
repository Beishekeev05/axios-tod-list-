import React, { useState } from "react";
import Create from "./Create";
import { Box, Button, styled } from "@mui/material";
import TodoList from "./TodoList";
import Update from "./Update";
import { useSelector } from "react-redux";

const Wrapper = () => {
	const [openModal, setOpenModal] = useState(false);
	const [openModalEdit, setOpenModalEdit] = useState(false);
	const [editValue, setEditValue] = useState({});
	const { isLoading } = useSelector((state) => state.todo);
	console.log(isLoading);
	const onClose = () => setOpenModal((prev) => !prev);
	const onCloseEdit = () => setOpenModalEdit((prev) => !prev);

	return (
		<>
			{!isLoading ? (
				<BoxMuiConatainer>
					<Button
						sx={{ margin: 1 }}
						type="button"
						variant="contained"
						onClick={onClose}>
						{openModal ? "Close" : "Open"}
					</Button>
					{openModal ? (
						<Create onClose={onClose} />
					) : (
						<TodoList setEditValue={setEditValue} onCloseEdit={onCloseEdit} />
					)}
					{openModalEdit && (
						<Update onCloseEdit={onCloseEdit} editValue={editValue} />
					)}
				</BoxMuiConatainer>
			) : (
				<div className="blockSpinner">
					<div className="spinner"></div>
				</div>
			)}
		</>
	);
};

export default Wrapper;
const BoxMuiConatainer = styled(Box)(() => {
	return {
		position: "relative",
	};
});
