import { Button, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import MenuItems from "../../utils/MenuItems";

export function TopBar() {
  return (
    <Flex
      h="4rem"
      align="center"
      justify="space-between"
      px="2rem"
      borderBottom="1px"
      borderColor="gray.700"
    >
      <Flex>
        <Text fontSize={22} color="green.300">Space Filmes</Text>
      </Flex>
      <Flex gap={8}>
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
      <Flex>
        <Text>AlgumaCoisa</Text>
      </Flex>
    </Flex>
  )
}
