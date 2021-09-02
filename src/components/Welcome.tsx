import React from "react";

import { View, Text } from "react-native";

interface Props {
  title: string;
}

// Teste para saber se o TS está configurado

export function Welcome({ title }: Props) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
