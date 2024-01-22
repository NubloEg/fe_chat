import React from "react";
import cs from "classnames"
import s from "./Input.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
  variant?:string
}



export default function Input(props:Props) {
  const mainClass=cs(
    s.input,
    s[props.variant || ""]
  )
  
  return (
    <label className={mainClass}>
      <h2 className={s.h2}>{props.title}</h2>
      <input {...props} />
    </label>
  );
}
