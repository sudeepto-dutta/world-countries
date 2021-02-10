import { Flex, FlexProps, Heading, useColorMode } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import colors from "../styles/colors";

const Header = (props: FlexProps): JSX.Element => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      position="sticky"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      backgroundColor={
        colorMode === "dark"
          ? colors.darkModeElements[800]
          : colors.lightModeElements
      }
      minH="5vh"
      shadow="lg"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h3" size="lg" letterSpacing={"-.1rem"}>
          World Countries
        </Heading>
      </Flex>
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Header;
