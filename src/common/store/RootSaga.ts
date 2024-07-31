import { fork } from "redux-saga/effects";
import { authSaga } from "../../pages/Auth/AuthSaga";
import { homeSaga } from "../../pages/Home/HomeSaga";
import { createPostSaga } from "../../pages/CreatePost/CreatePostSaga";
import { postViewSaga } from "../../pages/PostView/PostViewSaga";

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(homeSaga);
  yield fork(createPostSaga);
  yield fork(postViewSaga);
}
