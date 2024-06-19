import React, { useState } from "react";
import s from "./Chekbox.module.css";
export default function Chekbox() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={`${s.checkbox} ${isActive && s.active}`}
    >
      <div>Рус</div>
      <div>En</div>
    </div>
  );
}
