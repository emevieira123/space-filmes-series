import { api } from "../../../../services/api";
import Endpoints from "../../../../services/endpoints";
import { queryClient } from "../../../../main";
import { useMutation } from "react-query";
import useModalDelete from "./useModalDelete";
import { useToast } from "@chakra-ui/react";

export function useDeleteMovie() {
  const { hide } = useModalDelete();
  const toast = useToast();

  async function deleteMovie(movieId: string) {
    return await api
      .delete(Endpoints.MOVIE_ID.replace(":movieId", movieId))
      .then(() => {
        queryClient.invalidateQueries(["movies"]);
        toast({
          title: "Filme deletado com sucesso!",
          status: "success",
        });
        hide();
      })
      .catch((error) => {
        // const errors = Object.values(error?.response?.data?.errors || {});
        console.log(error);
        toast({
          title: "Erro ao delete filme!",
          status: "error",
        });
      });
  }

  return useMutation((movieId: string) => deleteMovie(movieId));
}
