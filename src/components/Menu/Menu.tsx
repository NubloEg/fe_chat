import s from "./Menu.module.css";
import home from "../../assets/icons/home.svg";
import chat from "../../assets/icons/chat.svg";
import bell from "../../assets/icons/bell.svg";
import setting from "../../assets/icons/settings.svg";
import exit from "../../assets/icons/exit.svg";
import { useState } from "react";

export default function Menu() {
  const [nowPage, setNowPage] = useState(home);
  return (
    <header className={s.header}>
      <div>
        <div className={s.profile}>
          <img
            className={s.img}
            src="https://images.pngnice.com/download/2007/User-Account-Person-PNG-File.png"
            alt="ava"
          />
        </div>
        <nav className={s.nav}>
          <ul className={s.ul}>
            {[home, chat, bell, setting].map((el) => {
              return (
                <li
                  className={`${nowPage === el ? s.active : ""}`}
                  onClick={() => setNowPage(el)}
                >
                  <img src={el} alt="home" />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className={s.out}>
        <img src={exit} alt="exit" />
      </div>
    </header>
  );
}
