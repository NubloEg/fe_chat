import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./RootSaga";
import authSlice from "../../pages/Auth/AuthSlice";
import homeSlice from "../../pages/Home/HomeSlice";
import notificationSlice from "../notification/NotificationSlice";
import createPostSlice from "../../pages/CreatePost/CreatePostSlice";
import postViewSlice from "../../pages/PostView/PostViewSlice";
import loaderSlice from "../../components/Loader/LoaderSlice";
import chatPageSlice from "../../pages/ChatPage/ChatPageSlice";
import redirectSlice from "../redirect/RedirectSlice";

export function createStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      auth: authSlice,
      home: homeSlice,
      createPost: createPostSlice,
      chatPage: chatPageSlice,
      postView: postViewSlice,
      notification: notificationSlice,
      loading: loaderSlice,
      redirect: redirectSlice,
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
