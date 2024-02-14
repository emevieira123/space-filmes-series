import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useCreateMovie } from "../../hooks/useCreateMovie";
import useDrawerMovie from "../../hooks/useDrawerMovie";
import { RequestMovie } from "../../types/movie";
import { FormCreateEditMovie } from "../Form/FormCreateEditMovie";
import { useGetMovieId } from "../../hooks/useGetMovieId";
import { useEffect } from "react";
import { useUpdateMovie } from "../../hooks/useUpdateMovie";

export function DrawerCreateEditMovie() {
  const { visible, hide, isEdit } = useDrawerMovie();
  const { data: movie, isLoading: isLoadingEdit } = useGetMovieId();
  const { mutate: createMovie, isLoading: isLoadingCreate } = useCreateMovie(onCancel);
  const { mutate: updateMovie, isLoading: isLoadingUpdate } = useUpdateMovie(onCancel);

  const isLoading = isLoadingCreate || isLoadingUpdate;

  const { control, handleSubmit, register, reset } = useForm<RequestMovie>({
    defaultValues: {
      downloads: [{ provedorName: "", linkDownload: "" }],
    },
  });

  function onCancel() {
    hide();
    reset({});
  }

  function onSave(data: RequestMovie) {
    const dataRequest = {
      ...data,
      categoryId: data.categoryId,
      categories: undefined,
      created_at: undefined,
    }
    if (movie) {
      updateMovie(dataRequest);
    } else {
      createMovie(data);
    }
  }

  useEffect(() => {
    if (movie) {
      reset({
        ...movie,
        categoryId: movie?.categories?.categoryId,
      })
    }
  }, [reset, movie])

  return (
    <Drawer isOpen={visible} placement="right" onClose={onCancel} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cadastrar Filme</DrawerHeader>

        <DrawerBody>
          <FormCreateEditMovie
            control={control}
            register={register}
            isLoading={isEdit && isLoadingEdit}
          />
        </DrawerBody>

        <form onSubmit={handleSubmit(onSave)}>
          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={onCancel}
              isDisabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="green"
              type="submit"
              isLoading={isLoading}
            >
              Confirmar
            </Button>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
