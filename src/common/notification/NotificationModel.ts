export enum NotificationType {
  success = "success",
  error = "error",
  warning = "warning",
}

export interface NotificationModel {
  type: NotificationType;
  message: string;
}
