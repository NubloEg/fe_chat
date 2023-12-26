import React from "react";
import Search from "../../components/UI/Search/Search";
import Block from "../../components/Block/Block";
import Item from "../../components/Block/Item/Item";
import Chat from "../../components/Chat/Chat";

export default function ChatPage() {
  return (
    <>
      <div className="itemChat">
        <Search />
        <Block title="Groups" items={[<Item />, <Item />, <Item />]} />
        <Block
          title="People"
          items={[<Item />, <Item />, <Item />, <Item />, <Item />]}
        />
      </div>
      <Chat />
    </>
  );
}
