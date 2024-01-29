import { Flex } from "@chakra-ui/react";
import { SlideOneImage } from "../../../shared/components/SlideOneImage";

const bannerMock = [
  {
    id: 1,
    title: 'OPPENHEIMER',
    imgURL: 'https://preview.redd.it/y9ocptgp6zc91.jpg?width=1500&format=pjpg&auto=webp&s=2fe63d41e73ec1edb82e147bd6d2feebdf6b386b'
  },
  {
    id: 2,
    title: 'MEGATUBARÃO 2',
    imgURL: 'https://i.ytimg.com/vi/vFy_ZbgSef0/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCs9ySgPdr6rIdGGL3c3LF8q6XMSg'
  },
  {
    id: 3,
    title: 'Besouro Azul',
    imgURL: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKbPq0nDiyrCc4aaNiK0mv1sNYPl2azZ2yFeYwCa31acyFodu0Bm6oKY7va04dtFWESG5kldFJt1DvVVLrYBIVPKpWQTC7DjO0uktTUmJv3gAGtlg3JcA_Y-pgioDytz0BL7kQe0qVTDw_dO8W_eS1nxL51YAcqlC5u7dM6yOgdKYAqSf9k2Ul5qJ7hQ/s1419/ba1.jpg'
  }
]

export default function Home() {
  return (
    <Flex>
      <SlideOneImage dataSource={bannerMock} />
    </Flex>
  );
}
