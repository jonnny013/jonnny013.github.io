import React from "react";
import SearchBar from "./Components/SearchBar";
import { useState } from "react";
import countryService from "./services/countries";
import { useEffect } from "react";
import Results from "./Components/Results";
const api_key = import.meta.env.VITE_SOME_KEY;
import axios from "axios";

const App = ({ countries }) => {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [place, setPlace] = useState("");
  const [apiIsLoading, setApiIsLoading] = useState(true)
  const [weatherIsAvailable, setWeatherIsAvailable] = useState(true)

  useEffect(() => {
    countryService.getAll().then((response) => {
      setCountry(response.data);
      setApiIsLoading(false)
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api_key}`
      )
      .then((response) => setWeather(response.data))
      .catch((error) => {console.log("URL undefined, API key not installed")
        setWeatherIsAvailable(false)
    });
  }, [place]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase());
  };

  const handleClick = (a) => {
    setSearch(a.name.common.toLowerCase());
  };

  return (
    <div>
      <button
        onClick={() => {
          window.location.href = "../../index.html";
        }}
        style={{
          textAlign: "center",
          margin: "5px",
          width: 80,
          fontSize: 20,
          backgroundColor: "black",
          color: "white",
          borderRadius: 5,
          border: "2px solid purple",
        }}
      >
        Home
      </button>
      <h1>Country Search</h1>
      <SearchBar search={search} handleSearch={handleSearch} />
      <Results
        search={search}
        country={country}
        handleClick={handleClick}
        place={place}
        setPlace={setPlace}
        weather={weather}
        apiIsLoading={apiIsLoading}
        weatherIsAvailable={weatherIsAvailable}
      />
    </div>
  );
};

export default App;
