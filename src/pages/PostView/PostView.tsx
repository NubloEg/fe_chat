import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import s from "./PostView.module.css";
import { useNavigate, useParams } from "react-router-dom";
import arrow from "../../assets/icons/left-chevron.svg";
import authorImg from "../../assets/icons/account.svg";
import viewImg from "../../assets/icons/view.svg";
import calendarImg from "../../assets/icons/calendar.svg";
import { ReactComponent as LikeImg } from "../../assets/icons/like.svg";
import { ReactComponent as CommentImg } from "../../assets/icons/comment.svg";

import Comment from "../../components/Comment/Comment";
import { useAppDispatch, useAppSelector } from "../../common/store/store";
import {
  addComment,
  dislikePost,
  getPost,
  likePost,
  selectPost,
} from "./PostViewSlice";
import Textarea from "../../components/UI/Textarea/Textarea";
import { selectProfile } from "../Auth/AuthSlice";
import Button from "../../components/UI/Button/Button";

export default function PostView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const post = useAppSelector(selectPost);
  const profile = useAppSelector(selectProfile);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (id) {
      dispatch(getPost(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLike = () => {
    if (post?.isLike) {
      dispatch(dislikePost({ userId: profile?.id || "", postId: id || "" }));
    } else {
      dispatch(likePost({ userId: profile?.id || "", postId: id || "" }));
    }
  };

  const sendComment = () => {
    if (comment.trim() !== "" && id) {
      dispatch(
        addComment({
          author: profile?.username || profile?.id || "Неизвестно",
          date: new Date(Date.now()).toString(),
          message: comment,
          postId: id,
        })
      );
    }
  };

  return (
    <div className={s.overflowContainer}>
      <div className={s.post}>
        <div className={s.postHeader}>
          <div className={s.back} onClick={() => navigate("/home")}>
            <img src={arrow} alt="" />
            Back
          </div>
          <div className={s.title}>{post?.title}</div>
          <img
            className={s.img}
            src={
              post?.imageUrl ||
              "https://allegrobowling.ru/wp-content/uploads/a/f/a/afa692b0f3d4d0338dca1b38e0061637.jpeg"
            }
            alt=""
          />

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
            <LikeImg
              onClick={toggleLike}
              className={`${s.imgLike} ${post?.isLike ? s.activeLike : ""}`}
            />
            <span>{post?.likesCount.count}</span>
          </div>
          <div className={s.infoUsers_item}>
            <CommentImg className={s.imgComment} />
            <span>{post?.comments.count}</span>
          </div>
        </div>
        <div style={{ padding: "25px 80px" }}>Комментарии</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            margin: "0px 80px",
          }}
        >
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Писать тут...."
            style={{ height: "100px" }}
          />
          <Button onClick={sendComment} variant="variant">
            Отправить
          </Button>
        </div>
        <div className={s.blockComments}>
          {post?.comments.comments.map((el) => (
            <Comment {...el} key={el._id} />
          ))}
        </div>
        {!post && <Loader />}
      </div>
    </div>
  );
}
