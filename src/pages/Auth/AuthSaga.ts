import { call, fork, put, select, takeLatest } from "redux-saga/effects";
import { authSlice, selectProfile } from "./AuthSlice";
import {
  getProfileApi,
  signInApi,
  signUpApi,
  updateProfileApi,
  uploadFileApi,
} from "./AuthApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserProfileData } from "./AuthData";
import { UserProfileModel } from "./AuthModel";
import { notificationSlice } from "../../common/notification/NotificationSlice";
import { NotificationType } from "../../common/notification/NotificationModel";
import { loaderSlice } from "../../components/Loader/LoaderSlice";

export function* authSaga() {
  yield takeLatest(authSlice.actions.signIn, signIn);
  yield takeLatest(authSlice.actions.signUp, signUp);
  yield takeLatest(authSlice.actions.getProfile, getProfile);
  yield takeLatest(authSlice.actions.updateProfile, updateProfile);
}

export function* signIn(
  action: PayloadAction<{ email: string; password: string }>
) {
  try {
    yield put(
      loaderSlice.actions.setLoader({ scope: "signIn", isLoading: true })
    );
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
  } finally {
    yield put(
      loaderSlice.actions.setLoader({ scope: "signIn", isLoading: false })
    );
  }
}

export function* signUp(
  action: PayloadAction<{ email: string; password: string; username: string }>
) {
  try {
    yield put(
      loaderSlice.actions.setLoader({ scope: "signUp", isLoading: true })
    );
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
  } finally {
    yield put(
      loaderSlice.actions.setLoader({ scope: "signUp", isLoading: false })
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

export function* updateProfile(
  action: PayloadAction<{ username?: string; file?: File }>
) {
  try {
    const profile: UserProfileModel = yield select(selectProfile);
    let updateProfile: { username?: string; avatarUrl?: string } = {};
    if (action.payload.file) {
      try {
        const { data }: { data: { link: string } } = yield call(
          uploadFileApi,
          action.payload.file
        );
        updateProfile = { ...updateProfile, avatarUrl: data.link };
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
    if (action.payload.username) {
      updateProfile = { ...updateProfile, username: action.payload.username };
    }

    yield call(updateProfileApi, updateProfile);
    yield put(
      authSlice.actions.getProfileCompleted({
        ...profile,
        avatarUrl: updateProfile.avatarUrl || profile.avatarUrl,
        username: updateProfile.username || profile.username,
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
