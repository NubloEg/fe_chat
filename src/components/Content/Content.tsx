import { useEffect } from "react";
import Menu from "../Menu/Menu";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChatPage from "../../pages/ChatPage/ChatPage";
import Home from "../../pages/Home/Home";
import CreatePost from "../../pages/CreatePost/CreatePost";
import PostView from "../../pages/PostView/PostView";
import MenuMobile from "../Menu/MenuMobile";
import Settings from "../../pages/Settings/Settings";
import WithMobile from "../HOC/WithMobile";
import { ComingSoon } from "../../pages/ComingSoon/ComingSoon";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
//import socket from "../../socket";

export default function Content() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <WithMobile desktopElement={<Menu />} mobileElement={<MenuMobile />} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostView />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/bell" element={<ComingSoon />} />
      </Routes>
    </>
  );
}
