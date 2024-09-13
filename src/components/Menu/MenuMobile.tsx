import s from "./Menu.module.css";
import home from "../../assets/icons/home.svg";
import chat from "../../assets/icons/chat.svg";
import bell from "../../assets/icons/bell.svg";
import setting from "../../assets/icons/settings.svg";
import exit from "../../assets/icons/exit.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import user from "../../assets/icons/user.png";
import { getProfile, logOut, selectProfile } from "../../pages/Auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "../../common/store/store";

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [nowPage, setNowPage] = useState("home");
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectProfile);
  useEffect(() => {
    if (!profile?.token) {
      dispatch(getProfile());
    }
  }, []);
  return (
    <>
      <header className={`${s.header} ${isOpen ? s.open : s.close}`}>
        <div className={s.blockMenu}>
          <div onClick={() => setIsOpen(true)} className={s.profile}>
            <img className={s.img} src={profile?.avatarUrl || user} alt="ava" />
            <span className={s.spanMobile}>Egor Dovgalev</span>
          </div>
          <nav className={s.nav}>
            <ul className={s.ul}>
              {[
                { name: "home", img: home },
                { name: "chat", img: chat },
                { name: "bell", img: bell },
                { name: "setting", img: setting },
              ].map((el) => {
                return (
                  <Link
                    key={el.name}
                    to={el.name}
                    className={`${s.li} ${nowPage === el.name ? s.active : ""}`}
                    onClick={() => {
                      setIsOpen(false);
                      setNowPage(el.name);
                    }}
                  >
                    <img src={el.img} alt="home" />
                    <span className={s.spanMobile}>{el.name}</span>
                  </Link>
                );
              })}
            </ul>
          </nav>
        </div>
        <Link
          onClick={() => {
            dispatch(logOut());
            sessionStorage.removeItem("token");
          }}
          to={"/login"}
          className={s.out}
        >
          <img src={exit} alt="exit" />
        </Link>
      </header>
    </>
  );
}
