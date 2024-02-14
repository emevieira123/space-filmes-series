import { Flex, Text } from "@chakra-ui/react";
import { SlideOneImage } from "../../../shared/components/SlideOneImage";
import { SlideCards } from "../../../shared/components/SlideCards";
import useGetMovies from "./hooks/useGetMovies";

const bannerMock = [
  {
    id: "9e900b5a-3743-4596-8e92-5389771d7820",
    name: 'OPPENHEIMER',
    bannerUrl: 'https://preview.redd.it/y9ocptgp6zc91.jpg?width=1500&format=pjpg&auto=webp&s=2fe63d41e73ec1edb82e147bd6d2feebdf6b386b',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula vitae mi feugiat consequat. Vivamus vel leo quis nisl fringilla molestie sed vel ex. Nullam iaculis tincidunt libero. Nullam sollicitudin velit vitae nisi tincidunt porttitor. In hac habitasse platea dictumst. In porttitor orci ante, non ornare arcu bibendum vel. "
  },
  {
    id: "75c85b07-ad98-4c80-b7ee-cee709545ba7",
    name: 'MEGATUBARÃO 2',
    bannerUrl: 'https://i.ytimg.com/vi/vFy_ZbgSef0/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCs9ySgPdr6rIdGGL3c3LF8q6XMSg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula vitae mi feugiat consequat. Vivamus vel leo quis nisl fringilla molestie sed vel ex. Nullam iaculis tincidunt libero. Nullam sollicitudin velit vitae nisi tincidunt porttitor. In hac habitasse platea dictumst. In porttitor orci ante, non ornare arcu bibendum vel. "
  },
  {
    id: "2bc72041-37dc-4413-8603-1ea1042afcc9",
    name: 'Besouro Azul',
    bannerUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKbPq0nDiyrCc4aaNiK0mv1sNYPl2azZ2yFeYwCa31acyFodu0Bm6oKY7va04dtFWESG5kldFJt1DvVVLrYBIVPKpWQTC7DjO0uktTUmJv3gAGtlg3JcA_Y-pgioDytz0BL7kQe0qVTDw_dO8W_eS1nxL51YAcqlC5u7dM6yOgdKYAqSf9k2Ul5qJ7hQ/s1419/ba1.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ligula vitae mi feugiat consequat. Vivamus vel leo quis nisl fringilla molestie sed vel ex. Nullam iaculis tincidunt libero. Nullam sollicitudin velit vitae nisi tincidunt porttitor. In hac habitasse platea dictumst. In porttitor orci ante, non ornare arcu bibendum vel. "
  }
]

export default function Home() {
  const { data: movies, isLoading: isLoadingMovies } = useGetMovies();

  return (
    <Flex flexDirection="column">
      <SlideOneImage dataSource={bannerMock} />

      {
        movies && !isLoadingMovies
          ? <SlideCards dataSource={movies?.items} loading={isLoadingMovies} type="filmes" />
          : <Text>Carregando...</Text>
      }
    </Flex>
  );
}
