import { useQuery } from "react-query";
import { api } from "../../../../services/api";
import Endpoints from "../../../../services/endpoints";
import { AxiosError } from "axios";
import { PayloadMovies } from "../types/movie";
import usePagination from "./usePagination";
import { FilterProps } from "..";

export function getMovies(currentPage: number, filter?: string, categoryId?: string) {
  return api.get(Endpoints.MOVIES, {
    params: {
      page: currentPage,
      filter: filter || undefined,
      categoryId: categoryId || undefined,
    }
  }).then((resp) => resp.data);
}

export default function useGetMovies(search?: FilterProps) {
  const { currentPage } = usePagination();

  const result = useQuery<PayloadMovies, AxiosError>(
    ["movies", Endpoints.MOVIES, currentPage, {
      params: {
        filter: search?.filter,
        categoryId: search?.categoryId,
      }
    }],
    () => getMovies(currentPage, search?.filter, search?.categoryId), {
    onError: (err) => {
      console.log(err);
    },
  });

  return result;
}
