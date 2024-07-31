import { call, put, takeLatest } from "redux-saga/effects";
import { authSlice } from "./AuthSlice";
import { getProfileApi, signInApi, signUpApi } from "./AuthApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserProfileData } from "./AuthData";
import { UserProfileModel } from "./AuthModel";
import { notificationSlice } from "../../common/notification/NotificationSlice";
import { NotificationType } from "../../common/notification/NotificationModel";

export function* authSaga() {
  yield takeLatest(authSlice.actions.signIn, signIn);
  yield takeLatest(authSlice.actions.signUp, signUp);
  yield takeLatest(authSlice.actions.getProfile, getProfile);
}

export function* signIn(
  action: PayloadAction<{ email: string; password: string }>
) {
  try {
    const data: UserProfileData = yield call(
      signInApi,
      action.payload.email,
      action.payload.password
    );

    if (data.token) {
      sessionStorage.setItem("token", data.token);
    }
    const model: UserProfileModel = { ...data, id: data._id };
    yield put(authSlice.actions.getProfileCompleted(model));
    yield put(
      notificationSlice.actions.addNotification({
        type: NotificationType.success,
        message: "Успешный вход",
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

export function* signUp(
  action: PayloadAction<{ email: string; password: string; username: string }>
) {
  try {
    const data: UserProfileData = yield call(
      signUpApi,
      action.payload.email,
      action.payload.password,
      action.payload.username
    );
    if (data.token) {
      sessionStorage.setItem("token", data.token);
    }
    const model: UserProfileModel = { ...data, id: data._id };
    yield put(authSlice.actions.getProfileCompleted(model));
    yield put(
      notificationSlice.actions.addNotification({
        type: NotificationType.success,
        message: "Успешная регистрация",
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

export function* getProfile() {
  try {
    const data: UserProfileData = yield call(getProfileApi);
    if (data.token) {
      sessionStorage.setItem("token", data.token);
    }
    const model: UserProfileModel = { ...data, id: data._id };
    yield put(authSlice.actions.getProfileCompleted(model));
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
