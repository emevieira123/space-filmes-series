import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import {
  Control,
  FieldPath,
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
  useController,
} from "react-hook-form";

interface InputCustomProps<T extends FieldValues> extends InputProps {
  name: FieldPath<T>;
  label: string;
  type?: string;
  control?: Control<T>;
  dataTestid?: string;
  rules?: Parameters<UseFormRegister<T>>[1];
}

function InputCustom<T extends FieldValues>({
  name,
  label,
  type,
  control,
  dataTestid,
  rules,
  ...rest
}: InputCustomProps<T>) {
  const { field, fieldState } = useController({
    control,
    defaultValue: "" as PathValue<T, Path<T>>,
    name,
    rules,
  });

  return (
    <FormControl isInvalid={fieldState.invalid}>
      <FormLabel>{label}</FormLabel>
      <Input
        // type={type}
        {...field}
        {...rest}
        data-testid={dataTestid}
        _placeholder={{ color: "gray.400" }}
        onChange={(e) => {
          const Value =
            type === "number"
              ? e.target.value.replace(/[^\d]/g, "")
              : e.target.value;
          field.onChange(Value);
        }}
      />

      <FormErrorMessage fontWeight="bold">
        {fieldState?.error?.message}
      </FormErrorMessage>
    </FormControl>
  );
}

export default InputCustom;
