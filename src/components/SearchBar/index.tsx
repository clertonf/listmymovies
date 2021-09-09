import React, { useState } from "react";
import { Animated, Dimensions, TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Container, BoxButtonSearch, SearchIcon, Input } from "./styles";

interface InputSearchProps extends TextInputProps {
  placeholder?: string;
  onPress?: () => void;
  value?: string;
  active?: boolean;
}

export function SearchBar({
  placeholder,
  onPress,
  value,
  active = false,
  ...rest
}: InputSearchProps) {
  return (
    <Container>
      <Input
        placeholder={placeholder}
        value={value}
        active={active}
        placeholderTextColor="#AEAEB3"
        {...rest}
      />
      <BoxButtonSearch onPress={onPress}>
        <SearchIcon />
      </BoxButtonSearch>
    </Container>
  );
}
