import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./RootSaga";
import authSlice from "../../pages/Auth/AuthSlice";
import homeSlice from "../../pages/Home/HomeSlice";
import notificationSlice from "../notification/NotificationSlice";
import createPostSlice from "../../pages/CreatePost/CreatePostSlice";
import postViewSlice from "../../pages/PostView/PostViewSlice";

export function createStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      auth: authSlice,
      home: homeSlice,
      createPost: createPostSlice,
      postView: postViewSlice,
      notification: notificationSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof createStore>;

export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
