import React from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Search from "./components/Search/Search";
import Block from "./components/Block/Block";
import Item from "./components/Block/Item/Item";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="itemChat">
        <Search />
        <Block title="Groups" items={[<Item />, <Item />, <Item />]} />
        <Block
          title="People"
          items={[<Item />, <Item />, <Item />, <Item />, <Item />]}
        />
      </div>
      <Chat />
    </div>
  );
}

export default App;
