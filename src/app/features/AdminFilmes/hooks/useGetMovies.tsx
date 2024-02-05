/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import { api } from "../../../../services/api";
import Endpoints from "../../../../services/endpoints";
import { AxiosError } from "axios";

export function getMovies() {
  return api.get(Endpoints.MOVIES).then((resp: any) => resp.data);
}

export default function useGetMovies() {
  const result = useQuery<AxiosError>(["movies", Endpoints.MOVIES], getMovies, {
    onError: (err) => {
      console.log(err);
    },
  });

  return result;
}
