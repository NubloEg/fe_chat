import { ReactElement } from "react";
import s from "./Block.module.css";

interface Props{
    title:string;
    items?:ReactElement[];
}

export default function Block({items,title}:Props) {
  return (
    <div className={s.block}>
        <h1>{title}</h1>
        {items && items.map((el)=>el)}
    </div>
  )
}
