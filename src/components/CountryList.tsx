import { useContext, /* useEffect, */ /* useState */ } from "react";
import {
  AspectRatio,
  Flex,
  FlexboxProps,
  Image,
  SimpleGrid,
  Skeleton,
  Text,
  useColorMode,
  // useToast,
  VStack,
} from "@chakra-ui/react";
import colors from "../styles/colors";
// import { API_URL } from "../utils/constants";
// import { ICountry } from "../common/interfaces";
import { CountryContext } from "../contexts/CountriesContext";

const CountryList = (props: FlexboxProps): JSX.Element => {
  const { colorMode } = useColorMode();
  // const [countryData, /* setCountryData */] = useState<ICountry[]>([]);
  const countriesContext = useContext(CountryContext);
  const numberFormat = Intl.NumberFormat();
  // const { countries } = countriesContext;
  console.log('countries', countriesContext?.countries);
  console.log('search', countriesContext?.search);
  // const toast = useToast();

  // useEffect(() => {
  //   async function fetchCountries() {
  //     try {
  //       const data = await fetch(API_URL);
  //       const countries = await data.json();
  //       const countryListData = countries.map((country: ICountry) => {
  //         const { name, population, region, capital, flag } = country;
  //         return { name, population, region, capital, flag };
  //       });
  //       // console.log("countries ", countries);
  //       // console.log("countryListData ", countryListData);
  //       setCountryData(countryListData);
  //     } catch (error) {
  //       toast({
  //         description: error,
  //         status: "error",
  //         duration: 3000,
  //       });
  //     }
  //   }
  //   fetchCountries();
  // }, [toast]);
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
      {countriesContext?.countries?.map((country, index) => {
        console.log('country ', country);
        return (
          <Skeleton
            key={index}
            isLoaded={!countriesContext?.loading}
            colorScheme="blue"
          >
            <VStack
              // px="4"
              // py="5"
              // height="10vh"
              borderEndRadius="md"
              backgroundColor={colorMode === "dark"
                ? colors.darkModeElements[800]
                : colors.lightModeElements}
              minWidth="100%"
              rounded="md"
              shadow="md"
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
          </Skeleton>
        );
      })}
    </SimpleGrid>
  );
};

export default CountryList;
