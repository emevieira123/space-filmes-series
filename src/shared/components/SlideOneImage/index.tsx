import { Box, Button, Heading, Img, Text } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useAutoSlide } from "../../hooks/useAutoSlide";

interface TypeSlideBanner {
  id: string;
  name: string;
  bannerUrl: string;
  description: string;
}

interface BannerSlideProps {
  dataSource: TypeSlideBanner[];
}

export function SlideOneImage({ dataSource }: BannerSlideProps) {
  const { AutoSlide } = useAutoSlide();
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
  }, AutoSlide);

  return (
    <Box className="navigation-wrapper" style={{ marginBottom: '1.5rem' }} w="100%">
      <Box ref={sliderRef} className="keen-slider">
        {dataSource.map((movie, i) => {
          return (
            <Box
              key={i}
              className={`keen-slider__slide number-slide${i}`}
              h="30rem"
              bg="gray.400"
              position="relative"
            >
              <Img
                src={movie.bannerUrl}
                alt={movie.name}
                w="100%"
                h="100%"
                objectFit="cover"
              />
              <Box
                position="absolute"
                bottom="0"
                left="0"
                w="100%"
                h="50%"
                background="linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1.5) 100%)"
              />
              <Box
                position="absolute"
                bottom="1rem"
                left="4rem"
                zIndex="1"
                w="50rem"
                p="0.5rem"
              >
                <Heading fontSize={24} zIndex="1">{movie.name}</Heading>
                <Text mb="1rem" noOfLines={[1, 2]}>{movie.description}</Text>
                <Button colorScheme="gray" fontWeight="bold">SAIBA MAIS</Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
