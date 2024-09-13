import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreatePostModel } from "./CreatePostModel";

interface CreatePostSliceSate {}

const initialState: CreatePostSliceSate = {};

export const createPostSlice = createSlice({
  name: "createPost",
  initialState,
  reducers: {
    createPost: (state, action: PayloadAction<CreatePostModel>) => {
      return {
        ...state,
      };
    },
  },
});

export const { createPost } = createPostSlice.actions;

export default createPostSlice.reducer;
