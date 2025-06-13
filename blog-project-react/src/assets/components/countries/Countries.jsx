import { useEffect, useState } from "react";
import Country from "./country/country";
import '../../components/countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries , setVisitedCountries] = useState([]);
   

    useEffect(() => {
 fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,area,cca3')

    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      console.log(data); // Check in console
      setCountries(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}, []);

  const handleVisitedCountry = (country) => {
  const alreadyVisited = visitedCountries.find(c => c.cca3 === country.cca3);

  if (!alreadyVisited) {
    const newVisitedcountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedcountry);
  } else {
    console.log('Already in the list');
  }
}



    return (
        <div>
            <h3>Contries : {countries.length}</h3>
            <div>
              <h5>Visited Country{visitedCountries.length}</h5>
              <ul>
               { visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)}
              </ul>
            </div>
            
            <div className="country-container">{
         countries.map(country => <Country key={country.cca3}
          handleVisitedCountry={handleVisitedCountry}
         country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;