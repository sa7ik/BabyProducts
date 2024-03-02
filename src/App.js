import logo from './logo.svg';
import React, { useContext, useState } from 'react'
import './App.css';
import MainRouter from './components/Homepage/MainRouter';
import {button,card,Nav} from "react-bootstrap"
import ProductData from './components/ProductData';




function App() {
  const [searchTerm,setSearchTerm]=useState("")
  return (
    <div className="App">
      <MainRouter/>
      
      
    </div>
  );
}

export default App;
