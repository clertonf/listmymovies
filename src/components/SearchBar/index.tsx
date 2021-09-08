import React from "react";
import { Animated, Dimensions, TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Container, BoxButtonSearch, SearchIcon, Input } from "./styles";

interface InputSearchProps extends TextInputProps {
  placeholder: string;
  onPress: () => void;
  value: string;
}

export function SearchBar({
  placeholder,
  onPress,
  value,

  ...rest
}: InputSearchProps) {
  const theme = useTheme();
  const animation = new Animated.Value(60);
  const { width } = Dimensions.get("window");

  function onSearch() {
    Animated.spring(animation, {
      toValue: width * 0.7,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Container style={{ width: animation }}>
      <Input
        placeholder={placeholder}
        value={value}
        returnKeyType="search"
        placeholderTextColor={theme.colors.text_detail}
        {...rest}
      />
      <BoxButtonSearch
        onPress={() => {
          onSearch(), onPress();
        }}
      >
        <SearchIcon />
      </BoxButtonSearch>
    </Container>
  );
}
