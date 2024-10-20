import React, { useState } from "react";
import "./totalCountries.css";
import { countries } from "../../countries";
import { Link } from "react-router-dom";
// import initial from "../../../data.json";

const TotalCountries = () => {
  const [allCountries, setAllCountries] = useState(countries);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (e) => {
    setAllCountries(
      filteredCountries.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
  };

  const handleRegion = (e) => {
    setAllCountries(
      filteredCountries.filter((country) => {
        if (e.target.value == "") {
          return country;
        } else {
          return country.region == e.target.value;
        }
      })
    );
  };

  return (
    <div className="overallTotalCountries">
      <div className="searchRegion">
        <div className="search">
          <input
            type="text"
            placeholder="Search for a country"
            onChange={handleSearch}
          />
        </div>
        <div className="region">
          <select name="region" id="redion" onClick={handleRegion}>
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="theCountries">
        {allCountries.map((country, index) => {
          return (
            <div className="country" key={index}>
              <img src={country.flag} alt={country.name} />
              <div className="countryDetails">
                <h3>{country.name}</h3>
                <p>
                  Population: <span>{country.population}</span>
                </p>
                <p>
                  Region: <span>{country.region}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
              <div className="countryNav">
                <Link to={`/countries/${country.name}`}>More Info</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TotalCountries;
