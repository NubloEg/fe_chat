import { call, put, takeLatest } from "redux-saga/effects";
import { chatPageSlice } from "./ChatPageSlice";
import { notificationSlice } from "../../common/notification/NotificationSlice";
import { NotificationType } from "../../common/notification/NotificationModel";
import { getUsersApi } from "./ChatPageApi";

export function* chatPageSaga() {
  yield takeLatest(chatPageSlice.actions.getUsers, getUsers);
}

export function* getUsers() {
  try {
    const users: { id: string; avatarUrl: string; username: string }[] =
      yield call(getUsersApi);
    yield put(chatPageSlice.actions.getUsersCompleted(users));
  } catch (err) {
    const error = err as { message: string };
    yield put(
      notificationSlice.actions.addNotification({
        type: NotificationType.error,
        message: error.message,
      })
    );
  }
}
