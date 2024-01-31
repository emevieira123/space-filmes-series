/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@chakra-ui/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

interface ArrowTypes {
  left?: boolean;
  onClick: (e: any) => void;
}

export function Arrow({ left, onClick }: ArrowTypes) {
  return (
    <Icon
      w="1.875rem"
      h="1.875rem"
      cursor="pointer"
      color="white"
      left={left ? "5px" : "auto"}
      right={!left ? "5px" : ""}
      onClick={onClick}
      as={left ? RiArrowLeftSLine : RiArrowRightSLine}
    />
  );
}
