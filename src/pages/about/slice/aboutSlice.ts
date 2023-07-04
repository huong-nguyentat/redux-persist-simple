import { createSlice } from "@reduxjs/toolkit";

type AboutSliceType = {};
const initialState: AboutSliceType = {};

const aboutSlice = createSlice({
	name: "about",
	initialState,
	reducers: {},
});

const { reducer, actions } = aboutSlice;

export const {} = actions;
export default reducer;
