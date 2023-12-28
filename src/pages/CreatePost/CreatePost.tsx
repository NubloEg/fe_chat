import React from "react";
import s from "./CreatePost.module.css";
import Input from "../../components/UI/Input/Input";
import Textarea from "../../components/UI/Textarea/Textarea";
import Button from "../../components/UI/Button/Button";

export default function CreatePost() {
  return (
    <div className={s.container}>
      <div className={s.containerFlex}>
        <Input variant="purpule" title="Title" />
        <Textarea title="Description" />
        <Button variant="variant">Создать</Button>
      </div>
      
    </div>
  );
}
