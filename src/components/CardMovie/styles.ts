import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 135px;
  height: 260px;

  margin: 5px;

  justify-content: flex-start;

  border-radius: 8px;
`;

export const ImageMovie = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 22px;
`;

export const CardButton = styled(RectButton)`
  width: 100%;
  height: 160px;
`;

export const WrapperLegend = styled.View`
  margin-left: 8px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 4,
})`
  margin-top: 10px;

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;
