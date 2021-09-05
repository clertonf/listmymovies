import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { SearchMovie } from "../screens/SearchMovie";
import { MovieDetails } from "../screens/MovieDetails";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="SearchMovie" component={SearchMovie} />
      <Screen name="MovieDetails" component={MovieDetails} />
    </Navigator>
  );
}
