import s from "./Comment.module.css";
import calendarImg from "../../assets/icons/calendar.svg";
import authorImg from "../../assets/icons/account.svg";

interface Props {
  message: string;
  date: string;
  author: string;
  authorId: string;
  _id: string;
}

export default function Comment({
  _id,
  author,
  authorId,
  date,
  message,
}: Props) {
  return (
    <div className={s.comment}>
      <div className={s.commentInfo}>
        <div className={s.info_item}>
          <img src={calendarImg} alt="" />
          <span>
            {new Date(date).toLocaleString("ru", {
              day: "2-digit",
              month: "short",
              year: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <div className={s.info_item}>
          <img src={authorImg} alt="" />
          <span>{author}</span>
        </div>
      </div>
      <div className={s.description}>{message}</div>
    </div>
  );
}
