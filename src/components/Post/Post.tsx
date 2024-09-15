import s from "./Post.module.css";
import { ReactComponent as CommentImg } from "./../../assets/icons/comment.svg";
import { ReactComponent as LikesImg } from "./../../assets/icons/like.svg";
import authorImg from "./../../assets/icons/account.svg";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  image?: string;
  description: string;
  author: string;
  comments: number;
  likes: number;
  id: string;
}

export default function Post({
  description,
  title,
  image,
  author,
  comments,
  likes,
  id,
}: Props) {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div onClick={() => redirect()} className={s.PostItem}>
      <div className={s.boxPostInfo}>
        <h1 className={s.h1}>{title}</h1>
        <div className={s.imageBox}>
          <img
            src={
              image ||
              "https://allegrobowling.ru/wp-content/uploads/a/f/a/afa692b0f3d4d0338dca1b38e0061637.jpeg"
            }
            alt=""
          />
        </div>
        <div className={s.description}>{description}</div>
      </div>
      <div className={s.postInfo}>
        <div className={s.popular}>
          <div className={s.comments}>
            <CommentImg className={s.img} />
            <div>{comments} Comments</div>
          </div>
          <div className={s.likes}>
            <LikesImg className={s.img} />
            <div>{likes} Likes</div>
          </div>
        </div>
        <div className={s.author}>
          <img src={authorImg} alt="" />
          <div>{author}</div>
        </div>
      </div>
    </div>
  );
}
