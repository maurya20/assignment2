import React from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter} from "react-router-dom"
import Home from "./components/Home"


function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Home/>
    </BrowserRouter>
     
  )   
}

export default App;
