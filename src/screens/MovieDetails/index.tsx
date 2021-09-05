import React from "react";
import { useSelector } from "react-redux";

import { PosterMovie } from "../../components/PosterMovie";
import { MovieDTO } from "../../dtos/MovieDTO";

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
} from "./styles";

export function MovieDetails() {
  const text = useSelector((state) => state.listReducer.test_string);
  console.log(text);

  return (
    <Container>
      <Header>
        <Title>Detalhes do filme</Title>
      </Header>

      <Footer>
        <PosterMovie />

        <ContentAverage>
          <Average>IMDb: 9</Average>
          <ReleaseDate>Lançamento: 28/02/2021</ReleaseDate>
        </ContentAverage>

        <OverViewWrapper>
          <TitleOverView>Sinopse</TitleOverView>
          <OverView>
            The world is stunned when a group of time travelers arrive from the
            year 2051 to deliver an urgent message: Thirty years in the future,
            mankind is losing a global war against a deadly alien species. The
            only hope for survival is for soldiers and civilians from the
            present to be transported to the future and join the fight. Among
            those recruited is high school teacher and family man Dan Forester.
            Determined to save the world for his young daughter, Dan teams up
            with a brilliant scientist and his estranged father in a desperate
            quest to rewrite the fate of the planet.
          </OverView>
        </OverViewWrapper>
      </Footer>
    </Container>
  );
}
