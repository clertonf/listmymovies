import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 200px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;
`;

export const ImageMovie = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 18px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.main_light};
  text-align: center;

  margin-top: 15px;
`;
