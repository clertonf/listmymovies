import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Fontisto } from "@expo/vector-icons";

export const Container = styled(RectButton)`
  width: 100%;

  justify-content: flex-start;
  flex-direction: row;
  margin-top: 20px;

  padding: 10px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.title};
`;

export const ImageMovie = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 5px;
`;

export const CardButton = styled.View`
  width: 120px;
  height: 180px;
`;

export const WrapperLegend = styled.View`
  width: 60%;
  margin-left: 8px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 4,
})`
  margin-top: 20px;

  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
`;

export const ImdbIcon = styled(Fontisto).attrs({
  name: "imdb",
})`
  color: ${({ theme }) => theme.colors.text_gold};
  font-size: 25px;
`;

export const WrapperSubtitle = styled.View`
  width: 100%;
  padding: 20px 10px;

  justify-content: space-between;
`;

export const NoteIMDB = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;

  margin-left: 8px;
`;

export const ContentNoteImdb = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.shape};

  margin-left: 8px;
`;

export const CalendarIcon = styled(Fontisto).attrs({
  name: "calendar",
})`
  color: ${({ theme }) => theme.colors.main};
  font-size: 25px;
`;

export const ContentDate = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;
