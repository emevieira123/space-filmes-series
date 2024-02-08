import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { SingleValue } from "chakra-react-select";
import {
  Control,
  FieldPath,
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
  useController,
} from "react-hook-form";
import ChakraReactSelect from "../../../../../shared/components/Select/ChakraReactSelect";
import { Category, SelectCategoryType } from "../../types/category";
import useGetCategories from "../../hooks/useGetCategories";

interface SelectControllerProps<T extends FieldValues> {
  control: Control<T>;
  label?: string;
  rules?: Parameters<UseFormRegister<T>>[1];
  name: FieldPath<T>;
}

export function SelectCategory<T extends FieldValues>({
  control,
  label,
  rules,
  name,
}: SelectControllerProps<T>) {
  const { data: categories } = useGetCategories();
  const {
    field: { onChange, value },
    fieldState,
  } = useController({
    control,
    defaultValue: "" as PathValue<T, Path<T>>,
    name,
    rules,
  });

//   const { isEdit } = useDrawerMovie();
const isEdit = false;

  const Options =
    categories?.map((item: Category) => ({
      value: item.categoryId,
      label: item.name,
    })) || [];

  return (
    <FormControl w={"100%"} isInvalid={fieldState.invalid}>
      <ChakraReactSelect
        isClearable={!label}
        label={label ?? ""}
        value={Options?.find((o: SelectCategoryType) => o.value === value)}
        defaultValue={isEdit ? Options.find((o) => o.value === value) : undefined}
        options={Options}
        onChange={(changed: SingleValue<SelectCategoryType>) => {
          onChange(changed?.value);
        }}
        placeholder={label ? "Selecione" : "Categoria"}
        size="md"
        aria-label="select-category-movie"
      />
      <FormErrorMessage fontWeight="bold">
        {fieldState?.error?.message}
      </FormErrorMessage>
    </FormControl>
  );
}
