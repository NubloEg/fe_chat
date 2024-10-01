import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Content from "./components/Content/Content";
import Notification from "./common/notification/Notification";
import Redirect from "./common/redirect/Redirect";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<Content />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
        <Notification />
        <Redirect />
      </div>
    </BrowserRouter>
  );
}

export default App;
