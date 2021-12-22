import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { userInfo } from "./userreducer";

const store = configureStore({
	reducer: {
		userDetails: userInfo.reducer,
	},
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
