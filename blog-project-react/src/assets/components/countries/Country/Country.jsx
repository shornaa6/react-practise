
import { useState } from 'react';
import './country.css';
const Country = ({country, handleVisitedCountry}) => {
    const {name , flags , population, area, cca3} = (country);
    const [visited, setVisited]= useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    
    console.log(handleVisitedCountry);

    const passwitharams = () => {
        handleVisitedCountry(country) 
    }
    return (
        <div className={`country ${visited ? 'visited' : 'non-Visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'blue'}}>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population :{population}</p>
            <p>Area : {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passwitharams}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {visited ? ' I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;