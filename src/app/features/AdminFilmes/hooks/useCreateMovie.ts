import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { queryClient } from "../../../../main";
import { api } from "../../../../services/api";
import Endpoints from "../../../../services/endpoints";
import { RequestMovie } from "../types/movie";
import useDrawerMovie from "./useDrawerMovie";

export function useCreateMovie(onSuccess: () => void) {
  const toast = useToast();
  const { hide } = useDrawerMovie();

  async function createMovie(body: RequestMovie) {
    return await api
      .post(Endpoints.MOVIES, body)
      .then(() => {
        queryClient.invalidateQueries(["movies"]);
        toast({
          title: "Filme cadastrado com sucesso!",
          status: "success",
        });
        hide();
        onSuccess();
      })
      .catch((error) => {
        const errors = Object.values(error?.response?.data?.errors || {});
        console.log(error);
        toast({
          title: "Erro ao cadastrar filme",
          description: errors.join(", ") || "Tente novamente mais tarde",
          status: "error",
        });
      });
  }

  return useMutation(createMovie);
}
