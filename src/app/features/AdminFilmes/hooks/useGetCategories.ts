import { useQuery } from "react-query";
import { api } from "../../../../services/api";
import Endpoints from "../../../../services/endpoints";
import { AxiosError } from "axios";
import { Category } from "../types/category";

export function getCategories() {
  return api.get(Endpoints.CATEGORIES).then((resp) => resp.data);
}

export default function useGetCategories() {
  const result = useQuery<Category[], AxiosError>(
    ["categories", Endpoints.CATEGORIES],
    getCategories,
    {
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return result;
}
