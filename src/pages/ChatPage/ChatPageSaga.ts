import { call, put, takeLatest } from "redux-saga/effects";
import { chatPageSlice } from "./ChatPageSlice";
import { notificationSlice } from "../../common/notification/NotificationSlice";
import { NotificationType } from "../../common/notification/NotificationModel";
import { getDialogsApi, getUsersApi } from "./ChatPageApi";
import { DialogData } from "./ChatPageData";
import { DialogModel } from "./ChatPageModel";

export function* chatPageSaga() {
  yield takeLatest(chatPageSlice.actions.getUsers, getUsers);
  yield takeLatest(chatPageSlice.actions.getDialogs, getDialogs);
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

export function* getDialogs() {
  try {
    const dialogs: DialogData[] = yield call(getDialogsApi);
    const model: DialogModel[] = dialogs.map((el) => {
      return {
        ...el,
        id: el._id,
        author: { ...el.author, id: el.author._id },
        partner: { ...el.partner, id: el.partner._id },
      };
    });
    yield put(chatPageSlice.actions.getDialogsCompleted(model));
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
