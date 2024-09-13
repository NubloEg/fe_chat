import Search from "../../components/UI/Search/Search";
import Block from "../../components/Block/Block";
import Item from "../../components/Block/Item/Item";
import Chat from "../../components/Chat/Chat";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../common/store/store";
import { getUsers, selectUsers } from "./ChatPageSlice";
import Loader from "../../components/Loader/Loader";

export default function ChatPage() {
  const navigate = useNavigate();
  const [isOpenChat, setIsOpenChat] = useState(false);
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const [allChats, setAllChats] = useState(users || []);
  const [searchText, setSearchText] = useState("");

  const [chatNow, setChatNow] = useState<{
    name: string;
    status: string;
    lastDate: string;
    id: number;
  }>({ id: 0, lastDate: "27.01.22", name: "", status: "Online" });

  useEffect(() => {
    setAllChats(users || []);
  }, [users]);

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/login");
    } else {
      dispatch(getUsers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchFilter = () => {
    let result = [];
    if (searchText && users) {
      result = users?.filter((a) =>
        a.username.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      result = users || [];
    }
    setAllChats(result);
  };

  useEffect(() => {
    searchFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const mapper = (
    chats: Array<{ id: string; imageUrl: string; username: string }>
  ) => {
    return chats.map((elem, i) => (
      <Item
        onClick={() =>
          setChatNow({
            id: i,
            name: elem.username,
            status: "Online",
            lastDate: "",
          })
        }
        key={elem.id}
        name={elem.username}
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
        <Block title="Users" items={mapper(allChats)}>
          {allChats.length === 0 && <Loader />}
        </Block>
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
