import { Button, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../Icons/Logo";

const MenuItems = [
  {
    menuId: "e0f3874c-2b4b-4b24-a097-e5fe19388144",
    name: "Home",
    menuUrl: "/home-admin",
  },
  {
    menuId: "464d37a9-0230-4b49-83be-42c967e702d0",
    name: "Filmes",
    menuUrl: "filmes-admin",
  },
  {
    menuId: "e829e302-96c9-4275-96e3-1eee20ee1d41",
    name: "Séries",
    menuUrl: "series-admin",
  },
];

export function AdminTopBar() {
  return (
    <Grid
      h="4rem"
      templateColumns="repeat(3, 1fr)"
      px="2rem"
      borderBottom="1px"
      borderColor="gray.700"
    >
      <GridItem>
        <Flex h="100%" align="center">
          <Text fontSize={22} color="green.300">Painel Administrativo</Text>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex gap={8} h="100%" align="center" justify="center">
          {MenuItems.map((menu) => (
            <Button
              key={menu.menuId}
              as={NavLink}
              to={menu.menuUrl}
              bg="transparent"
              borderRadius={0}
              color="white"
              _hover={{
                borderBottom: "2px",
                borderColor: "green.300",
                bg: "transparent",
                color: "green.300",
              }}
              _activeLink={{
                borderBottom: "2px",
                borderColor: "green.300",
                color: "green.300",
              }}
            >
              {menu.name}
            </Button>
          ))}
        </Flex>
      </GridItem>
      <GridItem>
        <Flex h="100%" align="center" justify="end" gap={3}>
          <Text fontWeight="bold" fontSize={22}>Space Filmes e Séries</Text>
          <Icon as={Logo} fontSize={38} />
        </Flex>
      </GridItem>
    </Grid>
  )
}
