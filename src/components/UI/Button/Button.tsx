import React from "react";
import s from "./Button.module.css";
import cs from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: string;
}

export default function Button(props: Props) {
  const mainClass = cs(s.button, s[props.variant]);

  return (
    <button {...props} className={mainClass}>
      {props.children}
    </button>
  );
}
