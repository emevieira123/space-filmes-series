import { ColorProps } from "@chakra-ui/system";
import type { GroupBase, Props, Size, TagVariant } from "chakra-react-select";
import { Select as ChakraSelect } from "chakra-react-select";
import { ReactElement } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";

type PropsCustom = {
  label?: string | ReactElement;
  size?: Size;
  tagVariant?: TagVariant;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  useBasicStyles?: boolean;
  focusBorderColor?: ColorProps["color"];
  errorBorderColor?: ColorProps["color"];
  colorScheme?: ColorProps["color"];
  selectedOptionStyle?: "color" | "check";
  selectedOptionColorScheme?: ColorProps["color"];
  variant?: "outline" | "filled" | "flushed" | "unstyled";
};

export default function ChakraReactSelect<
  OptionType,
  IsMulti extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>
>(props: Props<OptionType, IsMulti, GroupType> & PropsCustom) {
  return (
    <FormControl>
      <FormLabel>{props.label}</FormLabel>
      <ChakraSelect
        noOptionsMessage={() => "Nenhum item encontrado"}
        {...props}
      />
    </FormControl>
  );
}
