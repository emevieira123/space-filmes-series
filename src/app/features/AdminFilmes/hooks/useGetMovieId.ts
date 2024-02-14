import { AxiosError } from "axios";
import { api } from "../../../../services/api";
import Endpoints from "../../../../services/endpoints";
import { useQuery } from "react-query";
import { Movies } from "../types/movie";
import useDrawerMovie from "./useDrawerMovie";
import { useToast } from "@chakra-ui/react";

export async function getMovieId(movieId?: string) {
  const response = await api.get(
    Endpoints.MOVIE_ID.replace(":movieId", movieId!)
  );
  return response.data;
}

export function useGetMovieId() {
  const { movieId } = useDrawerMovie();
  const toast = useToast();

  const query = useQuery<Movies, AxiosError>(
    [Endpoints.MOVIE_ID, movieId],
    () => getMovieId(movieId),
    {
      enabled: !!movieId,
      onError: (error) => {
        console.log({ error });

        toast({
          title: "Erro ao buscar filme",
          status: "error",
        });
      },
    }
  );

  return query;
}
