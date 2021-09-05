import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { useDispatch } from "react-redux";

import { useNavigation } from "@react-navigation/native";
import { RectButton, PanGestureHandler } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { StatusBar, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { MovieDTO } from "../../dtos/MovieDTO";
import { CardMovie } from "../../components/CardMovie";
import { ImageSlider } from "../../components/ImageSlider";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

import {
  Container,
  Header,
  Title,
  CategoryTitle,
  WrapperCategories,
  MovieWrapper,
  WrapperCards,
  MovieList,
} from "./styles";
import { Button } from "../../components/Button";

export function Home() {
  const dispatch = useDispatch();

  const theme = useTheme();
  const { navigate } = useNavigation();

  function handleSearchMovies() {
    navigate("SearchMovie");
  }

  function handleMovieDetails() {
    navigate("MovieDetails");
  
  }

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  const apiKey = "api_key=d1500cc9c6f961ce14985838ee30eee4";
  const language = "language=pt-BR";

  const [moviesReleases, setMoviesReleases] = useState<MovieDTO[]>();
  const [mostPopularMovie, setMostPopularMovie] = useState<MovieDTO[]>([]);
  const [moviesAction, setMoviesAction] = useState<MovieDTO[]>([]);
  const [moviesComedy, setMoviesComedy] = useState<MovieDTO[]>([]);
  const [moviesAnimation, setMoviesAnimation] = useState<MovieDTO[]>([]);
  const [moviesDrama, setMoviesDrama] = useState<MovieDTO[]>([]);
  const [moviesHorror, setMoviesHorror] = useState<MovieDTO[]>([]);
  const [moviesRomance, setMoviesRomance] = useState<MovieDTO[]>([]);

  useEffect(() => {
    async function listReleasesMovies() {
      const response = await api.get(`/discover/movie?${apiKey}&${language}`);

      setMoviesReleases(response.data.results);
    }
    listReleasesMovies();
  }, []);

  useEffect(() => {
    async function listPopularMovies() {
      const response = await api.get(
        `movie/top_rated?${apiKey}&${language}&page=2`
      );

      setMostPopularMovie(response.data.results);
    }
    listPopularMovies();
  }, []);

  useEffect(() => {
    async function listMoviesAction() {
      const response = await api.get(
        `movie/top_rated?${apiKey}&${language}&with_genres=28&page=1`
      );

      setMoviesAction(response.data.results);
    }
    listMoviesAction();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Title>My List Movies </Title>
      </Header>

      <WrapperCategories>
        <WrapperCards>
          <CategoryTitle>Lançamentos 🔥 </CategoryTitle>
          <MovieList
            data={moviesReleases}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <MovieWrapper>
                <CardMovie data={item} onPress={handleMovieDetails} />
              </MovieWrapper>
            )}
            ListFooterComponent={() => (
              <Button title="Ver mais" onPress={() => {}} />
            )}
          />
        </WrapperCards>

        <WrapperCards>
          <CategoryTitle>Mais populares 🔥 </CategoryTitle>
          <MovieList
            data={mostPopularMovie}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <MovieWrapper>
                <CardMovie data={item} onPress={() => {}} />
              </MovieWrapper>
            )}
            ListFooterComponent={() => (
              <Button title="Ver mais" onPress={() => {}} />
            )}
          />
        </WrapperCards>

        <WrapperCards>
          <CategoryTitle>Ação/Aventura</CategoryTitle>
          <MovieList
            data={moviesAction}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <MovieWrapper>
                <CardMovie data={item} onPress={() => {}} />
              </MovieWrapper>
            )}
            ListFooterComponent={() => (
              <Button title="Ver mais" onPress={() => {}} />
            )}
          />
        </WrapperCards>
      </WrapperCategories>

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: "absolute",
              bottom: 13,
              right: 22,
            },
          ]}
        >
          <ButtonAnimated
            onPress={handleSearchMovies}
            style={[
              styles.button,
              { backgroundColor: theme.colors.shape_dark },
            ]}
          >
            <Ionicons
              name="ios-search"
              size={32}
              color={theme.colors.success}
            />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
