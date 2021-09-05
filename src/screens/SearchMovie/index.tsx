import React, { useState, useEffect } from "react";

import api from "../../services/api";
import { MovieDTO } from "../../dtos/MovieDTO";

import { TouchableWithoutFeedback, Keyboard, FlatList } from "react-native";

import { SearchBar } from "../../components/SearchBar";

import {
  Container,
  Header,
  Title,
  ContentSearch,
  WrapperMovies,
  WrapperCategories,
  WrapperCards,
  CategoryTitle,
} from "./styles";
import { CardMovie } from "../../components/CardMovie";

export function SearchMovie() {
  const apiKey = "api_key=d1500cc9c6f961ce14985838ee30eee4";
  const language = "language=pt-BR";

  const [variedMovies, setVariedMovies] = useState<MovieDTO[]>([]);

  useEffect(() => {
    async function listMoviesAction() {
      const response = await api.get(
        `discover/movie?${apiKey}&${language}&page=${1}`
      );

      setVariedMovies(response.data.results);
    }
    listMoviesAction();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Procurar filme</Title>
        </Header>
        <ContentSearch>
          <SearchBar />
        </ContentSearch>
      </Container>
    </TouchableWithoutFeedback>
  );
}
