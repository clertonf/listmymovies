import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import { Alert, Keyboard, StatusBar } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { movieInfo } from "../../store/modules/movie/actions";

import { BackButton } from "../../components/BackButton";
import { CardMovieHorizontal } from "../../components/CardMovieHorizontal";
import { LoadAnimation } from "../../components/LoadAnimation";
import { SearchBar } from "../../components/SearchBar";
import { MovieDTO } from "../../dtos/MovieDTO";

import {
  Container,
  ContainerAnimation,
  ContainerSearch,
  MovieList,
  MovieWrapper,
  Title,
  WrapperBackButton,
  WrapperCards,
  WrapperCategories,
  WrapperTitle,
} from "./styles";

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

    if (response.data.total_results === 0) {
      Alert.alert("Ops!", "Nenhum filme encontrado :(");
    }
    console.log(response.data.results);
    setMoviesReleases(response.data.results);
  }

  useEffect(() => {
    async function listMovies() {
      try {
        const response = await api.get(`/discover/movie?${apiKey}&${language}`);
        setMoviesReleases(response.data.results);
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
                  numColumns={1}
                  renderItem={({ item }) => (
                    <MovieWrapper>
                      <CardMovieHorizontal
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
