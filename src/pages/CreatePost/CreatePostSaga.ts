import { call, put, takeLatest } from "redux-saga/effects";
import { createPostSlice } from "./CreatePostSlice";
import { notificationSlice } from "../../common/notification/NotificationSlice";
import { NotificationType } from "../../common/notification/NotificationModel";
import { createPostApi } from "./CreatePostApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { CreatePostModel } from "./CreatePostModel";

export function* createPostSaga() {
  yield takeLatest(createPostSlice.actions.createPost, createPost);
}

export function* createPost(action: PayloadAction<CreatePostModel>) {
  try {
    yield call(createPostApi, action.payload);
    yield put(
      notificationSlice.actions.addNotification({
        type: NotificationType.success,
        message: "Пост успешно создан",
      })
    );
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
