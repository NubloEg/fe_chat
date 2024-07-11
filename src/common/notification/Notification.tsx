import { useAppSelector } from "../store/store";
import s from "./Notification.module.css";
import NotificationItem from "./NotificationItem";
import { selectNotification } from "./NotificationSlice";

export default function Notification() {
  const notifications = useAppSelector(selectNotification);

  return (
    <div className={`${s.notifications}`}>
      {notifications &&
        notifications.map((el, ind) => (
          <NotificationItem key={ind} message={el.message} type={el.type} />
        ))}
    </div>
  );
}
