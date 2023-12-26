import React from "react";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.loader}>
      <div className={s.points}>
        <div className={s.point}></div>
      </div>
    </div>
  );
}
