import React, { useEffect, useState } from "react";
import s from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import friendsImg from "./../../assets/img/Auth.jpg";
import Input from "../../components/UI/Input/Input";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../common/store/store";
import { signIn, selectProfile, signUp } from "./AuthSlice";
import { selectLoadingScope } from "../../components/Loader/LoaderSlice";

export default function Auth() {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectProfile);
  const isAuth = useAppSelector(selectLoadingScope);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
    username: "",
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  useEffect(() => {
    if (profile?.token || sessionStorage.getItem("token")) {
      navigate("/home");
    }
  }, [profile?.token, navigate]);

  const login = () => {
    if (isAuth?.["signIn"]) {
      return;
    }
    dispatch(
      signIn({
        email: authInfo.email,
        password: authInfo.password,
      })
    );
  };

  const register = () => {
    dispatch(
      signUp({
        email: authInfo.email,
        password: authInfo.password,
        username: authInfo.username,
      })
    );
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
                <Input
                  value={authInfo.email}
                  onChange={(e) =>
                    setAuthInfo({ ...authInfo, email: e.target.value })
                  }
                  type="email"
                  title="Email"
                />
                <Input
                  value={authInfo.password}
                  onChange={(e) =>
                    setAuthInfo({ ...authInfo, password: e.target.value })
                  }
                  type="password"
                  title="Password"
                />
              </div>
              <div className={s.buttonBox}>
                <div className={s.switcher}>
                  <span onClick={() => setIsLogin(!isLogin)}>Register</span>
                </div>
                <Button
                  variant={isAuth?.["signIn"] ? "disabled" : ""}
                  onClick={login}
                >
                  {!isAuth?.["signIn"] ? "Login" : "Load..."}
                </Button>
              </div>
            </div>

            <div className={`${s.registerBlock} ${!isLogin && s.open}`}>
              <div className={s.inputBox}>
                <h1>Register</h1>
                <Input
                  value={authInfo.username}
                  onChange={(e) =>
                    setAuthInfo({ ...authInfo, username: e.target.value })
                  }
                  type="text"
                  title="Username"
                />
                <Input
                  value={authInfo.email}
                  onChange={(e) =>
                    setAuthInfo({ ...authInfo, email: e.target.value })
                  }
                  type="email"
                  title="Email"
                />
                <Input
                  value={authInfo.password}
                  onChange={(e) =>
                    setAuthInfo({ ...authInfo, password: e.target.value })
                  }
                  type="password"
                  title="Password"
                />
              </div>
              <div className={s.buttonBox}>
                <div className={s.switcher}>
                  <span onClick={() => setIsLogin(!isLogin)}>Login</span>
                </div>
                <Button
                  variant={isAuth?.["signUp"] ? "disabled" : ""}
                  onClick={() => register()}
                >
                  {!isAuth?.["signUp"] ? "Register" : "Load..."}
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
