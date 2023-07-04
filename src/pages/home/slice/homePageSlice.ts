import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

type HomePageSliceType = {
	count: number;
};
export const initialState: HomePageSliceType = {
	count: 0,
};

export const homePageSlice = createSlice({
	name: "homePage",
	initialState,
	reducers: {
		increment: (state) => {
			state.count++;
		},
		decrement: (state) => {
			state.count--;
		},
	},
});

const persistConfig = {
	key: "home",
	storage: storage,
	// whitelist: [""],
};
export const { increment, decrement } = homePageSlice.actions;
export default persistReducer(persistConfig, homePageSlice.reducer);
