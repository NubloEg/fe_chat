import React from "react";
import s from "./Settings.module.css";
import Chekbox from "../../components/UI/Chekbox/Chekbox";
import { useAppSelector } from "../../common/store/store";
import { selectProfile } from "../Auth/AuthSlice";
export default function Settings() {
  const profile = useAppSelector(selectProfile);

  return (
    <div className={s.settings}>
      <Chekbox />
      <div>Avatar</div>
      <div>{profile?.email}</div>
      <div>{profile?.username}</div>
    </div>
  );
}
