import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';


function App() {
  const [countries, setCountries] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])


  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart)
  }

  return (

    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
      <Cart cart={cart}></Cart>
      
  
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
  
    </div>
  );
}

export default App;
