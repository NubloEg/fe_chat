import s from "./Item.module.css";
import user from "../../../assets/icons/user.png";

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
          <div className={s.conversationLastTime}>Today, 9.52pm</div>
          <div className={s.conversationStatus}></div>
        </div>
      </div>
    </div>
  );
}
