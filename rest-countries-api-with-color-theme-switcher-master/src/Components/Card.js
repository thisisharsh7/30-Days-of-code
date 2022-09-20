import React, { useEffect, useState } from "react";

export default function Card() {
  const [End, endPage] = useState(60);
  const [Start, startPage] = useState(0);
  const [Country, setCountry] = useState([]);
  const [sample, sampleSet] = useState([]);
  const [data, sdata] = useState({});
  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    sampleSet(await response.json());
  };

  useEffect(() => {
    getCountries();
  }, []);
  function prev(e) {
    if (Start > 0) {
      endPage(End - 60);
      startPage(Start - 60);
      window.scrollTo(0, 0);
    }
  }
  function next() {
    if (End <= 250) {
      startPage(Start + 60);
      endPage(End + 60);
      window.scrollTo(0, 0);
    }
  }

  const CountryDetail = (e) => {
    sdata(Country.find((scntry) => scntry.flags.svg === e.target.src));
    document.querySelector(".outer-card").classList.toggle("beforeClick");
    document.querySelector(".detCard").classList.toggle("newCard");
  };
  const getMore = (e) => {
    sdata(
      Country.find(
        (scntry) =>
          scntry?.cca2 === e.target.innerText ||
          scntry?.cca3 === e.target.innerText ||
          scntry?.cioc === e.target.innerText
      )
    );
  };
  useEffect(() => {
    setCountry(sample);
  }, [sample]);
  useEffect(() => {
    if (document.body.classList[0]) {
      function fnc(sbtn) {
        if (sbtn.classList[1] !== "lbtn") {
          sbtn.classList.add("lbtn");
        }
      }
      document.querySelectorAll(".skbtn").forEach(fnc);
    }
  });
  function jadu(e) {
    if (e.target.value !== "all") {
      setCountry(
        sample.filter((sel) => {
          return sel.region === e.target.value;
        })
      );
    } else {
      setCountry(
        sample.filter((sel) => {
          return sel.region !== e.target.value;
        })
      );
    }
  }
  function anotherJadu(e) {
    const str = e.target.value;
    const cstr = str.charAt(0).toUpperCase() + str.slice(1);
    if (cstr !== "") {
      setCountry(
        sample.filter((sel) => {
          return sel.name.common.match(cstr);
        })
      );
    } else {
      setCountry(
        sample.filter((sel) => {
          return sel.region !== cstr;
        })
      );
    }
  }

  return (
    <>
      <div className="outer-card">
        <div className="short">
          <input
            className="nipt"
            type="text"
            onChange={anotherJadu}
            placeholder="Search for a country..."
          />
          <label htmlFor="region">go: </label>
          <select type="select" id="region" onChange={jadu}>
            <option value="all">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="card-body">
          {Country.slice(Start, End).map((element, idx) => {
            return (
              <div className="card" id={idx} key={idx}>
                <img
                  src={element.flags.svg}
                  alt="flag"
                  onClick={CountryDetail}
                />
                <div>
                  <p>{element.name.common}</p>
                  <p>
                    <span>Population: </span>
                    <span>{element.population}</span>
                  </p>
                  <p>
                    <span>Region: </span>
                    <span>{element.region}</span>
                  </p>
                  <p>
                    <span>Capital: </span>
                    <span>{element.capital}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="PNbutton">
          <button type="button" className="tgbtn" onClick={prev}>
            Prev
          </button>
          <button type="button" className="tgbtn" onClick={next}>
            Next
          </button>
        </p>
      </div>
      <div className="detCard">
        <button
          type="button"
          className="tgbtn"
          onClick={() => {
            document.querySelector(".detCard").classList.toggle("newCard");
            document
              .querySelector(".outer-card")
              .classList.toggle("beforeClick");
          }}
        >
          Go Back
        </button>
        <div className="scountry-detail card">
          <img src={data?.flags?.png} alt="flag" />
          <div>
            <p>{data?.name?.common}</p>
            <p>
              <span>Native Name: </span>
              <span>
                {data.name?.nativeName?.eng?.official
                  ? data.name?.nativeName?.eng?.official
                  : data?.name?.official}
              </span>
            </p>
            <p>
              <span>Population: </span>
              <span>{data?.population}</span>
            </p>
            <p>
              <span>Region: </span>
              <span>{data?.region}</span>
            </p>
            <p>
              <span>Sub Region: </span>
              <span>{data?.subregion}</span>
            </p>
            <p>
              <span>Capital: </span>
              <span>{data?.capital}</span>
            </p>
            <p>
              <span>Top Level Domain: </span>
              <span>{data?.tld}</span>
            </p>
            <p>
              <span>Currencies: </span>
              <span>
                {data.currencies
                  ? Object.values(data.currencies)[0]?.name
                  : "No Data"}
              </span>
            </p>
            <p>
              <span>Languages: </span>
              <span>
                {data.languages
                  ? Object.values(data.languages).map((slang) => {
                      return `${slang}, `;
                    })
                  : ""}
              </span>
            </p>
            <p>
              <span>Border Countries: </span>
              <span className="removBug">
                {data.borders
                  ? data.borders.map((sborder, idx) => {
                      return (
                        <button
                          className="  skbtn"
                          type="button"
                          key={idx}
                          onClick={getMore}
                        >
                          {sborder}
                        </button>
                      );
                    })
                  : "None"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
