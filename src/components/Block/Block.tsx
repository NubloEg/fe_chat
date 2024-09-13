import { ReactElement, ReactNode } from "react";
import s from "./Block.module.css";

interface Props {
  title?: string;
  items?: ReactElement[];
  children?: ReactNode;
}

export default function Block({ items, title, children }: Props) {
  return (
    <div className={s.block}>
      {title && <h1>{title}</h1>}
      {items && items.map((el) => el)}
      {children}
    </div>
  );
}
