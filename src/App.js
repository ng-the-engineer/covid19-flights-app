import React from 'react';
import { Helmet } from "react-helmet";
import logo from './logo.svg';
import './css/App.css';
import './css/grid.css';
import './css/queries.css';

import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import FlightsFilter from './components/FlightsFilter/FlightsFilter';
import CasesList from './components/FlightsFilter/CasesList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>CovidClean</title>
        <meta name="description" content="React application" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Header/>
      <HowItWorks/>
      <FlightsFilter/>
      <CasesList/>
      <Footer/>
    </div>
  );
}

export default App;
