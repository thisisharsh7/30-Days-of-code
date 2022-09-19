import React, { useEffect, useState } from "react";

export default function Card() {
  const [Country, setCountry] = useState([]);
  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    setCountry(await response.json());
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <>
      {Country.map((element , idx) => {
        return (
          <div className="card" key={idx}>
            <img src={element.flag} alt="flag" />
            <div>
              <p>Name</p>
              <p>
                <span>Population: </span>
                <span>12348</span>
              </p>
              <p>
                <span>Region: </span>
                <span>Americas</span>
              </p>
              <p>
                <span>Capital: </span>
                <span>Kuch bhi</span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
