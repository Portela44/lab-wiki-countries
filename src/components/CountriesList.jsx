// import React, {useEffect, useState} from 'react'
// import countriesJSON from "./../countries.json"
import {Link} from "react-router-dom"

export default function CountriesList(props) {
    const {countries} = props;
    // const [countries, setCountries] = useState(countriesJSON);
    return (
        <div>
            <ul>
                {countries.map(country => {
                    return <li key={country.name.common}><Link to={`/${country.alpha3Code}`}>{country.name.common}</Link></li>
                })}
            </ul>
        </div>
    )
}
