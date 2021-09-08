import React, { useState, useEffect } from "react";

import api from "../../services/api";
import { MovieDTO } from "../../dtos/MovieDTO";

import {
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Alert,
} from "react-native";

import { SearchBar } from "../../components/SearchBar";

import {
  Container,
  Header,
  Title,
  ContentSearch,
  WrapperTitle,
  WrapperBackButton,
} from "./styles";
import { CardMovie } from "../../components/CardMovie";

import { IMovie, IMovieState } from "../../store/modules/movie/types";
import { BackButton } from "../../components/BackButton";
import { useNavigation } from "@react-navigation/native";

export function SearchMovie() {
  const { navigate } = useNavigation();
  const apiKey = "api_key=d1500cc9c6f961ce14985838ee30eee4";
  const language = "language=pt-BR";

  const [variedMovies, setVariedMovies] = useState<MovieDTO[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function getMovie() {
    if (!searchTerm) {
      return;
    }

    const response = await api.get(
      `https://api.themoviedb.org/3/search/movie?${apiKey}&${language}&page=1&include_adult=false&query=${searchTerm}`
    );

    console.log(response.data);
    if (response.data.total_results === 0) {
      Alert.alert("Ops!", "Nenhum filme encontrado :(");
    }
  }

  useEffect(() => {
    async function listMoviesAction() {
      const response = await api.get(
        `discover/movie?${apiKey}&${language}&page=${1}`
      );

      setVariedMovies(response.data.results);
    }
    listMoviesAction();
  }, []);

  function handleToBackHome() {
    navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <WrapperTitle>
          <Title>Procurar filme</Title>
        </WrapperTitle>

        <WrapperBackButton>
          <BackButton onPress={handleToBackHome} />
        </WrapperBackButton>
        <ContentSearch>
          <SearchBar
            placeholder="Busque seus filmes"
            value={searchTerm}
            onChangeText={(text) => {
              setSearchTerm(text);
            }}
            onPress={getMovie}
          />
        </ContentSearch>
      </Container>
    </TouchableWithoutFeedback>
  );
}
