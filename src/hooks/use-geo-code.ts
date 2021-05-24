import { useEffect, useState } from "react";
import Geocode from "react-geocode";

const GOOGLE_MAPS_API = "AIzaSyB9_eu5DTTigxfGE9XsPXoUyI8Ick2Ew74";
Geocode.setApiKey(GOOGLE_MAPS_API);

const useGeocode = (city: string) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [error, setError] = useState("");

  const getLatitudeAndLongitude = () => {
    Geocode.fromAddress(city).then(
      (response: any) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
      },
      (error: any) => {
        setError(error);
      }
    );
  };

  useEffect(() => {
    if (city) {
      getLatitudeAndLongitude();
    }
  }, [ city ])

  return {
    latitude,
    longitude,
    error,
  };
};

export default useGeocode;
