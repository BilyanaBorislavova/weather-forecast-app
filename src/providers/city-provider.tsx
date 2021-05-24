import * as React from 'react';
import CityContext from '../context/city-context';

interface CityProviderProps {
    children: React.ReactNode
}

const CityProvider: React.FC<CityProviderProps> = ({ children }) => {
    const [ city, setCity ] = React.useState('');

    const cityContextValue = { city, setCity };

    return (
        <CityContext.Provider value={cityContextValue}>
            {children}
        </CityContext.Provider>
    );
};

export default CityProvider;
