import React, { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import s from "./Home.module.css";
import Button from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
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
        <Post
          author="Egor Dovgalev"
          comments={6}
          likes={14}
          image="https://allegrobowling.ru/wp-content/uploads/a/f/a/afa692b0f3d4d0338dca1b38e0061637.jpeg"
          description="In my opinion, Ui/Ux design is the foundation of a product, its face and soul. You can create an infinitely high-quality heart, and organize the simulation of breathing, but we won’t fall in love with a product just because its heart beats in an interesting rhythm or its breathing smells like mint.

        Most of the information we perceive is through our eyes, which means that we see first and then think. Therefore, we must understand how to attract attention and process it in a way that the user performs the necessary actions [...]"
          title="Design Process for Beginners"
        />
        <Post
          author="Egor Dovgalev"
          comments={6}
          likes={14}
          image="https://allegrobowling.ru/wp-content/uploads/a/f/a/afa692b0f3d4d0338dca1b38e0061637.jpeg"
          description="In my opinion, Ui/Ux design is the foundation of a product, its face and soul. You can create an infinitely high-quality heart, and organize the simulation of breathing, but we won’t fall in love with a product just because its heart beats in an interesting rhythm or its breathing smells like mint.

        Most of the information we perceive is through our eyes, which means that we see first and then think. Therefore, we must understand how to attract attention and process it in a way that the user performs the necessary actions [...]"
          title="Design Process for Beginners"
        />
        <Post
          author="Egor Dovgalev"
          comments={6}
          likes={14}
          image="https://allegrobowling.ru/wp-content/uploads/a/f/a/afa692b0f3d4d0338dca1b38e0061637.jpeg"
          description="In my opinion, Ui/Ux design is the foundation of a product, its face and soul. You can create an infinitely high-quality heart, and organize the simulation of breathing, but we won’t fall in love with a product just because its heart beats in an interesting rhythm or its breathing smells like mint.

        Most of the information we perceive is through our eyes, which means that we see first and then think. Therefore, we must understand how to attract attention and process it in a way that the user performs the necessary actions [...]"
          title="Design Process for Beginners"
        />
      </div>
      {loading && <Loader />}
    </div>
  );
}
