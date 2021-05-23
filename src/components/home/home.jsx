import * as React from 'react';
import useGeoLocation from '../../hooks/use-geo-location';

const Home = () => {
    const { isLoading, coordinates, hasError, error } = useGeoLocation();
    const { latitude, longitude } = coordinates;
    const { code, message } = error;

    if (isLoading) {
        return <h1>Page is Loading!</h1>
    }

    if (!isLoading && hasError) {
        return <h1>{message}</h1>
    }

    return (
        <h1>{latitude}</h1>
    );
};

export default Home;
