import { call, put, takeLatest } from "redux-saga/effects";
import { homeSlice } from "./HomeSlice";
import { notificationSlice } from "../../common/notification/NotificationSlice";
import { NotificationType } from "../../common/notification/NotificationModel";
import { getAllPostsApi } from "./HomeApi";
import { PostData } from "./HomeData";
import { PostModel } from "./HomeModel";
import { mapPostDataToModel } from "./HomeMapper";

export function* homeSaga() {
  yield takeLatest(homeSlice.actions.getAllPosts, getAllPosts);
}

export function* getAllPosts() {
  try {
    const data: PostData[] = yield call(getAllPostsApi);

    const model: PostModel[] = mapPostDataToModel(data);
    yield put(homeSlice.actions.getAllPostsCompleted(model));
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
