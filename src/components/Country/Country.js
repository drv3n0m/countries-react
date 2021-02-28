import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;


    return (
        <div className="country"> 
            <h4>{name}</h4>
            <img src={flag} alt=""/>            
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;