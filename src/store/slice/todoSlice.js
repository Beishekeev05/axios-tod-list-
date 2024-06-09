import { createSlice } from "@reduxjs/toolkit";
import {
	deleteRequestTodo,
	getRequestTodo,
	postRequestTodo,
} from "../asynk/asynkRequest";

const initialState = {
	todos: [],
	isLoading: false,
	error: null,
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getRequestTodo.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getRequestTodo.fulfilled, (state, { payload }) => {
				state.todos = payload;
				state.isLoading = false;
			})
			.addCase(getRequestTodo.rejected, (state, { payload }) => {
				state.error = payload;
				state.isLoading = false;
			})
			.addCase(postRequestTodo.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(postRequestTodo.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(postRequestTodo.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(deleteRequestTodo.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteRequestTodo.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(deleteRequestTodo.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});
export default todoSlice.reducer;
