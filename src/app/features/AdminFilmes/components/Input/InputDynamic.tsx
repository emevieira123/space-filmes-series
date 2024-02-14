import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Control, UseFormRegister, useFieldArray } from "react-hook-form";
import { MdOutlineDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { RequestMovie } from "../../types/movie";

interface InputDynamicProps {
  control?: Control<RequestMovie>;
  register: UseFormRegister<RequestMovie>
}

export function InputDynamic({ control, register }: InputDynamicProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "downloads",
  });

  return (
    <Stack spacing={4}>
      {fields.map((field, index) => (
        <Flex key={field.id} align="end" gap={3}>
          <FormControl>
            <FormLabel>Nome do provedor</FormLabel>
            <Input
              {...register(`downloads.${index}.provedorName` as const)}
              placeholder="Nome do provedor"
              marginRight={2}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Link de download</FormLabel>
            <Input
              {...register(`downloads.${index}.linkDownload` as const)}
              placeholder="Link de download"
              marginRight={2}
            />
          </FormControl>

          <IconButton
            icon={<MdOutlineDelete />}
            aria-label="remove input"
            onClick={() => remove(index)}
          />
        </Flex>
      ))}

      <Button type="button" onClick={() => append({ provedorName: "", linkDownload: "" })}>
        <FiPlus /> Novo input
      </Button>
    </Stack>
  );
}
