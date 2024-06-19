import s from "./Chat.module.css";
import options from "../../assets/icons/options.svg";
import ChatTextArea from "./ChatTextArea/ChatTextArea";
import ChatItem from "./ChatItem/ChatItem";

interface Props {
  isOpen: boolean;
  setIsOpenChat: React.Dispatch<React.SetStateAction<boolean>>;
  chat: { name: string; status: string; lastDate: string; id: number };
}

export default function Chat({ isOpen, setIsOpenChat, chat }: Props) {
  const messages = [
    { id: 1, message: "Привет", type: "other", date: "Today, 8.30pm" },
    { id: 2, message: "Привет!", type: "", date: "Today, 8.30pm" },
    { id: 3, message: "Как ты?", type: "other", date: "Today, 8.30pm" },
    { id: 4, message: "Все супер! Ты как?", type: "", date: "Today, 8.30pm" },
  ];

  return (
    <div className={`${s.chat} ${isOpen ? s.open : s.close}`}>
      <div className={s.back} onClick={() => setIsOpenChat(false)}>
        Back
      </div>
      <div className={s.chatInfo}>
        <div className={s.chatPersonInfo}>
          <img
            src="https://images.pngnice.com/download/2007/User-Account-Person-PNG-File.png"
            alt=""
            className="avatar"
          />
          <div className={s.personInfoText}>
            <div className="chatName">{chat.name}</div>
            <div className="chatLastDate">{chat.status} - Last seen,{chat.lastDate}</div>
          </div>
        </div>
        <img src={options} alt="" className={s.options} />
      </div>
      <div className={s.messanger}>
        {messages.map((el) => (
          <ChatItem
            key={el.id}
            date={el.date}
            message={el.message}
            type={el.type}
          />
        ))}
      </div>
      <ChatTextArea />
    </div>
  );
}
