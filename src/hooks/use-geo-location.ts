import { useState, useEffect } from 'react';

interface GeoLocationProps {
    isLoading: boolean,
    coordinates: object,
    hasError: boolean,
    error: object,
}

const defaultGeoLocationState = {
    isLoading: true,
    coordinates: {
        latitude: '',
        longitude: '',
    },
    hasError: false,
    error: {
        code: '',
        message: '',
    },
};

const useGeoLocation = () => {
    const [ location, setLocation ] = useState<GeoLocationProps>(defaultGeoLocationState);

    const handleLocationSuccess = (position: any) => {
        const { latitude, longitude } = position.coords;

        setLocation({
            isLoading: false,
            coordinates: {
                latitude,
                longitude,
            },
            hasError: false,
            error: {},
        })
    };

    const handleLocationError = (error: any) => {
        const { code, message } = error;

        setLocation({
            isLoading: false,
            coordinates: {
                latitude: '',
                longitude: '',
            },
            hasError: true,
            error: {
                code,
                message,
            },
        })
    };

    const handleUserLocation = () => {
        const { geolocation } = navigator;

        if(geolocation) {
            geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError);
        }
    }

    useEffect(() => {
        handleUserLocation();
    }, []);

    return location;
};

export default useGeoLocation;
