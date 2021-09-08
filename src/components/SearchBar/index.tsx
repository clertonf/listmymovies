import React, { useState } from "react";
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

  return (
    <Container>
      <Input
        placeholder={placeholder}
        value={value}
        placeholderTextColor={theme.colors.text_detail}
        {...rest}
      />
      <BoxButtonSearch onPress={onPress}>
        <SearchIcon />
      </BoxButtonSearch>
    </Container>
  );
}
