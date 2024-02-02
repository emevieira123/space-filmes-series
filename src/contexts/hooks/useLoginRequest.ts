/* eslint-disable @typescript-eslint/no-explicit-any */
import { useToast } from "@chakra-ui/react";
import { api } from "../../services/api";
import Endpoints from "../../services/endpoints";

export function useLoginRequest() {
  const toast = useToast();

  async function LoginRequest(email: string, password: string) {
    try {
      const request = await api.post(Endpoints.LOGIN, {
        email,
        password,
      });

      console.log("LoginRequest", request);

      return request.data;
    } catch (error: any) {
      if (error.response.status === 401 || error.response.status === 404) {
        return toast({
          title: "E-mail ou senha inválidos",
          description: "Verifique se o email ou a senha estão corretos!",
          position: "top",
          status: "error",
          duration: 5000,
        });
      } else if (error.response.status === 500) {
        return console.log("Erro: Falha na comunicação com o servidor!");
      }
    }
  }

  return {
    LoginRequest,
  };
}
