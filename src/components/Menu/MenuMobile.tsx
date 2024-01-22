import s from "./Menu.module.css";
import home from "../../assets/icons/home.svg";
import chat from "../../assets/icons/chat.svg";
import bell from "../../assets/icons/bell.svg";
import setting from "../../assets/icons/settings.svg";
import exit from "../../assets/icons/exit.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function MenuMobile() {
    const [loading, setLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [nowPage, setNowPage] = useState("home");
    return (
        <>
            <header className={`${s.header} ${isOpen ? s.open : s.close}`}>
                <div className={s.blockMenu}>
                    <div onClick={() => setIsOpen(true)} className={s.profile}>
                        <img
                            className={s.img}
                            onLoad={() => setLoading(false)}
                            src="https://images.pngnice.com/download/2007/User-Account-Person-PNG-File.png"
                            alt="ava"
                        />
                        <span className={s.spanMobile}>Egor Dovgalev</span>
                    </div>
                    <nav className={s.nav}>
                        <ul className={s.ul}>
                            {[{ name: "home", img: home }, { name: "chat", img: chat }, { name: "bell", img: bell }, { name: "setting", img: setting }].map((el) => {
                                return (
                                    <Link
                                        to={el.name}
                                        className={`${s.li} ${nowPage === el.name ? s.active : ""}`}
                                        onClick={() => {
                                            setIsOpen(false)
                                            setNowPage(el.name)
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
                <Link to={"/login"} onClick={() => sessionStorage.removeItem('profile')} className={s.out}>
                    <img src={exit} alt="exit" />
                </Link>
            </header>
            {loading && <Loader />}</>

    );
}
