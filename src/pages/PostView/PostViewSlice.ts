import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../common/store/store";
import { PostModel } from "./PostViewModel";

interface PostViewSliceSate {
  selectedPost?: PostModel;
}

const initialState: PostViewSliceSate = {};

export const postViewSlice = createSlice({
  name: "postView",
  initialState,
  reducers: {
    getPost: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        selectedPost: undefined,
      };
    },

    getPostCompleted: (state, action: PayloadAction<PostModel>) => {
      return {
        ...state,
        selectedPost: action.payload,
      };
    },
  },
});

export const { getPost, getPostCompleted } = postViewSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPost = (state: RootState) => state.postView.selectedPost;

export default postViewSlice.reducer;
