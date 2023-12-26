import React from "react";
import s from "./Input.module.css";


export default function Input(props:React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={s.input}>
      <h2 className={s.h2}>{props.title}</h2>
      <input {...props} />
    </label>
  );
}
