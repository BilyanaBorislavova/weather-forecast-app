import './search-city.scss';

import React, { useContext, useState } from "react";
import CityContext from "../../context/city-context";
import InputWithLabel from "../inputs/input-with-label";

const SearchCity = () => {
  const { setCity } = useContext(CityContext);
  const [ inputCity, setInputCity ] = useState('');

  const onCityChange = (event: any) => setInputCity(event.target.value);

  const handleClick = () => setCity(inputCity);

  return (
    <article className="search-city">
      <InputWithLabel
        label="Search city..."
        onChange={onCityChange}
      />
      <button
        className="search-city-trigger"
        onClick={handleClick}
      >
        See weather forecast
      </button>
    </article>
  );
};

export default SearchCity;
