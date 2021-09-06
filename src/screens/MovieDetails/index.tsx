import React, { useState } from "react";
import { useSelector } from "react-redux";

import { PosterMovie } from "../../components/PosterMovie";
import { MovieDTO } from "../../dtos/MovieDTO";

import { IState } from "../../store";
import { IMovie } from "../../store/modules/movie/types";

import {
  Container,
  Header,
  Title,
  Footer,
  ContentAverage,
  Average,
  ReleaseDate,
  OverViewWrapper,
  TitleOverView,
  OverView,
  Wrapper,
} from "./styles";

export function MovieDetails() {
  const movie: IMovie = useSelector<IMovie, IMovie>((state) => {
    return state;
  });

  console.log(movie);

  return (
    <Container>
      <Header>
        <Title>Detalhes do filme</Title>
      </Header>

      <Footer>
        <PosterMovie data={movie.movie.items} as MovieDTO />
        <ContentAverage>
          <Average>IMDb: </Average>
          <ReleaseDate>Lançamento: </ReleaseDate>
        </ContentAverage>

        <OverViewWrapper>
          <TitleOverView>Sinopse:</TitleOverView>
          {movie.overview === "" ? (
            <OverView>Filme sem descrição :(</OverView>
          ) : (
            <OverView>{movie.movie.items.overview}</OverView>
          )}
        </OverViewWrapper>
      </Footer>
    </Container>
  );
}
