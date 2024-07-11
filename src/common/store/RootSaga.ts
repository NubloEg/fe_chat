import { fork } from "redux-saga/effects";
import { authSaga } from "../../pages/Auth/AuthSaga";

export function* rootSaga() {
  yield fork(authSaga);
}
