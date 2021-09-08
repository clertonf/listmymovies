import styled from "styled-components/native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const Header = styled.View``;

export const WrapperTitle = styled.View`
  margin-top: ${getStatusBarHeight() + 14}px;
  align-items: center;
`;

export const WrapperBackButton = styled.View`
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.success};

  margin-top: 20px;
`;

export const ContentSearch = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;

export const WrapperMovies = styled.View`
  margin-bottom: 16px;

  padding: 10px;
`;

export const WrapperCategories = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: getStatusBarHeight(),
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const WrapperCards = styled.View``;

export const CategoryTitle = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.shape_dark};

  padding: 15px 20px;
`;
