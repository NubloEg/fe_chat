import React, { ReactNode } from "react";
import s from "./Modal.module.css";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: (value: boolean) => void;
}

export default function Modal(props: Props) {
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.onClose(false);
        }
      }}
      className={`${s.modal} ${!props.isOpen ? s.close : ""}`}
    >
      {props.children}
    </div>
  );
}
