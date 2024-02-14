import { RequestMovie } from "../types/movie";
import { api } from "../../../../services/api";
import Endpoints from "../../../../services/endpoints";
import useDrawerMovie from "./useDrawerMovie";
import { queryClient } from "../../../../main";
import { useMutation } from "react-query";
import { useToast } from "@chakra-ui/react";

export function useUpdateMovie(onSuccess: () => void) {
  const { hide, movieId } = useDrawerMovie();
  const toast = useToast();

  async function updateMovie(body: RequestMovie) {
    return await api
      .put(
        Endpoints.MOVIE_ID.replace(":movieId", movieId! || body.movieId!),
        body
      )
      .then(() => {
        queryClient.invalidateQueries(["movies"]);
        toast({
          title: "Filme alterado com sucesso!",
          status: "success",
        });
        hide();
        onSuccess();
      })
      .catch((error) => {
        const errors = Object.values(error?.response?.data?.errors || {});
        console.log(error);
        toast({
          title: "Erro ao alterar os dados do filme",
          description: errors.join(", ") || "Tente novamente mais tarde",
          status: "error",
        });
      });
  }

  return useMutation(updateMovie);
}
