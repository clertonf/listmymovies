import React from "react";
import { MovieDTO } from "../../dtos/MovieDTO";

import { Container, ImageMovie, Title } from "./styles";

interface PosterMovieProps {
  data: MovieDTO;
}

export function PosterMovie({ data }: PosterMovieProps) {
  return (
    <Container>
      <ImageMovie
        source={
          data.poster_path !== null
            ? {
                uri: `https://image.tmdb.org/t/p/w342/${data.backdrop_path}`,
              }
            : { uri: "https://i.dlpng.com/static/png/6770178_preview.png" }
        }
        resizeMode="contain"
      />
      <Title>{data.title}</Title>
    </Container>
  );
}

// uri: `https://image.tmdb.org/t/p/w342/${data.backdrop_path}`,
