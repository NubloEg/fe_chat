import React from 'react'
import s from "./Item.module.css"

export default function Item() {
  return (
    <div className={s.conversation}>
      <img src={'https://images.pngnice.com/download/2007/User-Account-Person-PNG-File.png'} alt="" />
      <div className={s.conversationInfo}>
        <div className={s.conversationInfo__left} >
          <div className={s.conversationName}>Friends Forever</div>
          <div className={s.conversationLastMessage}>Hahahaha</div>
        </div>
        <div className={s.conversationInfo__right}>
          <div className={s.conversationLastTime}>Today, 9.52pm</div>
          <div className={s.conversationStatus}>
            
          </div>
        </div>
      </div>
    </div>
  )
}
