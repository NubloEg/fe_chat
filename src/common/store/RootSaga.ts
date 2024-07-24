import { fork } from "redux-saga/effects";
import { authSaga } from "../../pages/Auth/AuthSaga";
import { homeSaga } from "../../pages/Home/HomeSaga";
import { createPostSaga } from "../../pages/CreatePost/CreatePostSaga";

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(homeSaga);
  yield fork(createPostSaga);
}
