import React from "react";
import s from "./Item.module.css";

interface Props {
  onClick?: () => void;
  name: string;
}

export default function Item({ onClick, name }: Props) {
  return (
    <div onClick={onClick} className={s.conversation}>
      <img
        src={
          "https://images.pngnice.com/download/2007/User-Account-Person-PNG-File.png"
        }
        alt=""
      />
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
