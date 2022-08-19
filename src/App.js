import './App.css';
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Routes, Route} from "react-router-dom"
// import countriesJSON from "./countries.json"

function App() {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch(
          "https://ih-countries-api.herokuapp.com/countries"
        ).then((response) => response.json());
        setCountries(response);
        console.log(response);
      } catch (error) {
        console.log(error)
      }
    };
    getApiData();
  },[]);

  return (
    <div className="App">
      {countries && (
        <div>
          <Navbar/>
          <Routes>
            <Route path=":alpha3Code" element={<CountryDetails countriesJSON={countries}/>}></Route>
            </Routes>
          <CountriesList countries={countries}/>
        </div>
      )
      }
      
    </div>
  );
}

export default App;
