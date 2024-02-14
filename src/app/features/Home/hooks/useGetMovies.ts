import { useQuery } from "react-query";
import { api } from "../../../../services/api";
import Endpoints from "../../../../services/endpoints";
import { AxiosError } from "axios";
// import usePagination from "./usePagination";
import { PayloadMovies } from "../../AdminFilmes/types/movie";

export interface FilterProps {
  filter?: string;
  categoryId?: string;
}

export function getMovies(
  // currentPage: number,
  filter?: string,
  categoryId?: string
) {
  return api
    .get(Endpoints.MOVIES, {
      params: {
        // page: currentPage,
        filter: filter || undefined,
        categoryId: categoryId || undefined,
      },
    })
    .then((resp) => resp.data);
}

export default function useGetMovies(search?: FilterProps) {
  // const { currentPage } = usePagination();

  const result = useQuery<PayloadMovies, AxiosError>(
    [
      "movies",
      Endpoints.MOVIES,
      {
        params: {
          filter: search?.filter,
          categoryId: search?.categoryId,
        },
      },
    ],
    () => getMovies(search?.filter, search?.categoryId),
    {
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return result;
}
