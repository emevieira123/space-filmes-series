import { useNavigate } from "react-router-dom";
import { getAuthLocalStorage } from "../contexts/utils/localStorage";
import { path } from "./path";
import { useEffect } from "react";

export const PrivateRouter = ({ element }: { element: JSX.Element }) => {
  const authLocalStorage = getAuthLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLocalStorage?.accessToken) {
      navigate(path.LOGIN);
    }
  }, [authLocalStorage, navigate])

  return element;
};
