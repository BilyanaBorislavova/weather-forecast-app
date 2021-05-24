import { createContext } from 'react';

type CityContextTypes = {
    city: string,
    setCity: any,
};

const cityContextDefaultValues: CityContextTypes = {
    city: '',
    setCity: () => {},
};

const CityContext = createContext<CityContextTypes>(cityContextDefaultValues);

export default CityContext;
