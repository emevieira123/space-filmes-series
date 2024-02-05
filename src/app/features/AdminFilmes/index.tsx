import { Button, Flex, IconButton, Input } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import { TableMovies } from "./components/TableMovies";
import { DrawerCreateEditMovie } from "./components/Drawer/DrawerCreateEditMovie";

const columns = [
  { id: 1, name: "Nome do Filmes" },
  { id: 2, name: "Ano de Lançamento" },
  { id: 2, name: "" },
];

const data = [
    { id: "gjsdhgfgdsjhgf", name: "Jhon Wick 4", releaseYear: "2023"},
    { id: "jfjkdskfjhkjhk", name: "As Marvel", releaseYear: "2023"},
]

export default function AdminFilmes() {
  return (
    <Flex flexDirection="column" p="0 2rem">
      <Flex w="100%" p="1rem 0" align="center" justify="space-between">
        <Button colorScheme="green">+ Novo Filmes</Button>
        <Flex>
          <Input placeholder="Pesquisar filme" borderRightRadius={0} />
          <IconButton
            icon={<IoSearchOutline />}
            aria-label="Button search"
            borderLeftRadius={0}
          />
        </Flex>
      </Flex>

      <TableMovies columns={columns} data={data} />

      <DrawerCreateEditMovie />
    </Flex>
  );
}
