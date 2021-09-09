import React from "react";

import LottieView from "lottie-react-native";
import loadMovie from "../../assets/loadMovie.json";

import { Container } from "./styles";

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={loadMovie}
        autoPlay
        resizeMode="contain"
        style={{ height: 200 }}
        loop
      />
    </Container>
  );
}
