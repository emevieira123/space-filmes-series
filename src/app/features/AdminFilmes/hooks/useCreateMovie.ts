import { useToast } from "@chakra-ui/react";
import { queryClient } from "../../../../main";
import { api } from "../../../../services/api";
import Endpoints from "../../../../services/endpoints";
import { useMutation } from "react-query";
import { Movies } from "../types/movie";

export function useCreateMovie(onSuccess: () => void) {
  const toast = useToast();
  // const { onClose } = useDrawerVeiculos();

  async function createMovie(body: Movies) {
    return await api
      .post(Endpoints.MOVIES, body)
      .then(() => {
        queryClient.invalidateQueries(["movies"]);
        toast({
          title: "Filme cadastrado com sucesso!",
          status: "success",
        });
        //   onClose();
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
