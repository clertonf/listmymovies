import React from "react";
import { render } from "@testing-library/react-native";
import { SearchBar } from "../../components/SearchBar";

import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Input Component", () => {
  it("must have specific border color when active", () => {
    const { getByTestId } = render(
      <SearchBar
        testID="input-movie"
        placeholder="Busque seus filmes"
        keyboardType="default"
        autoCorrect={false}
        active={true}
      />,
      {
        wrapper: Providers,
      }
    );

    const inputComponent = getByTestId("input-movie");
    expect(inputComponent.props.style[0].borderColor).toEqual("#03B252");
    expect(inputComponent.props.style[0].borderWidth).toEqual(3);
  });
});
