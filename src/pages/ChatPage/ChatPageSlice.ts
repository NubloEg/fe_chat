import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../common/store/store";
import { DialogModel } from "./ChatPageModel";

interface ChatPageState {
  users?: { id: string; avatarUrl: string; username: string }[];
  dialogs?: DialogModel[];
  currentDialog?: { id: string };
}

const initialState: ChatPageState = {};

export const chatPageSlice = createSlice({
  name: "chatPage",
  initialState,
  reducers: {
    getUsers: (state) => {
      return { ...state, users: undefined };
    },
    getUsersCompleted: (
      state,
      action: PayloadAction<
        { id: string; avatarUrl: string; username: string }[]
      >
    ) => {
      return { ...state, users: action.payload };
    },
    getDialogs: (state) => {
      return { ...state, dialogs: undefined };
    },
    getDialogsCompleted: (state, action: PayloadAction<DialogModel[]>) => {
      return { ...state, dialogs: action.payload };
    },
    createDialog: (state) => {
      return { ...state, currentDialog: undefined };
    },
  },
});

export const { getUsers, getDialogs } = chatPageSlice.actions;

export const selectUsers = (state: RootState) => state.chatPage.users;
export const selectDialogs = (state: RootState) => state.chatPage.dialogs;

export default chatPageSlice.reducer;
