import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChatPage from "../../pages/ChatPage/ChatPage";
import Home from "../../pages/Home/Home";
import CreatePost from "../../pages/CreatePost/CreatePost";
import PostView from "../../pages/PostView/PostView";
import MenuMobile from "../Menu/MenuMobile";
import Settings from "../../pages/Settings/Settings";

export default function Content() {
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, navigate]);

  return (
    <>
      {width > 991 ? <Menu /> : <MenuMobile />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostView />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </>
  );
}
