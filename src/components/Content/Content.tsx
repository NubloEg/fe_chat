import { useEffect } from "react";
import Menu from "../Menu/Menu";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChatPage from "../../pages/ChatPage/ChatPage";
import Home from "../../pages/Home/Home";
import CreatePost from "../../pages/CreatePost/CreatePost";

export default function Content() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("profile")) {
      navigate("/login");
    }
  });

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </>
  );
}
