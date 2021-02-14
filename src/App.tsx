import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./styles/theme";
import Home from "./pages/Home";
import { CountryProvider } from "./contexts/CountriesContext";

export const App = (): JSX.Element => (
  <ChakraProvider theme={customTheme} resetCSS={true}>
    <CountryProvider>
      <Home />
    </CountryProvider>
  </ChakraProvider>
);
