import { Flex } from "@chakra-ui/react";
import { Control, UseFormRegister } from "react-hook-form";
import InputCustom from "../Input/InputCustom";
import { InputDynamic } from "../Input/InputDynamic";
import { Movies } from "../../types/movie";
import { SelectCategory } from "../Select/SelectCategory";

interface FormProps {
  control: Control<Movies>;
  register: UseFormRegister<Movies>;
}

export function FormCreateEditMovie({ control, register }: FormProps) {
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

      <InputDynamic control={control} register={register} />
    </Flex>
  );
}
