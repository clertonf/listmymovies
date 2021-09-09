import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

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
  WrapperReleaseDate,
} from "./styles";

export function MovieDetails() {
  const { goBack } = useNavigation();

  const movie: IMovie = useSelector<IState, IMovie>((state) => {
    return state.movie.items;
  });

  const dateFormated = moment(movie.release_date).format("DD/MM/YYYY");

  function handleGoBack() {
    goBack();
  }

  return (
    <Container>
      <Header>
        <WrapperTitle>
          <Title>Detalhes do filme</Title>
        </WrapperTitle>

        <WrapperBackButton>
          <BackButton onPress={handleGoBack} />
        </WrapperBackButton>
      </Header>

      <Footer>
        <PosterMovie data={movie} />
        <ContentAverage>
          <Average>IMDb: {movie.vote_average} </Average>
          {dateFormated === "Invalid date" ? (
            <WrapperReleaseDate>
              <ReleaseDate>Sem data de lançamento :(</ReleaseDate>
            </WrapperReleaseDate>
          ) : (
            <WrapperReleaseDate>
              <ReleaseDate>Lançamento </ReleaseDate>
              <ReleaseDate>{dateFormated}</ReleaseDate>
            </WrapperReleaseDate>
          )}
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
