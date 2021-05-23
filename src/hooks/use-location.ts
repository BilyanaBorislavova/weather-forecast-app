import { useState, useEffect } from 'react';

const useUserLocation = () => {
    const [ userLocation, setUserLocation ] = useState();

    const handleUserLocation = () => {    
        const { geolocation } = navigator;

        if(geolocation) {
            geolocation.getCurrentPosition(handleUserLocationSuccess, handleUserLocationError);
        }
    }

    const handleUserLocationSuccess = (position: any) => {
        const { latitude, longitude } = position.coords;

        console.log(latitude, longitude)
    }

    const handleUserLocationError = (error: any) => {
        const { PERMISSION_DENIED } = error;

        if(PERMISSION_DENIED) {
            alert("Please accept geolocation");
        }
    }

  useEffect(() => {
    handleUserLocation()
  }, [ userLocation ])

  return '';
};

export default useUserLocation;
