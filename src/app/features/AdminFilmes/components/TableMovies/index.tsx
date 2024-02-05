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

interface TableMoviesProps {
  columns: any[];
  data: any[];
}

export function TableMovies({ columns, data }: TableMoviesProps) {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {columns.map((c) => (
              <Th key={c.id}>{c.name}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((d) => (
            <Tr key={d.id}>
              <Td>{d.name}</Td>
              <Td>{d.releaseYear}</Td>
              <Td>
              <Flex align="center" gap={3} justify="end">
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
