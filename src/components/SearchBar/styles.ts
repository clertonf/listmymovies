import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Animated, Dimensions, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(Animated.View)`
  width: 60px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.title};
  border-radius: 30px;
`;

export const Input = styled(TextInput)`
  flex: 1;

  margin-right: 60px;
  margin-left: 20px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const BoxButtonSearch = styled(RectButton)`
  width: 60px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.success};

  position: absolute;
  right: 0px;

  border-radius: 30px;

  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(Ionicons).attrs({
  name: "search",
})`
  color: #fff;
  font-size: 25px;
`;
