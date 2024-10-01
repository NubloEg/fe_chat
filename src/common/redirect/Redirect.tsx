import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { redirectPage, selectRedirectPage } from "./RedirectSlice";
import { useNavigate } from "react-router-dom";

export default function Redirect() {
  const newUrl = useAppSelector(selectRedirectPage);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (newUrl) {
      navigate(newUrl);
      dispatch(redirectPage(undefined));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newUrl]);
  return <></>;
}
