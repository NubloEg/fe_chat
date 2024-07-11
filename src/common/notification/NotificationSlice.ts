import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../common/store/store";
import { NotificationModel } from "./NotificationModel";

interface NotificationSliceSate {
  notification?: NotificationModel[];
}

const initialState: NotificationSliceSate = {};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<NotificationModel>) => {
      return {
        ...state,
        notification: [...(state.notification || []), action.payload],
      };
    },
  },
});

export const { addNotification } = notificationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectNotification = (state: RootState) =>
  state.notification.notification;

export default notificationSlice.reducer;
