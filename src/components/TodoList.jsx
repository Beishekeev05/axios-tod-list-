import { Box, styled, Paper, Typography, Avatar, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRequestTodo } from "../store/asynk/asynkRequest";

const TodoList = ({ onCloseEdit, setEditValue }) => {
	const { todos } = useSelector((state) => state.todo);

	const dispatch = useDispatch();

	const deleteItem = (id) => {
		dispatch(deleteRequestTodo(id));
	};
	const editId = (id) => {
		const update = todos.find((item) => item.id === id);
		setEditValue(update);
		onCloseEdit()
	};
	return (
		<BoxMuiTable>
			{todos?.map((item) => (
				<ItemContainer key={item.id}>
					<ItemInfo>
						<Typography variant="body1">{item.email}</Typography>
					</ItemInfo>
					<ItemInfo>
						<Typography variant="body1">{item.password}</Typography>
					</ItemInfo>
					<ItemAvatar>
						<Avatar
							src={item.url}
							alt={item.email}
							sx={{ width: 56, height: 56 }}
						/>
					</ItemAvatar>
					<Actions>
						<Button
							onClick={() => editId(item.id)}
							sx={{ margin: 1 }}
							variant="contained"
							color="primary">
							Edit
						</Button>
						<Button
							onClick={() => deleteItem(item.id)}
							sx={{ margin: 1 }}
							variant="contained"
							color="secondary">
							Delete
						</Button>
					</Actions>
				</ItemContainer>
			))}
		</BoxMuiTable>
	);
};

export default TodoList;

const BoxMuiTable = styled(Box)(({ theme }) => ({
	width: "750px",
	minHeight: "400px",
	backgroundColor: theme.palette.background.paper,
	borderRadius: theme.shape.borderRadius,
	boxShadow: theme.shadows[3],
	padding: theme.spacing(2),
	margin: "0 auto",
}));

const ItemContainer = styled(Paper)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: theme.spacing(2),
	padding: theme.spacing(2),
	borderRadius: theme.shape.borderRadius,
	boxShadow: theme.shadows[1],
}));

const ItemInfo = styled(Box)(({ theme }) => ({
	flex: 1,
	paddingRight: theme.spacing(2),
}));

const ItemAvatar = styled(Box)(({ theme }) => ({
	flex: "0 0 auto",
}));

const Actions = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
}));
