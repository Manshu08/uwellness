import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userReduxDetails } from "../utils/types";
import type { RootState } from "./store";
export type userDetails = {
	type: string;
	email: string;
	password: string;
};

const initialState: userDetails = {
	type: "",
	email: "",
	password: "",
};

export const userInfo = createSlice({
	name: "userDetails",
	initialState,
	reducers: {
		addUserDetails: (state, action: PayloadAction<userReduxDetails>) => {
			state.type = action.payload.type;
			state.email = action.payload.email;
			state.password = action.payload.password;
		},
	},
});
export const { addUserDetails } = userInfo.actions;
export const selectUserDetails = (state: RootState) => state.userDetails;
export default userInfo.reducer;
