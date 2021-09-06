import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(120)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.success};

  margin-top: 20px;
`;

export const Footer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: getStatusBarHeight() + 20,
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const ContentAverage = styled.View`
  width: 100%;
  padding: 20px 20px;
  margin-top: 35px;

  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Average = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.text_gold};
`;

export const ReleaseDate = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.shape};
`;

export const OverViewWrapper = styled.View`
  width: 100%;
  padding: 20px;
`;

export const TitleOverView = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.success};
`;

export const OverView = styled.Text`
  margin-top: 10px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-align: justify;
  color: ${({ theme }) => theme.colors.text};
`;

export const Wrapper = styled.View``;
