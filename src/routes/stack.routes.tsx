import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Splash } from "../screens/Splash";
import { Home } from "../screens/Home";
import { SearchMovie } from "../screens/SearchMovie";
import { MovieDetails } from "../screens/MovieDetails";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="SearchMovie" component={SearchMovie} />
      <Screen name="MovieDetails" component={MovieDetails} />
    </Navigator>
  );
}
