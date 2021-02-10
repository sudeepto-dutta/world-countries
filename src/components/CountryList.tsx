import {
  Flex,
  FlexboxProps,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import colors from "../styles/colors";

const CountryList = (props: FlexboxProps): JSX.Element => {
  const { colorMode } = useColorMode();
  return (
    <SimpleGrid
      spacingX="40px"
      spacingY="20px"
      maxHeight="75vh"
      overflowY="scroll"
      px={5}
      my={10}
      columns={{ sm: 1, md: 2, xl: 3, "2xl": 3 }}
      autoRows="auto"
    >
      {Array.from({ length: 50 }).map((_, index) => (
        <Flex
          key={index}
          px="4"
          py="5"
          height="10vh"
          backgroundColor={
            colorMode === "dark"
              ? colors.darkModeElements[800]
              : colors.lightModeElements
          }
          minWidth={{ sm: "100%", md: "25vw" }}
          rounded="md"
          shadow="md"
          mt={5}
          {...props}
        >
          <Text>Country</Text>
        </Flex>
      ))}
    </SimpleGrid>
  );
};

export default CountryList;
