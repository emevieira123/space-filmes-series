/* eslint-disable @typescript-eslint/no-explicit-any */
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useNavigate } from "react-router-dom"
import { path } from "../../../infra/path"
import { Box, Flex } from "@chakra-ui/react"
import { Arrow } from "../Arrow"
import { CardSlide } from "./CardSlide"
import { Movies } from "../../../app/features/AdminFilmes/types/movie"

interface SlideCardsProps {
  dataSource: Movies[];
  loading?: boolean;
  type?: string;
}

export function SlideCards({ dataSource, loading, type }: SlideCardsProps) {
  const navigate = useNavigate()
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 7,
      spacing: 20,
    },
  })

  function handleDetalhesFilme(id: string) {
    if (type === 'filmes') {
      navigate(path.FILME_ID.replace(':id', id.toString()))
    } else {
      navigate(path.SERIE_ID.replace(':id', id.toString()))
    }
  }

  return (
    <>
      {
        loading ? <h1>Carregando...</h1>
          : <Flex py="1rem">
            <Flex w="2.5rem" align="center">
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />
            </Flex>
            <Box ref={sliderRef} className="keen-slider">
              {dataSource?.map((movie, i) => {
                return (
                  <CardSlide
                    key={i}
                    index={i}
                    data={movie}
                    onClick={() => handleDetalhesFilme(movie.movieId!)}
                  />
                );
              })}
            </Box>
            <Flex w="2.5rem" align="center">
              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </Flex>
          </Flex>
      }
    </>
  );
}
