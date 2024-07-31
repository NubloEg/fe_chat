import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../common/store/store";
import { UserProfileModel } from "./AuthModel";

interface AuthSliceSate {
  profile?: UserProfileModel;
}

const initialState: AuthSliceSate = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      return {
        ...state,
      };
    },
    signUp: (
      state,
      action: PayloadAction<{
        email: string;
        password: string;
        username: string;
      }>
    ) => {
      return {
        ...state,
      };
    },
    getProfile: (state) => {
      return {
        ...state,
      };
    },
    getProfileCompleted: (state, action: PayloadAction<UserProfileModel>) => {
      return {
        ...state,
        profile: action.payload,
      };
    },
    logOut: (state) => {
      return {
        ...state,
        profile: undefined,
      };
    },
  },
});

export const { signIn, signUp, getProfileCompleted, logOut, getProfile } =
  authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProfile = (state: RootState) => state.auth.profile;

export default authSlice.reducer;
