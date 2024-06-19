import React from "react";
import s from "./Settings.module.css";
import Chekbox from "../../components/UI/Chekbox/Chekbox";
export default function Settings() {
  return (
    <div className={s.settings}>
      <Chekbox />
    </div>
  );
}
