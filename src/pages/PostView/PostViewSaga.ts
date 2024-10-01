import { call, put, select, takeLatest } from "redux-saga/effects";
import { postViewSlice } from "./PostViewSlice";
import { notificationSlice } from "../../common/notification/NotificationSlice";
import { NotificationType } from "../../common/notification/NotificationModel";
import {
  addCommentPostApi,
  dislikePostApi,
  getPostApi,
  likePostApi,
} from "./PostViewApi";
import { PostData } from "./PostViewData";
import { PostModel } from "./PostViewModel";
import { PayloadAction } from "@reduxjs/toolkit";
import { selectProfile } from "../Auth/AuthSlice";
import { UserProfileModel } from "../Auth/AuthModel";

export function* postViewSaga() {
  yield takeLatest(postViewSlice.actions.getPost, getOnePost);
  yield takeLatest(postViewSlice.actions.likePost, likePost);
  yield takeLatest(postViewSlice.actions.dislikePost, dislikePost);
  yield takeLatest(postViewSlice.actions.addComment, addComment);
}

export function* getOnePost(action: PayloadAction<string>) {
  try {
    const data: PostData = yield call(getPostApi, action.payload);
    const profile: UserProfileModel = yield select(selectProfile);
    const model: PostModel = {
      ...data,
      id: data._id,
      user: { ...data.user, id: data.user._id },
      isLike: Boolean(data.likesCount.users.find((el) => el === profile.id)),
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

export function* likePost(
  action: PayloadAction<{ userId: string; postId: string }>
) {
  try {
    yield call(likePostApi, action.payload.postId);
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

export function* dislikePost(
  action: PayloadAction<{ userId: string; postId: string }>
) {
  try {
    yield call(dislikePostApi, action.payload.postId);
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

export function* addComment(
  action: PayloadAction<{
    message: string;
    date: string;
    author: string;
    postId: string;
  }>
) {
  try {
    yield call(
      addCommentPostApi,
      action.payload.message,
      action.payload.date,
      action.payload.author,
      action.payload.postId
    );
    yield put(postViewSlice.actions.getPost(action.payload.postId));
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
