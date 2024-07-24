import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../common/store/store";
import { PostModel } from "./HomeModel";

interface HomeSliceSate {
  posts?: PostModel[];
}

const initialState: HomeSliceSate = {};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getAllPosts: (state) => {
      return {
        ...state,
      };
    },

    getAllPostsCompleted: (state, action: PayloadAction<PostModel[]>) => {
      return {
        ...state,
        posts: action.payload,
      };
    },
  },
});

export const { getAllPosts, getAllPostsCompleted } = homeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPosts = (state: RootState) => state.home.posts;

export default homeSlice.reducer;
