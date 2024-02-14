import { Button, Flex, IconButton, Input, Spinner, Text } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import { TableMovies } from "./components/TableMovies";
import { DrawerCreateEditMovie } from "./components/Drawer/DrawerCreateEditMovie";
import useDrawerMovie from "./hooks/useDrawerMovie";
import useGetMovies from "./hooks/useGetMovies";
import { Pagination } from "../../../shared/components/Pagination";
import usePagination from "./hooks/usePagination";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { SelectCategory } from "./components/Select/SelectCategory";

const columns = [
  { id: 1, name: "Nome do Filmes" },
  { id: 2, name: "Ano de Lançamento" },
  { id: 3, name: "Categoria" },
  { id: 4, name: "" },
];

export interface FilterProps {
  filter?: string;
  categoryId?: string;
}

export default function AdminFilmes() {
  const { register, handleSubmit, control } = useForm();
  const [search, setSearch] = useState<FilterProps>();
  const { currentPage, setCurrentPage } = usePagination();
  const { data: movies, isLoading } = useGetMovies(search);
  const { show } = useDrawerMovie();

  const handleSearch = (data: FieldValues) => {
    setSearch(data);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Flex flexDirection="column" p="0 2rem">
      <Flex w="100%" p="1rem 0" align="center" justify="space-between">
        <Button colorScheme="green" onClick={show}>+ Novo Filmes</Button>
        <form onSubmit={handleSubmit(handleSearch)}>
          <Flex w="32rem" align="end" gap={3}>
            <SelectCategory name="categoryId" control={control} />
            <Flex>
              <Input placeholder="Pesquisar filme" borderRightRadius={0} {...register("filter")} w="15rem" />
              <IconButton
                icon={<IoSearchOutline />}
                aria-label="Button search"
                borderLeftRadius={0}
                type="submit"
              />
            </Flex>
          </Flex>
        </form>
      </Flex>

      {
        isLoading
          ? (
            <Flex h="35.7rem" align="center" justify="center" flexDirection="column" gap={2}>
              <Spinner />
              <Text>Carregando dados...</Text>
            </Flex>
          )
          : (
            <TableMovies columns={columns} data={movies?.items} />
          )
      }

      {
        Number(movies?.totalItems) > Number(movies?.itemsPerPage) && !isLoading &&
        <Flex justify="end">
          <Pagination
            currentPage={currentPage}
            totalItems={Number(movies?.totalItems)}
            itemsPerPage={Number(movies?.itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </Flex>
      }


      <DrawerCreateEditMovie />
    </Flex>
  );
}
