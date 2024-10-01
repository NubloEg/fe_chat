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
    likePost: (
      state,
      action: PayloadAction<{ userId: string; postId: string }>
    ) => {
      return {
        ...state,
        selectedPost: state.selectedPost
          ? {
              ...state.selectedPost,
              likesCount: {
                count: state.selectedPost.likesCount.count + 1,
                users: [
                  ...state.selectedPost.likesCount.users,
                  action.payload.userId,
                ],
              },
              isLike: true,
            }
          : undefined,
      };
    },
    dislikePost: (
      state,
      action: PayloadAction<{ userId: string; postId: string }>
    ) => {
      return {
        ...state,
        selectedPost: state.selectedPost
          ? {
              ...state.selectedPost,
              likesCount: {
                count: state.selectedPost.likesCount.count - 1,
                users: [...state.selectedPost.likesCount.users].filter(
                  (el) => el !== action.payload.userId
                ),
              },
              isLike: false,
            }
          : undefined,
      };
    },
    addComment: (
      state,
      action: PayloadAction<{
        message: string;
        date: string;
        author: string;
        postId: string;
      }>
    ) => {
      return {
        ...state,
      };
    },
  },
});

export const { getPost, getPostCompleted, likePost, dislikePost, addComment } =
  postViewSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPost = (state: RootState) => state.postView.selectedPost;

export default postViewSlice.reducer;
