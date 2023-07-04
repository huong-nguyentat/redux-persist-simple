import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { increment, decrement } from "./slice/homePageSlice";

const HomePage = () => {
	const dispatch = useDispatch();
	const count = useSelector((state: RootState) => state.home.count);
	return (
		<div>
			<h3>{count}</h3>
			<div className="btn" style={{ display: "flex" }}>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>
		</div>
	);
};

export default HomePage;
