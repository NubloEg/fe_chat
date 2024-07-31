import { call, put, takeLatest } from "redux-saga/effects";
import { postViewSlice } from "./PostViewSlice";
import { notificationSlice } from "../../common/notification/NotificationSlice";
import { NotificationType } from "../../common/notification/NotificationModel";
import { getPostApi } from "./PostViewApi";
import { PostData } from "./PostViewData";
import { PostModel } from "./PostViewModel";
import { PayloadAction } from "@reduxjs/toolkit";

export function* postViewSaga() {
  yield takeLatest(postViewSlice.actions.getPost, getAllPosts);
}

export function* getAllPosts(action: PayloadAction<string>) {
  try {
    const data: PostData = yield call(getPostApi, action.payload);

    const model: PostModel = {
      ...data,
      id: data._id,
      user: { ...data.user, id: data.user._id },
    };
    yield put(postViewSlice.actions.getPostCompleted(model));
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
