import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  getReleaseMovies,
  getMovieAction,
  getMostPopularMovies,
} from "../../requests/getMovieDetails";

import { useDispatch } from "react-redux";
import { movieInfo } from "../../store/modules/movie/actions";

import { useNavigation } from "@react-navigation/native";
import { RectButton, PanGestureHandler } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { StatusBar, StyleSheet, BackHandler } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { MovieDTO } from "../../dtos/MovieDTO";
import { MovieDetailsProps } from "../../types/movieDetails.types";
import { CardMovie } from "../../components/CardMovie";
import { Button } from "../../components/Button";
import { LoadAnimation } from "../../components/LoadAnimation";

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

export function Home() {
  const dispatch = useDispatch();

  const theme = useTheme();
  const { navigate } = useNavigation();

  function handleSearchMovies() {
    navigate("SearchMovie");
  }

  const [movieDetails, setMovieDetails] = useState<MovieDetailsProps>({
    moviesReleases: [],
    mostPopularMovie: [],
    moviesAction: [],
  });

  const [loading, setLoading] = useState(true);

  const test_movies = [
    {
      id: 1,
      category: movieDetails.moviesReleases,
      nameCategory: "Lançamentos 🔥",
    },
    {
      id: 2,
      category: movieDetails.mostPopularMovie,
      nameCategory: "Mais populares 🔥",
    },
    {
      id: 3,
      category: movieDetails.moviesAction,
      nameCategory: "Ação/Aventura",
    },
  ];

  function handleMovieInfo(movie: MovieDTO) {
    dispatch(movieInfo(movie));
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

  useEffect(() => {
    async function listMovies() {
      try {
        axios
          .all([getReleaseMovies(), getMovieAction(), getMostPopularMovies()])
          .then(
            axios.spread(function (
              releaseMovies,
              movieAction,
              mostPopularMovies
            ) {
              setMovieDetails({
                moviesReleases: releaseMovies.data.results,
                mostPopularMovie: movieAction.data.results,
                moviesAction: mostPopularMovies.data.results,
              });
            })
          );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    listMovies();
  }, []);

  //Prevenir volta ao splash (Android)
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
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
        {test_movies.map((movie) => (
          <WrapperCards key={movie.id}>
            <CategoryTitle>{movie.nameCategory}</CategoryTitle>
            {loading ? (
              <LoadAnimation />
            ) : (
              <MovieList
                data={movie.category}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                  <MovieWrapper>
                    <CardMovie
                      data={item}
                      onPress={() => handleMovieInfo(item)}
                    />
                  </MovieWrapper>
                )}
                ListFooterComponent={() => (
                  <Button title="Ver mais" onPress={() => {}} />
                )}
              />
            )}
          </WrapperCards>
        ))}
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
