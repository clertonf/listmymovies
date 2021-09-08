import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { FlatList } from "react-native";
import { MovieDTO } from "../../dtos/MovieDTO";

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

export const WrapperCategories = styled.View`
  margin-top: 20px;
  padding-bottom: ${RFPercentage(30)}px;
`;

export const CategoryTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.shape_dark};

  padding: 10px 20px;
`;

export const ContainerSearch = styled.View`
  flex-direction: row-reverse;

  padding: 10px 30px;
`;

export const ContainerAnimation = styled.View`
  margin-top: ${RFPercentage(20)}px;
`;

export const MovieWrapper = styled.View`
  margin-bottom: 6px;
`;

export const WrapperCards = styled.View``;

export const MovieList = styled(FlatList as new () => FlatList<MovieDTO>).attrs(
  {
    contentContainerStyle: {
      alignItems: "center",

      marginTop: RFPercentage(5),
      paddingBottom: RFPercentage(60),
    },
  }
)``;
