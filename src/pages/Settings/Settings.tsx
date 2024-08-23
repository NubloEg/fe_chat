import React, { ChangeEvent } from "react";
import s from "./Settings.module.css";
import Chekbox from "../../components/UI/Chekbox/Chekbox";
import { useAppDispatch, useAppSelector } from "../../common/store/store";
import { selectProfile, uploadFile } from "../Auth/AuthSlice";
import user from "../../assets/icons/user.png";

export default function Settings() {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();

  const chooseFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      dispatch(uploadFile(file));
    }
  };

  return (
    <div className={s.settings}>
      <div className={s.flexChek}>
        <Chekbox />
      </div>
      <div className={s.profile}>
        <div className={s.avatar}>
          <img className={s.img} src={profile?.avatarUrl || user} alt="ava" />
          <input
            onChange={(e) => chooseFile(e)}
            className={s.inputFile}
            title="downloadFile"
            type="file"
            accept="image/png, image/jpeg"
          />
        </div>
        <div className={s.username}>{profile?.username}</div>
        <div className={s.email}>{profile?.email}</div>
      </div>
    </div>
  );
}
