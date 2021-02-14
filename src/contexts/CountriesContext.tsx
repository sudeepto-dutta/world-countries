import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react';
import {
  ICountriesContext,
  ICountry
} from '../common/interfaces';
import { API_URL } from '../utils/constants';

const CountryContext = createContext<ICountriesContext | null>(null);

const CountryProvider = ({ children }: {children: ReactNode}): JSX.Element => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [prevCountries, setPrevCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const fetchCountries = async (url: string) => {
    try {
      const data = await fetch(url);
      const countries = await data.json();
      const countryListData = countries.map((country: ICountry) => {
        const { name, population, region, capital, flag } = country;
        return { name, population, region, capital, flag };
      });
      setCountries(countryListData);
      setPrevCountries(countryListData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error) {
        setError(error ? error?.message : error);
      }
    }
  };

  useEffect(() => {
    fetchCountries(`${API_URL}/all`);
  }, []);

  useEffect(() => {
    if (search.length === 0) {
      setCountries(prevCountries);
    }
  }, [search, prevCountries]);

  const handleSubmit = (searchInput: string) => {
    setSearch(searchInput);
    const countriesCopy = [...prevCountries];
    if (searchInput.length > 0) {
      const searchText = searchInput.toLowerCase();
      const countriesPayload = countriesCopy
        .filter((country) => country.name
          .toLowerCase().includes(searchText)
      || country.capital.toLowerCase().includes(searchText));
      setCountries(countriesPayload);
    } else {
      setCountries(prevCountries);
    }
  };

  const handleResetSearch = useCallback(
    () => {
      setSearch('');
      setCountries(prevCountries);
    },
    [prevCountries],
  );

  return (
    <CountryContext.Provider value={{
      loading,
      error,
      search,
      countries,
      handleResetSearch,
      handleSubmit,
    }}>
      {children}
    </CountryContext.Provider>
  );
};

export { CountryProvider, CountryContext };
