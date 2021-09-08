import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { PosterMovie } from "../../components/PosterMovie";
import { BackButton } from "../../components/BackButton";

import { IState } from "../../store";
import { IMovie } from "../../store/modules/movie/types";

import {
  Container,
  Header,
  WrapperTitle,
  WrapperBackButton,
  Title,
  Footer,
  ContentAverage,
  Average,
  ReleaseDate,
  OverViewWrapper,
  TitleOverView,
  OverView,
} from "./styles";

export function MovieDetails() {
  const { navigate } = useNavigation();

  const movie: IMovie = useSelector<IState, IMovie>((state) => {
    return state.movie.items;
  });

  const movie_date = Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(new Date(movie.release_date));

  function handleToBackHome() {
    navigate("Home");
  }

  return (
    <Container>
      <Header>
        <WrapperTitle>
          <Title>Detalhes do filme</Title>
        </WrapperTitle>

        <WrapperBackButton>
          <BackButton onPress={handleToBackHome} />
        </WrapperBackButton>
      </Header>

      <Footer>
        <PosterMovie data={movie} />
        <ContentAverage>
          <Average>IMDb: {movie.vote_average} </Average>
          <ReleaseDate>Lançamento: {movie_date}</ReleaseDate>
        </ContentAverage>

        <OverViewWrapper>
          <TitleOverView>Sinopse:</TitleOverView>
          {movie.overview === "" ? (
            <OverView>Filme sem descrição :(</OverView>
          ) : (
            <OverView>{movie.overview}</OverView>
          )}
        </OverViewWrapper>
      </Footer>
    </Container>
  );
}
