import React from 'react'
import s from "./Textarea.module.css"
export default function Textarea(props:React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className={s.textarea}>
      <h2 className={s.h2}>{props.title}</h2>
      <textarea {...props} />
    </label>
  )
}
