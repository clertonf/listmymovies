import React, { useState } from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import moment from "moment";

import { MovieDTO } from "../../dtos/MovieDTO";

import {
  Container,
  ImageMovie,
  CardButton,
  Title,
  WrapperLegend,
  ImdbIcon,
  WrapperSubtitle,
  NoteIMDB,
  ContentNoteImdb,
  DateText,
  CalendarIcon,
  ContentDate,
} from "./styles";

interface CardMovieProps extends RectButtonProps {
  data: MovieDTO;
}

export function CardMovieHorizontal({ data, ...rest }: CardMovieProps) {
  const dateFormated = moment(data.release_date).format("DD/MM/YYYY");
  return (
    <Container {...rest}>
      <CardButton>
        <ImageMovie
          source={
            data.poster_path !== null
              ? {
                  uri: `https://image.tmdb.org/t/p/w342/${data.poster_path}`,
                }
              : { uri: "https://i.dlpng.com/static/png/6770178_preview.png" }
          }
          resizeMode="contain"
        />
      </CardButton>
      <WrapperLegend>
        <Title>{data.title}</Title>

        <WrapperSubtitle>
          <ContentNoteImdb>
            <ImdbIcon />
            <NoteIMDB>{data.vote_average}</NoteIMDB>
          </ContentNoteImdb>
          <ContentDate>
            <CalendarIcon />
            <DateText>{dateFormated}</DateText>
          </ContentDate>
        </WrapperSubtitle>
      </WrapperLegend>
    </Container>
  );
}
