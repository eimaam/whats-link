import React from 'react';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Home />
    </BrowserRouter>
  );
}

export default App;
