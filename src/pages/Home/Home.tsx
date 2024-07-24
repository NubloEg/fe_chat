import React, { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import s from "./Home.module.css";
import Button from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../common/store/store";
import { getAllPosts, selectPosts } from "./HomeSlice";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(getAllPosts());
    setTimeout(() => setLoading(false), 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.home}>
      <div className={s.upFlex}>
        <h1 className={s.h1}>POSTS</h1>
        <Button variant="variant" onClick={() => navigate("/createpost")}>
          Создать статью
        </Button>
      </div>
      <div className={s.posts}>
        {posts &&
          posts.map((el) => (
            <Post
              key={el.id}
              author={el.user.username}
              comments={6}
              likes={el.viesCount}
              image={el.imageUrl}
              description={el.text}
              title={el.title}
            />
          ))}
      </div>
      {loading && <Loader />}
    </div>
  );
}
