import React, { useEffect, useState } from "react";
import "./individualCountry.css";
import { Link, useParams } from "react-router-dom";
import { countries } from "../../countries";

const IndividualCountry = () => {
  const { name } = useParams();

  const [selectedCountry, setSelectedCountry] = useState([]);
  useEffect(() => {
    setSelectedCountry(
      countries.filter((country) => {
        return country.name === name;
      })
    );
  }, []);

  return (
    <div className="SelectedCountryOverall">
      <div className="goBack">
        <Link to="/">Go Back</Link>
      </div>
      <section>
        {selectedCountry.map((country) => {
          const {
            name,
            numericCode,
            flag,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = country;
          return (
            <div className="selectedCountry">
              <div className="img">
                <img src={flag} alt="" />
              </div>
              <div className="aboutCountry">
                <h2>{name}</h2>
                <div className="mainInfo">
                  <div className="left">
                    <h3>
                      Native Name: <span>{nativeName}</span>
                    </h3>
                    <h3>
                      population: <span>{population}</span>
                    </h3>
                    <h3>
                      Region: <span>{region}</span>
                    </h3>
                    <h3>
                      Sub Region: <span>{subregion}</span>
                    </h3>
                    <h3>
                      Capital: <span>{capital}</span>
                    </h3>
                  </div>
                  <div className="right">
                    <h3>
                      Top Level Domain:{" "}
                      {topLevelDomain.map((domain) => (
                        <span key={domain}>{domain}</span>
                      ))}
                    </h3>
                    <h3>
                      Currencies:
                      {currencies.map((currency) => (
                        <span>{` ${currency.name}`}</span>
                      ))}
                    </h3>
                    <h3>
                      Language:
                      {languages.map((language) => (
                        <span> {language.name}</span>
                      ))}
                    </h3>
                  </div>
                </div>
                <div className="borderCountries">
                  <h3 className="border">
                    Border Countries:{" "}
                    {borders
                      ? borders.map((border) => <span>{border}</span>)
                      : "No Border"}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default IndividualCountry;
