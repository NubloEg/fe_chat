import React, { useState } from "react";
import s from "./CreatePost.module.css";
import Input from "../../components/UI/Input/Input";
import Textarea from "../../components/UI/Textarea/Textarea";
import Button from "../../components/UI/Button/Button";
import { useAppDispatch } from "../../common/store/store";
import { createPost } from "./CreatePostSlice";
import CreatePostDefault from "../../assets/img/createPostDefault.jpg";

export default function CreatePost() {
  const dispatch = useAppDispatch();

  const [postInfo, setPostInfo] = useState<{
    title: string;
    text: string;
    image?: { previewUrl: string; file: File };
  }>({
    title: "",
    text: "",
  });

  return (
    <div className={s.container}>
      <div className={s.containerFlex}>
        <Input
          value={postInfo.title}
          onChange={(e) => setPostInfo({ ...postInfo, title: e.target.value })}
          variant="purpule"
          title="Title"
        />
        <div className={s.imagePost}>
          <img
            className={s.img}
            src={postInfo.image?.previewUrl || CreatePostDefault}
            alt="ava"
          />
          <input
            className={s.inputPostImage}
            title="downloadFile"
            type="file"
            onChange={(e) => {
              if (e.target.files?.length) {
                const file = e.target.files[0];
                const src = URL.createObjectURL(file);
                setPostInfo({
                  ...postInfo,
                  image: { file: file, previewUrl: src },
                });
              }
            }}
          />
        </div>
        <Textarea
          onChange={(e) => setPostInfo({ ...postInfo, text: e.target.value })}
          value={postInfo.text}
          title="Description"
        />
        <Button
          onClick={() => {
            dispatch(
              createPost({
                text: postInfo.text,
                title: postInfo.title,
                image: postInfo.image?.file,
              })
            );
          }}
          variant="variant"
        >
          Создать
        </Button>
      </div>
    </div>
  );
}
