import s from "./Item.module.css";
import user from "../../../assets/icons/user.png";
import { formatDistanceToNow } from "date-fns";

interface Props {
  onClick?: () => void;
  name: string;
  avatar: string;
}

export default function Item({ onClick, name, avatar }: Props) {
  return (
    <div onClick={onClick} className={s.conversation}>
      <img src={avatar || user} alt="" />
      <div className={s.conversationInfo}>
        <div className={s.conversationInfo__left}>
          <div className={s.conversationName}>{name}</div>
          <div className={s.conversationLastMessage}>Hahahaha</div>
        </div>
        <div className={s.conversationInfo__right}>
          <div className={s.conversationLastTime}>
            {formatDistanceToNow("Mon Oct 20 2024 2:15:20", {
              addSuffix: true,
            })}
          </div>
          <div className={s.conversationStatus}></div>
        </div>
      </div>
    </div>
  );
}
