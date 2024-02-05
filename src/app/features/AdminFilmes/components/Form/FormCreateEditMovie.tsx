import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

export function FormCreateEditMovie() {
  return (
    <Flex>
      <FormControl>
        <FormLabel>Nome do filme</FormLabel>
        <Input />

        <FormLabel mt="1rem">Descricao</FormLabel>
        <Input />

        <FormLabel mt="1rem">Url do Banner</FormLabel>
        <Input />

        <FormLabel mt="1rem">Url da Imagem</FormLabel>
        <Input />

        <FormLabel mt="1rem">Url do Trailer</FormLabel>
        <Input />

        <FormLabel mt="1rem">Url do Banner</FormLabel>
        <Input />

        <FormLabel mt="1rem">Categoria</FormLabel>
        <Input placeholder="Select" />
      </FormControl>
    </Flex>
  );
}
