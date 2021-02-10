// import { Box } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import CountryInput from "../components/CountryInput";
import CountryList from "../components/CountryList";
import Header from "../components/Header";

const Home = (): JSX.Element => {
  return (
    <Box width="100%" height="100vh">
      <Header />
      <CountryInput />
      <CountryList />
    </Box>
  );
};

export default Home;
