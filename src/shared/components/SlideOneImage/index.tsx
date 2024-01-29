import { Box, Img } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useAutoSlide } from "../../hooks/useAutoSlide";

interface TypeSlideBanner {
  id: number;
  title: string;
  imgURL: string;
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
        {dataSource.map((img, i) => {
          return (
            <Box
              key={i}
              className={`keen-slider__slide number-slide${i}`}
              h="30rem"
              bg="gray.400"
            >
              <Img
                src={img.imgURL}
                alt={img.title}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
