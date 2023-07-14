import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import 'react-bootstrap';


function App() {
  return (<>
    <Header />
    <Homepage />
    <Footer />
  </>
  );
}

export default App;
