import React from "react";
import { MovieDTO } from "../../dtos/MovieDTO";

import { Container, ImageMovie, Title } from "./styles";

interface Props {
  data: MovieDTO;
}

export function PosterMovie({ data }: Props) {
  return (
    <Container>
      <ImageMovie
        source={{
          uri: `https://image.tmdb.org/t/p/w342/${data.backdrop_path}`,
        }}
        resizeMode="contain"
      />
      <Title>{data.title}</Title>
    </Container>
  );
}

// uri: `https://image.tmdb.org/t/p/w342/${data.backdrop_path}`,
