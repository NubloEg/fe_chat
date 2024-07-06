import React, { useEffect, useState } from "react";
import s from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import friendsImg from "./../../assets/img/Auth.jpg";
import Input from "../../components/UI/Input/Input";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

export default function Auth() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const signIn = () => {
    sessionStorage.setItem("profile", "hello");
    navigate("/home");
  };

  const signUp = () => {
    sessionStorage.setItem("profile", "hello");
    navigate("/home");
  };

  return (
    <>
      <div className={s.auth}>
        <div className={s.Block}>
          <img src={friendsImg} alt="" />

          <div className={s.blockFlex}>
            <div className={`${s.loginBlock} ${!isLogin && s.close}`}>
              <div className={s.inputBox}>
                <h1>Login</h1>
                <Input type="text" title="Email" />
                <Input type="password" title="Password" />
              </div>
              <div className={s.buttonBox}>
                <div className={s.switcher}>
                  <span onClick={() => setIsLogin(!isLogin)}>Register</span>
                </div>
                <Button variant="" onClick={() => signIn()}>
                  Login
                </Button>
              </div>
            </div>

            <div className={`${s.registerBlock} ${!isLogin && s.open}`}>
              <div className={s.inputBox}>
                <h1>Register</h1>
                <Input type="text" title="Username" />
                <Input type="email" title="Email" />
                <Input type="password" title="Password" />
              </div>
              <div className={s.buttonBox}>
                <div className={s.switcher}>
                  <span onClick={() => setIsLogin(!isLogin)}>Login</span>
                </div>
                <Button variant="" onClick={() => signUp()}>
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
}
