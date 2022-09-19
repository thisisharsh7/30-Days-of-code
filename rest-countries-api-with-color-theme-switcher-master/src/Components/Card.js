import React, { useEffect, useState } from "react";

export default function Card() {
  const [End, endPage] = useState(60);
  const [Start, startPage] = useState(0);
  const [Country, setCountry] = useState([]);
  const [data, sdata] = useState({});
  const getCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    setCountry(await response.json());
  };
  console.log(Country);
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
    console.log(e.target.src);
    document.querySelector(".outer-card").classList.toggle("beforeClick");
    document.querySelector(".detCard").classList.toggle("newCard");
  };
  console.log(data?.flags?.svg);
  return (
    <>
      <div className="outer-card">
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
                  <p>
                    {element.altSpellings[2]
                      ? element.altSpellings[2]
                      : element.altSpellings[0]}
                  </p>
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
      <button type="button" onClick={()=>{
        document.querySelector(".detCard").classList.toggle("newCard");
        document.querySelector(".outer-card").classList.toggle("beforeClick");
      }}>Go Back</button>
      <div className="card">
                <img
                  src={data?.flags?.svg}
                  alt="flag"
                />
                <div>
                  <p>
                    {data?.altSpellings}
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
                    <span>Capital: </span>
                    <span>{data?.capital}</span>
                  </p>
                </div>
              </div>
      </div>
    </>
  );
}
