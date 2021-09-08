import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { FlatList } from "react-native";
import { MovieDTO } from "../../dtos/MovieDTO";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
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

export const WrapperCategories = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: getStatusBarHeight(),
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const CategoryTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.shape_dark};

  padding: 15px 20px;
`;

export const ContainerCardMovies = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
`;

export const MovieWrapper = styled.View`
  margin-bottom: 16px;
`;

export const WrapperCards = styled.View``;

export const MovieList = styled(FlatList as new () => FlatList<MovieDTO>).attrs(
  {
    contentContainerStyle: {
      paddingHorizontal: 28,
    },
    showsHorizontalScrollIndicator: false,
    ListFooterComponentStyle: {
      height: 150,
      justifyContent: "center",
    },
    horizontal: true,
  }
)``;
