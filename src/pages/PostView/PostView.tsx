import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import s from "./PostView.module.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import arrow from "../../assets/icons/left-chevron.svg";
import authorImg from "../../assets/icons/account.svg";
import viewImg from "../../assets/icons/view.svg";
import calendarImg from "../../assets/icons/calendar.svg";
import likeImg from "../../assets/icons/like.svg";
import commentImg from "../../assets/icons/comment.svg";
import Comment from "../../components/Comment/Comment";
import { useAppDispatch, useAppSelector } from "../../common/store/store";
import { getPost, selectPost } from "./PostViewSlice";

export default function PostView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectPost);
  useEffect(() => {
    if (id) {
      dispatch(getPost(id));
    }
  }, []);

  return (
    <div className={s.overflowContainer}>
      <div className={s.post}>
        <div className={s.postHeader}>
          <div className={s.back} onClick={() => navigate("/home")}>
            <img src={arrow} alt="" />
            Back
          </div>
          <div className={s.title}>{post?.title}</div>
          <img className={s.img} src={post?.imageUrl} alt="" />

          <div className={s.info}>
            {post?.createdAt && (
              <div className={s.info_item}>
                <img src={calendarImg} alt="" />
                <span>
                  {new Date(post?.createdAt).toLocaleString("ru", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </span>
              </div>
            )}
            <div className={s.info_item}>
              <img src={authorImg} alt="" />
              <span>{post?.user.username}</span>
            </div>
            <div className={s.info_item}>
              <img style={{ height: "30px" }} src={viewImg} alt="" />
              <span>{post?.viesCount}</span>
            </div>
          </div>
        </div>
        <p className={s.description}>{post?.text}</p>
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
        <div className={s.blockComments}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Comment key={i} />
          ))}
        </div>
        {!post && <Loader />}
      </div>
    </div>
  );
}
