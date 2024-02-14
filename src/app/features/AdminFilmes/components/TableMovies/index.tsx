/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Flex,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { MdVisibility, MdModeEdit, MdDelete } from "react-icons/md";
import { Movies } from "../../types/movie";
import useDrawerMovie from "../../hooks/useDrawerMovie";

interface TableMoviesProps {
  columns: any[];
  data: Movies[] | undefined;
}

export function TableMovies({ columns, data }: TableMoviesProps) {
  const { showEdit } = useDrawerMovie();

  return (
    <TableContainer h="35.7rem">
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {columns.map((c) => (
              <Th key={c.id}>{c.name}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((d: Movies) => (
            <Tr key={d.movieId}>
              <Td>{d.name}</Td>
              <Td>{d.releaseYear}</Td>
              <Td>{d?.categories?.name}</Td>
              <Td>
                <Flex align="center" gap={10} justify="end">
                  <Icon
                    as={MdVisibility}
                    fontSize={20}
                    cursor="pointer"
                    _hover={{
                      color: "gray.400"
                    }}
                  />
                  <Icon
                    as={MdModeEdit}
                    fontSize={20}
                    cursor="pointer"
                    _hover={{
                      color: "gray.400"
                    }}
                    onClick={() => showEdit(d.movieId!)}
                  />
                  <Icon
                    as={MdDelete}
                    fontSize={20}
                    cursor="pointer"
                    _hover={{
                      color: "gray.400"
                    }}
                  />
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
