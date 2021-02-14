import { Box, useColorMode } from "@chakra-ui/react";
import { memo } from "react";
import CountryInput from "../components/CountryInput";
import CountryList from "../components/CountryList";
import Header from "../components/Header";
import colors from "../styles/colors";

const Home = (): JSX.Element => {
  const { colorMode } = useColorMode();
  return (
    <Box width="100%" height="100vh" backgroundColor={
      colorMode === "dark"
        ? colors.darkModeElements[800]
        : colors.lightModeElements

    }>
      <Header />
      <CountryInput />
      <CountryList />
    </Box>
  );
};

export default memo(Home);
