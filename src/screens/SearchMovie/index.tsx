import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import { Alert, Keyboard, StatusBar } from "react-native";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button";
import { CardMovie } from "../../components/CardMovie";
import { LoadAnimation } from "../../components/LoadAnimation";
import { MovieDTO } from "../../dtos/MovieDTO";
import {
  getMostPopularMovies,
  getMovieAction,
  getReleaseMovies,
} from "../../requests/getMovieDetails";
import { movieInfo } from "../../store/modules/movie/actions";
import { MovieDetailsProps } from "../../types/movieDetails.types";
import {
  CategoryTitle,
  Container,
  Header,
  MovieList,
  MovieWrapper,
  Title,
  WrapperCards,
  WrapperCategories,
  WrapperTitle,
  WrapperBackButton,
  ContainerSearch,
  ContainerAnimation,
} from "./styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { BackButton } from "../../components/BackButton";
import { SearchBar } from "../../components/SearchBar";
import api from "../../services/api";

export function SearchMovie() {
  const dispatch = useDispatch();

  const apiKey = "api_key=d1500cc9c6f961ce14985838ee30eee4";
  const language = "language=pt-BR";

  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesReleases, setMoviesReleases] = useState<MovieDTO[]>([]);

  const movies = [
    {
      id: 1,
      category: moviesReleases,
      nameCategory: "Lançamentos 🔥",
    },
  ];

  function handleMovieInfo(movie: MovieDTO) {
    dispatch(movieInfo(movie));
    navigate("MovieDetails");
  }

  function handleToBackHome() {
    navigate("Home");
  }

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

    setMoviesReleases(response.data.results);
  }

  useEffect(() => {
    async function listMovies() {
      try {
        const response = await api.get(`/discover/movie?${apiKey}&${language}`);
        setMoviesReleases(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    listMovies();
  }, []);

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <WrapperTitle>
          <Title>Procurar filme</Title>
        </WrapperTitle>

        <WrapperBackButton>
          <BackButton onPress={handleToBackHome} />
        </WrapperBackButton>

        <ContainerSearch>
          <SearchBar
            placeholder="Busque seus filmes"
            value={searchTerm}
            onChangeText={(text) => {
              setSearchTerm(text);
            }}
            onPress={getMovie}
          />
        </ContainerSearch>

        <WrapperCategories>
          {movies.map((movie) => (
            <WrapperCards key={movie.id}>
              {loading ? (
                <ContainerAnimation>
                  <LoadAnimation />
                </ContainerAnimation>
              ) : (
                <MovieList
                  data={movie.category}
                  keyExtractor={(item) => String(item.id)}
                  showsVerticalScrollIndicator={false}
                  numColumns={2}
                  renderItem={({ item }) => (
                    <MovieWrapper>
                      <CardMovie
                        data={item}
                        onPress={() => handleMovieInfo(item)}
                      />
                    </MovieWrapper>
                  )}
                />
              )}
            </WrapperCards>
          ))}
        </WrapperCategories>
      </TouchableWithoutFeedback>
    </Container>
  );
}
