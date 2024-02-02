/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "../types/AuthTipes";

interface LoginProps {
  email?: string;
  accessToken?: string;
}

export function setAuthLocalStorage(accessToken: LoginProps | null) {
  localStorage.setItem("@2024_Sp@ce", JSON.stringify(accessToken));
}

export function getAuthLocalStorage() {
  const json = localStorage.getItem("@2024_Sp@ce");

  if (json) {
    return JSON.parse(json);
  }
}

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("@2024_Sp@ceUser", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("@2024_Sp@ceUser");

  if (json) {
    return JSON.parse(json);
  }
}
