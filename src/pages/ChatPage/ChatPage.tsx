import Search from "../../components/UI/Search/Search";
import Block from "../../components/Block/Block";
import Item from "../../components/Block/Item/Item";
import Chat from "../../components/Chat/Chat";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatPage() {
  const navigate = useNavigate();
  const [width, setWidth] = useState(0)
  const [isOpenChat,setIsOpenChat]=useState(false)


  useEffect(() => {
    if (!sessionStorage.getItem("profile")) {
      navigate("/login");
    }
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, navigate]);
  return (
    <>
      <div className="itemChat">
        <Search />
        {width > 750 ? <><Block title="Groups" items={[<Item />, <Item />, <Item />]} />
          <Block
            title="People"
            items={[<Item />, <Item />, <Item />, <Item />, <Item />]}
          /></> : <Block title="" items={[<Item onClick={()=>setIsOpenChat(true)}/>, <Item />, <Item />,<Item />, <Item />, <Item />,<Item />, <Item />, <Item />,<Item />, <Item />, <Item />,<Item />, <Item />, <Item />]} />  }


      </div>
      <Chat setIsOpenChat={setIsOpenChat} isOpen={isOpenChat} />
    </>
  );
}
