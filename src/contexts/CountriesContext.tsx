import {
  ChangeEvent,
  createContext,
  FormEvent,
  ReactNode,
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
  const [showHomeButton, setShowHomeButton] = useState(false);
  const [countries, setCountries] = useState([]);
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
      console.log('countryListData ', countryListData);
      setCountries(countryListData);
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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      const searchURL = `${API_URL}/name/${search}`;
      await fetchCountries(searchURL);
      setLoading(false);
      setShowHomeButton(true);
    } catch (error) {
      if (error) {
        setError(error ? error?.message : error);
      }
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <CountryContext.Provider value={{
      loading,
      error,
      search,
      showHomeButton,
      countries,
      handleSearchChange,
      handleSubmit,
    }}>
      {children}
    </CountryContext.Provider>
  );
};

export { CountryProvider, CountryContext };
