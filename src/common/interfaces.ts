export interface ICountry {
    name: string;
    capital: string;
    population: number;
    region: string;
    flag: string;
}

export interface IAPIState {
    loading: boolean;
    data: any[];
    error: string;
}

export interface ICountriesContext {
    loading: boolean;
    error: string;
    countries: ICountry[];
    search: string;
    handleResetSearch: () => void;
    handleSubmit: (_: string) => void
}