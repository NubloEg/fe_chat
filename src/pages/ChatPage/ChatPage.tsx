import Search from "../../components/UI/Search/Search";
import Block from "../../components/Block/Block";
import Item from "../../components/Block/ItemDialog/ItemDialog";
import Chat from "../../components/Chat/Chat";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../common/store/store";
import {
  getDialogs,
  getUsers,
  selectDialogs,
  selectUsers,
} from "./ChatPageSlice";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import ItemUser from "../../components/Block/ItemUser/ItemUser";
import { DialogModel } from "./ChatPageModel";

export default function ChatPage() {
  const navigate = useNavigate();
  const [isOpenChat, setIsOpenChat] = useState(false);
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const dialogs = useAppSelector(selectDialogs);
  const [allUsers, setAllUsers] = useState(users || []);
  const [allDialogs, setAllDialogs] = useState(dialogs || []);
  const [searchText, setSearchText] = useState("");

  console.log(allDialogs, "allDialogs");

  const [chatNow, setChatNow] = useState<{
    name: string;
    status: string;
    lastDate: string;
    id: number;
  }>({ id: 0, lastDate: "27.01.22", name: "", status: "Online" });

  useEffect(() => {
    setAllDialogs(dialogs || []);
    searchFilter();
  }, [dialogs]);

  useEffect(() => {
    setAllUsers(users || []);
  }, [users]);

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/login");
    } else {
      dispatch(getDialogs());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchFilter = () => {
    let result = [];
    if (searchText && users) {
      result = allDialogs?.filter((a) =>
        a.partner.username.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      result = allDialogs || [];
    }
    setAllDialogs(result);
  };

  useEffect(() => {
    searchFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const mapperDialogs = (dialogs: Array<DialogModel>) => {
    return dialogs.map((elem, i) => (
      <Item
        onClick={() => {
          setChatNow({
            id: i,
            name: elem.partner.username,
            status: "Online",
            lastDate: "",
          });
          setIsOpenChat(true);
        }}
        key={elem.id}
        name={elem.partner.username}
        avatar={elem.partner.avatarUrl}
      />
    ));
  };

  const mapperUsers = (
    dialogs: Array<{ id: string; avatarUrl: string; username: string }>
  ) => {
    return dialogs.map((elem, i) => (
      <ItemUser
        onClick={() => {
          console.log("create dialog");
          setOpen(false);
        }}
        key={elem.id}
        name={elem.username}
        avatar={elem.avatarUrl}
      />
    ));
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="itemChat">
        <Search
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Block title="Dialogs" items={mapperDialogs(allDialogs)}>
          {allDialogs === undefined && searchText === "" && <Loader />}
          {allDialogs.length === 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100% - 60px)",
                fontSize: "32px",
                color: "gray",
              }}
            >
              <Button
                onClick={() => {
                  if (users === undefined) {
                    dispatch(getUsers());
                  }
                  setOpen(true);
                }}
                variant="variant"
              >
                Создать диалог
              </Button>
            </div>
          )}
        </Block>
      </div>
      {chatNow.name && (
        <Chat
          chat={chatNow}
          setIsOpenChat={setIsOpenChat}
          isOpen={isOpenChat}
        />
      )}
      <Modal onClose={setOpen} isOpen={isOpen}>
        <Block style={{ maxWidth: "450px" }} title="Users">
          <p style={{ padding: "8px 12px" }}>
            Выберите пользователя для диалога
          </p>
          <div style={{ maxHeight: "350px", overflow: "auto" }}>
            {allUsers.length > 0 ? (
              mapperUsers(allUsers)
            ) : (
              <div style={{ textAlign: "center" }}>Load</div>
            )}
          </div>
        </Block>
      </Modal>
    </>
  );
}
