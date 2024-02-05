import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { FormCreateEditMovie } from "../Form/FormCreateEditMovie";

export function DrawerCreateEditMovie() {
  return (
    <Drawer
      isOpen={true}
      placement="right"
      onClose={() => {}}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cadastrar Filme</DrawerHeader>

        <DrawerBody>
          <FormCreateEditMovie />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={() => {}}>
            Cancelar
          </Button>
          <Button colorScheme="blue">Confirmar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
