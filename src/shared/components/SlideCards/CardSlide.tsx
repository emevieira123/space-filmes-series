import { Box, Img, Text } from "@chakra-ui/react";
import { Movies } from "../../../app/features/AdminFilmes/types/movie";

interface CardProps {
  index: number;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  data: Movies;
}

export function CardSlide({ index, data, onClick }: CardProps) {

  return (
    <Box
      h="36vh"
      bg="gray.400"
      borderRadius="1.5rem"
      cursor="pointer"
      transition="all 0.3s"
      _hover={{ opacity: "0.8" }}
      className={`keen-slider__slide number-slide${index}`}
      onClick={onClick}
    >
      <Box
        w="100%"
        position="absolute"
        bottom={0}
        p="0.5 1rem"
        bg="linear-gradient(to top, #000000, rgba(0, 0, 0, 0.8), transparent)"
      >
        <Text ml="0.5rem" fontWeight="bold" textAlign="center">{data.name}</Text>
        {/* <Flex> */}
        {/* <p>{format(anoLacamento, "MM/dd/yyyy")}</p> */}
        <Text ml="0.5rem" textAlign="center">{data.releaseYear}</Text>
        {/* </Flex> */}
      </Box>
      <Img w="100%" h="100%" objectFit="cover" src={data.imageUrl && data.imageUrl} alt={data.name} />
    </Box>
  );
}
