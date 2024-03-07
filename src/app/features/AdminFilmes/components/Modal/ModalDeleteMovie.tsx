import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Flex,
  Text,
  Icon,
} from '@chakra-ui/react'
import { AiFillDelete } from "react-icons/ai";
import useModalDelete from '../../hooks/useModalDelete';
import { useDeleteMovie } from '../../hooks/useDeleteMovie';

export function ModalDeleteMovie() {
  const { visible, hide, nameMovie, movieId } = useModalDelete();
  const { mutate: deleteMovie, isLoading } = useDeleteMovie();

  return (
    <Modal isOpen={visible} onClose={() => { }}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex justify="center">
            <Icon as={AiFillDelete} fontSize={40} color="red.500" />
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Flex flexDir="column" w="100%" justify="center" alignItems="center">
            <Text>Tem certeza que deseja excluir o filme</Text>
            <Text fontWeight="bold" fontSize={24}>{nameMovie}</Text>
            <Text color="red.500">Essa ação é irreversível.</Text>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Flex w="100%" justify="center">
            <Button
              colorScheme='gray'
              mr={3}
              onClick={hide}
              isDisabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              colorScheme='green'
              onClick={() => deleteMovie(movieId!)}
              isLoading={isLoading}
            >
              Confirmar
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
