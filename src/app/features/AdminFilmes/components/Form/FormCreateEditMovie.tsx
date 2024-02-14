import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { Control, UseFormRegister } from "react-hook-form";
import InputCustom from "../Input/InputCustom";
import { InputDynamic } from "../Input/InputDynamic";
import { RequestMovie } from "../../types/movie";
import { SelectCategory } from "../Select/SelectCategory";

interface FormProps {
  control: Control<RequestMovie>;
  register: UseFormRegister<RequestMovie>;
  isLoading?: boolean;
}

export function FormCreateEditMovie({ control, register, isLoading }: FormProps) {
  if (isLoading) {
    return <Text>Carregando...</Text>
  }

  return (
    <Flex flexDirection="column" gap={4}>
      <InputCustom label="Nome do filme" name="name" control={control} />
      <InputCustom label="Descrição" name="description" control={control} />
      <InputCustom label="Url do Banner" name="bannerUrl" control={control} />
      <InputCustom label="Url da Imagem" name="imageUrl" control={control} />
      <InputCustom
        label="Url do Trailer"
        name="trailerLink"
        control={control}
      />
      <Flex gap={3}>
        <InputCustom
          label="Ano lançamento"
          name="releaseYear"
          control={control}
          maxLength={4}
          type="number"
        />
        <SelectCategory label="Categoria" name="categoryId" control={control} />
      </Flex>

      <Divider />
      <Heading fontSize="xl">Links para download</Heading>

      <InputDynamic control={control} register={register} />
    </Flex>
  );
}
