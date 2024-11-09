import { ReactElement, ReactNode } from "react";
import s from "./Block.module.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  items?: ReactElement[];
  children?: ReactNode;
}

export default function Block({ items, title, children, ...props }: Props) {
  return (
    <div {...props} className={s.block}>
      {title && <h1>{title}</h1>}
      {items && items.map((el) => el)}
      {children}
    </div>
  );
}
