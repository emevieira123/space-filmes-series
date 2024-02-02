import { createContext, useState } from "react";
import { setAuthLocalStorage, setUserLocalStorage } from "./utils/localStorage";
import { IAuthProvider, IContext, IUser } from "./types/AuthTipes";
import { useLoginRequest } from "./hooks/useLoginRequest";


export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  const { LoginRequest } = useLoginRequest();

  async function authenticated(email: string, password: string) {
    const response = await LoginRequest(email, password);

    const payload = { accessToken: response?.access_token }

    const payloadUser = {
      id: response?.user?.id,
      name: response?.user?.name,
      email: response?.user?.email,
    }

    setUser(response?.user);
    setAuthLocalStorage(payload)
    setUserLocalStorage(payloadUser);
  }

  function logout() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider value={{ user, authenticated, logout }}>
      {children}
    </AuthContext.Provider>
  )

}
