import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../common/store/store";

interface ChatPageState {
  users?: { id: string; avatarUrl: string; username: string }[];
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
  },
});

export const { getUsers } = chatPageSlice.actions;

export const selectUsers = (state: RootState) => state.chatPage.users;

export default chatPageSlice.reducer;
