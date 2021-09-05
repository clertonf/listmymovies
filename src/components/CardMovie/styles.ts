import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 135px;
  height: 260px;

  margin-right: 8px;

  justify-content: flex-start;

  border-radius: 8px;
`;

export const ImageMovie = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 18px;
`;

export const CardButton = styled(RectButton)`
  width: 100%;
  height: 180px;

  margin-right: 20px;
`;

export const WrapperLegend = styled.View`
  margin-left: 8px;
`;

export const Title = styled.Text`
  margin-top: 10px;

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.shape_dark};
`;

export const RateMovie = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
`;
