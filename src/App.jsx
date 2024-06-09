import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRequestTodo } from "./store/asynk/asynkRequest";
import Wrapper from "./components/Wrapper";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getRequestTodo());
	}, []);

	return <Wrapper />;
}

export default App;
