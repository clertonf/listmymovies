import React, { useEffect } from "react";

import MovieCut from "../../assets/splash.svg";
import LogoSvg from "../../assets/logo.svg";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";

import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Splash() {
  const splashAnimation = useSharedValue(0);

  const navigation = useNavigation();

  function startApp() {
    navigation.navigate("Home");
  }

  const movieCutStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateY: interpolate(
            splashAnimation.value,
            [0, -50],
            [0, -50],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 3500 }, () => {
      "worklet";
      runOnJS(startApp)();
    });
  }, []);

  return (
    <Container>
      <Animated.View style={[movieCutStyle, { position: "absolute" }]}>
        <MovieCut width={80} height={100} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: "absolute" }]}>
        <LogoSvg width={180} height={100} />
      </Animated.View>
    </Container>
  );
}
