import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  getReleaseMovies,
  getMovieAction,
  getMostPopularMovies,
  getMovieAnimation,
  getMovieComedian,
  getMovieRomance,
  getMovieMistery,
  getMovieHorror,
} from "../../requests/getMovieDetails";

import { useDispatch } from "react-redux";
import { movieInfo } from "../../store/modules/movie/actions";

import { useNavigation } from "@react-navigation/native";
import { RectButton, PanGestureHandler } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { StatusBar, StyleSheet, BackHandler, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { MovieDTO } from "../../dtos/MovieDTO";
import { MovieDetailsProps } from "../../types/movieDetails.types";
import { CardMovie } from "../../components/CardMovie";
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
  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState<MovieDetailsProps>({
    moviesReleases: [],
    mostPopularMovie: [],
    moviesAction: [],
    moviesComedian: [],
    moviesAnimation: [],
    moviesRomance: [],
    moviesMystery: [],
    moviesHorror: [],
  });

  const movies = [
    {
      id: 1,
      category: movieDetails.moviesReleases,
      nameCategory: "Lançamentos 🔥",
    },
    {
      id: 2,
      category: movieDetails.mostPopularMovie,
      nameCategory: "Mais populares 🌍",
    },
    {
      id: 3,
      category: movieDetails.moviesAction,
      nameCategory: "Ação/Aventura 🔫",
    },
    {
      id: 4,
      category: movieDetails.moviesAnimation,
      nameCategory: "Animação/Fantasia 🗡️",
    },
    {
      id: 5,
      category: movieDetails.moviesComedian,
      nameCategory: "Comédia 😂",
    },
    {
      id: 6,
      category: movieDetails.moviesRomance,
      nameCategory: "Romance ❤️",
    },
    {
      id: 7,
      category: movieDetails.moviesMystery,
      nameCategory: "Suspense 🔎",
    },
    {
      id: 8,
      category: movieDetails.moviesHorror,
      nameCategory: "Terror 👻",
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
          .all([
            getReleaseMovies(),
            getMovieAction(),
            getMostPopularMovies(),
            getMovieAnimation(),
            getMovieComedian(),
            getMovieRomance(),
            getMovieMistery(),
            getMovieHorror(),
          ])
          .then(
            axios.spread(function (
              releaseMovies,
              movieAction,
              mostPopularMovies,
              animation,
              comedian,
              romance,
              mistery,
              horror
            ) {
              setMovieDetails({
                moviesReleases: releaseMovies.data.results,
                mostPopularMovie: mostPopularMovies.data.results,
                moviesAction: movieAction.data.results,
                moviesAnimation: animation.data.results,
                moviesComedian: comedian.data.results,
                moviesRomance: romance.data.results,
                moviesMystery: mistery.data.results,
                moviesHorror: horror.data.results,
              });
            })
          );
      } catch (error) {
        Alert.alert("Ops!", " Erro interno, tente novamente mais tarde");
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

      {loading ? (
        <>
          <LoadAnimation />
        </>
      ) : (
        <WrapperCategories>
          {movies.map((movie) => (
            <WrapperCards key={movie.id}>
              <CategoryTitle>{movie.nameCategory}</CategoryTitle>

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
              />
            </WrapperCards>
          ))}
        </WrapperCategories>
      )}

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
            testID="searchMovieButton"
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
