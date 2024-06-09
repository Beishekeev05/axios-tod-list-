import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants/index";

export const getRequestTodo = createAsyncThunk(
	"todo/getRequestTodo",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${BASE_URL}/todo.json`);
			const result = response.data;
			const transform = [];
			for (let key in result) {
				transform.push({
					id: key,
					email: result[key].email,
					password: result[key].password,
					url: result[key].url,
				});
			}
			return transform;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
export const postRequestTodo = createAsyncThunk(
	"todo/postRequestTodo",
	async (data, { rejectWithValue, dispatch }) => {
		try {
			await axios.post(`${BASE_URL}/todo.json`, data);
			dispatch(getRequestTodo());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const deleteRequestTodo = createAsyncThunk(
	"todo/deleteRequestTodo",
	async (id, { rejectWithValue, dispatch }) => {
		try {
			await axios.delete(`${BASE_URL}/todo/${id}.json`);
			dispatch(getRequestTodo());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const putRequestTodo = createAsyncThunk(
	"todo/putRequestTodo",
	async (param, { rejectWithValue, dispatch }) => {
		try {
			await axios.put(`${BASE_URL}/todo/${param.id}.json`, param);
			dispatch(getRequestTodo());
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
