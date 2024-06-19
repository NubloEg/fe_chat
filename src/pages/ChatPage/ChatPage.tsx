import Search from "../../components/UI/Search/Search";
import Block from "../../components/Block/Block";
import Item from "../../components/Block/Item/Item";
import Chat from "../../components/Chat/Chat";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatPage() {
  const chats = [
    { name: "Egor", isGroup: false },
    { name: "Kate", isGroup: false },
    { name: "Friend", isGroup: true },
    { name: "Job", isGroup: true },
  ];
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [chatNow, setChatNow] = useState<{
    name: string;
    status: string;
    lastDate: string;
    id: number;
  }>({ id: 0, lastDate: "27.01.22", name: "", status: "Online" });

  useEffect(() => {
    if (!sessionStorage.getItem("profile")) {
      navigate("/login");
    }
    setWidth(window.innerWidth);
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [searchText, setSearchText] = useState("");
  const [allChats] = useState<Array<{ name: string; isGroup: boolean }>>(chats);
  const [people, setPeople] = useState<
    Array<{ name: string; isGroup: boolean }>
  >([]);
  const [group, setGroup] = useState<Array<{ name: string; isGroup: boolean }>>(
    []
  );

  useEffect(() => {
    setPeople(searchFilter(false));
    setGroup(searchFilter(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPeople(searchFilter(false));
    setGroup(searchFilter(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const searchFilter = (isGroupValue: boolean) => {
    let result = [];
    if (searchText) {
      result = allChats.filter((a) =>
        a.name.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      result = allChats;
    }
    return result.filter((a) => a.isGroup === isGroupValue);
  };

  const mapper = (chats: Array<{ name: string; isGroup: boolean }>) => {
    return chats.map((elem, i) => (
      <Item
        onClick={() =>
          setChatNow({
            id: i,
            name: elem.name,
            status: "Online",
            lastDate: chatNow.lastDate,
          })
        }
        key={elem.name}
        name={elem.name}
      />
    ));
  };

  return (
    <>
      <div className="itemChat">
        <Search
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {width > 991 ? (
          <>
            <Block title="Groups" items={mapper(group)} />
            <Block title="People" items={mapper(people)} />
          </>
        ) : (
          <Block title="" items={[...mapper(people), ...mapper(group)]} />
        )}
      </div>
      {chatNow.name && (
        <Chat
          chat={chatNow}
          setIsOpenChat={setIsOpenChat}
          isOpen={isOpenChat}
        />
      )}
    </>
  );
}
