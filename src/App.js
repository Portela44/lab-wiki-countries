import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Routes, Route} from "react-router-dom"
import countriesJSON from "./countries.json"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path=":alpha3Code" element={<CountryDetails countriesJSON={countriesJSON}/>}></Route>
      </Routes>
      <CountriesList/>
    </div>
  );
}

export default App;
