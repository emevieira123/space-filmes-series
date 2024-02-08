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
import { useForm } from "react-hook-form";
import { Movies } from "../../types/movie";
import { useCreateMovie } from "../../hooks/useCreateMovie";

export function DrawerCreateEditMovie() {
  const { mutate: createMovie, isLoading: isLoadingCreate } = useCreateMovie(
    () => {}
  );
  const { control, handleSubmit, register } = useForm<Movies>({
    defaultValues: {
      downloads: [{ provedorName: "", linkDownload: "" }],
    },
  });

  function onSave(data: Movies) {
    createMovie(data);
    console.log(data);
  }

  return (
    <Drawer isOpen={true} placement="right" onClose={() => {}} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cadastrar Filme</DrawerHeader>

        <DrawerBody>
          <FormCreateEditMovie control={control} register={register} />
        </DrawerBody>

        <form onSubmit={handleSubmit(onSave)}>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={() => {}}>
              Cancelar
            </Button>
            <Button
              colorScheme="blue"
              type="submit"
              isLoading={isLoadingCreate}
            >
              Confirmar
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
