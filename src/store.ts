import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import homePageReducer from "./pages/home/slice/homePageSlice";

const store = configureStore({
	reducer: {
		home: homePageReducer,
	},
	middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
