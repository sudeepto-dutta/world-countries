import { memo, useContext } from "react";
import {
  AspectRatio,
  createIcon,
  Flex,
  FlexboxProps,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import colors from "../styles/colors";
import { CountryContext } from "../contexts/CountriesContext";

const NoResultIcon = memo(createIcon({
  displayName: "NoResultIcon",
  viewBox: "0 0 512.00037 512",
  path: (
    <>
      {/* eslint-disable-next-line max-len */}
      <path d="M248.953125 61.273438c-5.367187-1.238282-10.722656 2.101562-11.964844 7.46875-1.242187 5.367187 2.105469 10.726562 7.472657 11.96875 24.8125 5.734374 47.492187 18.332031 65.582031 36.421874 53.183593 53.183594 53.183593 139.726563 0 192.910157-53.183594 53.1875-139.726563 53.1875-192.910157 0-53.1875-53.183594-53.1875-139.726563 0-192.910157 15.269532-15.269531 33.339844-26.40625 53.710938-33.109374 5.230469-1.71875 8.078125-7.355469 6.359375-12.589844-1.722656-5.234375-7.363281-8.082032-12.59375-6.359375-23.367187 7.683593-44.085937 20.453125-61.582031 37.953125-60.964844 60.964844-60.964844 160.160156 0 221.125 30.480468 30.480468 70.519531 45.722656 110.5625 45.722656 40.039062-.003906 80.078125-15.242188 110.5625-45.722656 60.960937-60.964844 60.960937-160.160156 0-221.125-20.738282-20.734375-46.738282-35.175782-75.199219-41.753906zm0 0"/><path d="M498.414062 432.707031l-104.53125-104.53125c53.601563-84.054687 41.863282-194.484375-29.265624-265.617187C324.277344 22.21875 270.640625 0 213.589844 0c-57.054688 0-110.691406 22.21875-151.03125 62.558594C22.214844 102.898438 0 156.535156 0 213.589844c0 57.050781 22.214844 110.6875 62.558594 151.027344 40.339844 40.339843 93.972656 62.554687 151.023437 62.554687 40.945313 0 80.386719-11.484375 114.59375-33.289063l104.53125 104.53125c8.746094 8.75 20.414063 13.566407 32.855469 13.566407 12.4375 0 24.105469-4.816407 32.855469-13.566407 18.109375-18.117187 18.109375-47.589843-.003907-65.707031zm-14.105468 51.601563c-4.980469 4.976562-11.636719 7.71875-18.746094 7.71875-7.113281 0-13.769531-2.742188-18.75-7.71875L336.507812 374.003906c-1.929687-1.933594-4.484374-2.921875-7.054687-2.921875-1.976563 0-3.960937.582031-5.683594 1.777344-32.410156 22.480469-70.515625 34.363281-110.1875 34.363281-51.722656 0-100.347656-20.140625-136.917969-56.710937-75.5-75.5-75.5-198.347657 0-273.847657 36.574219-36.574218 85.199219-56.714843 136.925782-56.714843 51.722656 0 100.347656 20.140625 136.921875 56.714843 66.28125 66.285157 75.683593 170.207032 22.347656 247.105469-2.75 3.964844-2.269531 9.324219 1.144531 12.738281L484.308594 446.8125c10.335937 10.335938 10.335937 27.15625 0 37.496094zm0 0"/><path d="M273.804688 153.371094c-3.894532-3.894532-10.207032-3.894532-14.105469 0l-46.109375 46.109375-46.113282-46.109375c-3.894531-3.894532-10.210937-3.894532-14.105468 0-3.894532 3.894531-3.894532 10.210937 0 14.105468l46.109375 46.113282-46.109375 46.109375c-3.894532 3.894531-3.894532 10.210937 0 14.105469 1.945312 1.949218 4.5 2.921874 7.050781 2.921874 2.554687 0 5.105469-.972656 7.054687-2.921874l46.109376-46.109376 46.109374 46.109376c1.949219 1.949218 4.503907 2.921874 7.054688 2.921874 2.554688 0 5.105469-.972656 7.054688-2.921874 3.894531-3.894532 3.894531-10.210938 0-14.105469l-46.113282-46.109375 46.113282-46.113282c3.894531-3.894531 3.894531-10.210937 0-14.105468zm0 0M206.976562 77.328125c5.492188 0 9.972657-4.480469 9.972657-9.976563 0-5.492187-4.480469-9.972656-9.972657-9.972656-5.496093 0-9.976562 4.480469-9.976562 9.972656 0 5.496094 4.480469 9.976563 9.976562 9.976563zm0 0"/>
    </>
  ),
}));

const CountryList = (props: FlexboxProps): JSX.Element => {
  const { colorMode } = useColorMode();
  const countriesContext = useContext(CountryContext);
  const numberFormat = Intl.NumberFormat();

  if (countriesContext?.loading) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        height="75vh"
        width="100%"
        flexGrow={1}
      >
        <Spinner height="5rem" width="5rem" color="DarkOrange" />
      </Flex>
    );
  }

  if (countriesContext?.countries.length  === 0) {
    return (
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        height="75vh"
        width="100%"
        flexGrow={1}
      >
        <NoResultIcon boxSize="10rem" mb={5} />
        <Text>No Results Found</Text>
      </Flex>
    );
  }

  return (
    <SimpleGrid
      spacingX="40px"
      spacingY="20px"
      maxHeight="75vh"
      overflowY="scroll"
      px={5}
      pb={5}
      my={10}
      columns={{ sm: 1, md: 2, xl: 3, "2xl": 3 }}
      autoRows="auto"
    >
      {countriesContext?.countries?.map((country, index) => {
        return (
          <VStack
            key={index}
            // px="4"
            // py="5"
            // height="10vh"
            borderEndRadius="md"
            backgroundColor={colorMode === "dark"
              ? colors.darkModeElements[800]
              : colors.lightModeElements}
            minWidth="100%"
            rounded="md"
            boxShadow="lg"
            mt={5}
            {...props}
          >
            <AspectRatio width="100%" ratio={16/9} mb={10}>
              <Image
                fit="contain"
                borderTopRadius="md"
                // height="300px"
                // width="100%"
                src={country.flag}
              />
            </AspectRatio >
            <VStack
              alignItems="flex-start"
              width="100%"
              spacing={2}
              pl={10}
              pb={10}
            >
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize="xl"
              >
                {country.name}
              </Text>
              <Flex>
                <Text mr={3} fontWeight="semibold">Population: </Text>
                <Text>{numberFormat.format(country.population)}</Text>
              </Flex>
              <Flex>
                <Text mr={3} fontWeight="semibold">Region:</Text>
                <Text>{country.region}</Text>
              </Flex>
              <Flex>
                <Text mr={3} fontWeight="semibold">Capital:</Text>
                <Text>{country.capital}</Text>
              </Flex>
            </VStack>
          </VStack>
        );
      })}
    </SimpleGrid>
  );
};

export default memo(CountryList);
