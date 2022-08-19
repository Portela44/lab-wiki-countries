import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Routes, Route} from "react-router-dom"
import countriesJSON from "./countries.json"

function App() {
  const [countries, setCountries] = useState(countriesJSON)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path=":alpha3Code" element={<CountryDetails countriesJSON={countriesJSON}/>}></Route>
      </Routes>
      <CountriesList countries={countries}/>
    </div>
  );
}

export default App;
