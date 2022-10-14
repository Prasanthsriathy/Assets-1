import './App.css';
import axios from 'axios';
import AddProduct from './Components/AddProduct';
import { useState, useEffect } from "react";
import ProductsData from './Components/ProductsData';
function App(newProducts) {
  let url = 'http://localhost:3001/products';
  // Write Your Code Here

  axios.post( `${url}`,newProducts)
  axios.get(  `${url} `)

  return (
    <div className="App">
      {/* Write Your Code Here */}
      <ProductsData/>     
      <AddProduct/>
    </div>
  );
}

export default App;
