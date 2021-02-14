import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/react";
import { memo, useContext, useState } from "react";
import { CountryContext } from "../contexts/CountriesContext";
import colors from "../styles/colors";

const CountryInput = (): JSX.Element => {
  const { colorMode } = useColorMode();
  const countriesContext = useContext(CountryContext);
  const [searchInput, setSearchInput] = useState('');
  return (
    <Flex alignItems="center">
      <InputGroup
        mt={8}
        mb={5}
        width={{ md: "30vw" }}
        mx={5}
        boxShadow="md"
        rounded="md"
        borderColor={
          colorMode === "dark"
            ? colors.darkModeElements[800]
            : colors.lightModeElements
        }
        backgroundColor={
          colorMode === "dark"
            ? colors.darkModeElements[800]
            : colors.lightModeElements
        }
      >
        <Input
          disabled={countriesContext?.loading}
          placeholder="Search Country"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              countriesContext?.handleSubmit(searchInput);
            }
          }}
          size="lg"
        />
        <InputRightElement
          hidden={Boolean(!searchInput)}
          left="none"
          mx={5}
          mt={1}
          width="4.5rem"
        >
          <Button
            variant="unstyled"
            color={colorMode === "dark"
              ? colors.darkModeElements[600]
              : colors.lightModeInput}
            onClick={(_) => countriesContext?.handleSubmit(searchInput)}>
                SEARCH
          </Button>
        </InputRightElement>
      </InputGroup>
      <Flex mt={8} mb={5}>
        <Button
          variant="ghost"
          colorScheme="cyan"
          disabled={countriesContext?.loading}
          color={colorMode === "dark"
            ? colors.darkModeText
            : colors.lightModeInput}
          onClick={() => {
            countriesContext?.handleResetSearch();
            setSearchInput('');
          }}>
                RESET
        </Button>
      </Flex>
    </Flex>
  );
};

export default memo(CountryInput);
