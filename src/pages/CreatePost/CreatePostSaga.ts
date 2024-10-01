import { call, put, takeLatest } from "redux-saga/effects";
import { createPostSlice } from "./CreatePostSlice";
import { notificationSlice } from "../../common/notification/NotificationSlice";
import { NotificationType } from "../../common/notification/NotificationModel";
import { createPostApi } from "./CreatePostApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { CreatePostModel } from "./CreatePostModel";
import { uploadFileApi } from "../Auth/AuthApi";
import { redirectSlice } from "../../common/redirect/RedirectSlice";

export function* createPostSaga() {
  yield takeLatest(createPostSlice.actions.createPost, createPost);
}

export function* createPost(action: PayloadAction<CreatePostModel>) {
  try {
    const createPostModel: { title: string; text: string; imageUrl?: string } =
      {
        text: action.payload.text,
        title: action.payload.title,
        imageUrl: undefined,
      };

    if (action.payload.image) {
      try {
        const { data }: { data: { link: string } } = yield call(
          uploadFileApi,
          action.payload.image
        );
        createPostModel.imageUrl = data.link;
        yield put(
          notificationSlice.actions.addNotification({
            type: NotificationType.success,
            message: "Изображение загружено",
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

    yield call(createPostApi, createPostModel);
    yield put(
      notificationSlice.actions.addNotification({
        type: NotificationType.success,
        message: "Пост успешно создан",
      })
    );
    yield put(redirectSlice.actions.redirectPage("/home"));
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
