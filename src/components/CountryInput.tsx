import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import colors from "../styles/colors";

const CountryInput = (): JSX.Element => {
  const { colorMode } = useColorMode();
  return (
    <InputGroup
      my={5}
      width={{ md: "30vw" }}
      mx={5}
      shadow="md"
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
      <InputLeftElement
        pointerEvents="none"
        left="none"
        mt={1}
        children={
          <Icon viewBox="0 0 129 129" boxSize="5">
            <path
              fill="lightgray"
              // eslint-disable-next-line max-len
              d="M51.6,96.7c11,0,21-3.9,28.8-10.5l35,35c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.9-1.2c1.6-1.6,1.6-4.2,0-5.8l-35-35  c6.5-7.8,10.5-17.9,10.5-28.8c0-24.9-20.2-45.1-45.1-45.1C26.8,6.5,6.5,26.8,6.5,51.6C6.5,76.5,26.8,96.7,51.6,96.7z M51.6,14.7   c20.4,0,36.9,16.6,36.9,36.9C88.5,72,72,88.5,51.6,88.5c-20.4,0-36.9-16.6-36.9-36.9C14.7,31.3,31.3,14.7,51.6,14.7z"
            />
          </Icon>
        }
      />
      <Input placeholder="Search Country" size="lg" />
    </InputGroup>
  );
};

export default CountryInput;
