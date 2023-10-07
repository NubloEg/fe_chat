import s from "./ChatTextArea.module.css";
import emoji from "../../../assets/icons/emoji.svg";
import send from "../../../assets/icons/send.svg";

export default function ChatTextArea() {
  return (
    <div className={s.writer}>
      <label className={s.input}>
        <textarea placeholder="Type your message here..." className={s.textarea}></textarea>
        <img src={emoji} alt="" className={s.emoji} />
      </label>
      <div className={s.send}>
        <img src={send} alt="" />
      </div>
    </div>
  );
}
