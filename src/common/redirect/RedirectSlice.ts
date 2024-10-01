import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface NotificationSliceSate {
  urlRedirect?: string;
}

const initialState: NotificationSliceSate = {};

export const redirectSlice = createSlice({
  name: "redirectSlice",
  initialState,
  reducers: {
    redirectPage: (state, action: PayloadAction<string | undefined>) => {
      return {
        ...state,
        urlRedirect: action.payload,
      };
    },
  },
});

export const { redirectPage } = redirectSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRedirectPage = (state: RootState) =>
  state.redirect.urlRedirect;

export default redirectSlice.reducer;
