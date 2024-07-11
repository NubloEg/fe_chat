import React from "react";
import s from "./Notification.module.css";
import { NotificationModel } from "./NotificationModel";
export default function NotificationItem(notification: NotificationModel) {
  return (
    <div
      className={`${s.notification} ${notification && s[notification?.type]}`}
    >
      {notification?.message}
    </div>
  );
}
