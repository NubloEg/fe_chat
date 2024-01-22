import { useState } from "react"
import Loader from "../../components/Loader/Loader"
import s from "./PostView.module.css"
import { useNavigate } from "react-router-dom"
import arrow from "../../assets/icons/left-chevron.svg"
import authorImg from "../../assets/icons/account.svg"
import viewImg from "../../assets/icons/view.svg"
import calendarImg from "../../assets/icons/calendar.svg"
import likeImg from "../../assets/icons/like.svg"
import commentImg from "../../assets/icons/comment.svg"
import Comment from "../../components/Comment/Comment"

export default function PostView() {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  return (
    <div className={s.overflowContainer} >
      <div className={s.post}>
      <div className={s.postHeader}>
        <div className={s.back} onClick={() => navigate('/home')} >
          <img src={arrow} alt="" />
          Back</div>
        <div className={s.title} >Independent content. The article tag</div>
        <img className={s.img} onLoad={() => setLoading(false)} src="https://searchthisweb.com/wallpaper/moraine-lake_5120x3414_gyjf4.jpg" alt="" />

        <div className={s.info} >
          <div className={s.info_item}>
            <img src={calendarImg} alt="" />
            <span>25.10.2023</span>
          </div>
          <div className={s.info_item}>
            <img src={authorImg} alt="" />
            <span>Egor Dovgalev</span>
          </div>
          <div className={s.info_item}>
            <img style={{ height: "30px" }} src={viewImg} alt="" />
            <span>25K</span>

          </div>
        </div>
      </div>
      <p className={s.description} >
        In my opinion, Ui/Ux design is the foundation of a product, its face and soul. You can create an infinitely high-quality heart, and organize the simulation of breathing, but we won’t fall in love with a product just because its heart beats in an interesting rhythm or its breathing smells like mint.
      </p>
      <div className={s.infoUsers}>
        <div className={s.infoUsers_item}>
          <img style={{ height: "22px" }} src={likeImg} alt="" />
          <span>150</span>
        </div>
        <div className={s.infoUsers_item}>
          <img style={{ height: "28px" }} src={commentImg} alt="" />
          <span>5</span>
        </div>
      </div>
      <div style={{ padding: "25px 80px" }}>Комментарии</div>
      <div className={s.blockComments} >
        {[1, 2, 3, 4, 5].map((i) => <Comment key={i}/>)}
      </div>
      {loading && <Loader />}

    </div>
    </div>
  )
}
