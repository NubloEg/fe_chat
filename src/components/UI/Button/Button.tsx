import React from "react";
import s from "./Button.module.css";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button {...props} className={`${s.button} ${props.color ? s.variant : ""}`}>
      {props.children}
    </button>
  );
}
