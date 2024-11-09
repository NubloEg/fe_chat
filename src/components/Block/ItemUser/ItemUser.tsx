import s from "./ItemUser.module.css";
import user from "../../../assets/icons/user.png";

interface Props {
  onClick?: () => void;
  name: string;
  avatar: string;
}

export default function ItemUser({ onClick, name, avatar }: Props) {
  return (
    <div onClick={onClick} className={s.userItem}>
      <img src={avatar || user} alt="" />
      <div className={s.userItemInfo}>
        <div className={s.userItemName}>{name}</div>
        <div className={s.userItemStatus}></div>
      </div>
    </div>
  );
}
