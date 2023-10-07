import s from "./ChatItem.module.css";

interface Props {
  message: string;
  date: string;
  type: string;
}

export default function ChatItem(message: Props) {
  return (
    <div className={`${s.message} ${message.type !== "" ? s.other : ""}`}>
      <div className={s.messageText}>{message.message}</div>
      <div className={s.messageDate}>{message.date}</div>
    </div>
  );
}
