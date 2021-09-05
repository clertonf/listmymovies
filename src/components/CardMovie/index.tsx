import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

import { MovieDTO } from "../../dtos/MovieDTO";

import {
  Container,
  ImageMovie,
  CardButton,
  Title,
  WrapperLegend,
} from "./styles";

interface Props extends RectButtonProps {
  data: MovieDTO;
}

export function CardMovie({ data, ...rest }: Props) {
  return (
    <Container>
      <CardButton {...rest}>
        <ImageMovie
          source={{
            uri: `https://image.tmdb.org/t/p/w342/${data.poster_path}`,
          }}
          resizeMode="contain"
        />
      </CardButton>
      <WrapperLegend>
        <Title>{data.title}</Title>
      </WrapperLegend>
    </Container>
  );
}
