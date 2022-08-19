import React, {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom"

export default function CountryDetails(props) {
    const {countriesJSON} = props
    const params = useParams();
    const [country, setCountry] = useState(null)
    useEffect(() => {
        const country = countriesJSON.find(object => object.alpha3Code === params.alpha3Code);
        setCountry(country);
    });
    return (
        <div>
            {country && (
            <div className="countryDetails">
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
                <h1>{country.name.common}</h1>
                <h5>Capital: {country.capital}</h5>
                <h5>Area: {country.area} km²</h5>
                <h5>Borders: {country.borders.map(border => {
                    const name = countriesJSON.find(object => object.alpha3Code === border).name.common;
                    return <Link key={border} to={`/${border}`}>{name} </Link>
                })}

                </h5>
            </div>
            )
            }
        </div>
    )
}
