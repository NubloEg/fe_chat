import React, { useState } from "react";
import s from "./CreatePost.module.css";
import Input from "../../components/UI/Input/Input";
import Textarea from "../../components/UI/Textarea/Textarea";
import Button from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../common/store/store";
import { createPost } from "./CreatePostSlice";
import { CreatePostModel } from "./CreatePostModel";

export default function CreatePost() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [postInfo, setPostInfo] = useState<CreatePostModel>({
    title: "",
    text: "",
  });

  return (
    <div className={s.container}>
      <div className={s.containerFlex}>
        <Input
          value={postInfo.title}
          onChange={(e) =>
            setPostInfo({ title: e.target.value, text: postInfo.text })
          }
          variant="purpule"
          title="Title"
        />
        <div className={s.imagePost}>
          <img
            className={s.img}
            src={
              "https://s3.us-west-1.amazonaws.com/screenshots.templatemonster.com/templates/8518/scr/1525340823317_preview3.png"
            }
            alt="ava"
          />
          <input className={s.inputPostImage} title="downloadFile" type="file" />
        </div>
        <Textarea
          onChange={(e) =>
            setPostInfo({ title: postInfo.title, text: e.target.value })
          }
          value={postInfo.text}
          title="Description"
        />
        <Button
          onClick={() => {
            dispatch(createPost(postInfo));
            navigate("/home");
          }}
          variant="variant"
        >
          Создать
        </Button>
      </div>
    </div>
  );
}
