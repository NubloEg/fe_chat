import s from "./Comment.module.css"
import calendarImg from "../../assets/icons/calendar.svg"
import authorImg from "../../assets/icons/account.svg"

export default function Comment() {
    return (
        <div className={s.comment}>
            <div className={s.commentInfo}>
                <div className={s.info_item}>
                    <img src={calendarImg} alt="" />
                    <span>25.08.2023</span>
                </div>
                <div className={s.info_item}>
                    <img src={authorImg} alt="" />
                    <span>Egor Dovgalev</span>
                </div>
            </div>
            <div className={s.description}>In my opinion, Ui/Ux design is the foundation of a product, its face and soul.</div>
        </div>
    )
}