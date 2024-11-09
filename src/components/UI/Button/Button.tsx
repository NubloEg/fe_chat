import React from "react";
import s from "./Button.module.css";
import cs from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "variant" | "disabled";
}

export default function Button(props: Props) {
  const mainClass = cs(s.button, s[props.variant || "default"]);

  return (
    <button {...props} className={mainClass}>
      {props.children}
    </button>
  );
}
