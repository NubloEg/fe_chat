import React from "react";
import s from "./Settings.module.css";
import Chekbox from "../../components/UI/Chekbox/Chekbox";
import { useAppSelector } from "../../common/store/store";
import { selectProfile } from "../Auth/AuthSlice";
import user from "../../assets/icons/user.png";

export default function Settings() {
  const profile = useAppSelector(selectProfile);

  return (
    <div className={s.settings}>
      <div className={s.flexChek}>
        <Chekbox />
      </div>
      <div className={s.profile}>
        <div className={s.avatar}>
          <img className={s.img} src={user} alt="ava" />
          <input className={s.inputFile} title="downloadFile" type="file" />
        </div>
        <div className={s.username}>{profile?.username}</div>
        <div className={s.email}>{profile?.email}</div>
      </div>
    </div>
  );
}
