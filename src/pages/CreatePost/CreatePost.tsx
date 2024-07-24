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
