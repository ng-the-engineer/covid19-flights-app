import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import './css/grid.css';

import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import FlightsFilter from './components/FlightsFilter/FlightsFilter';
import CasesList from './components/FlightsFilter/CasesList';

function App() {
  return (
    <div className="App">
      <Header/>
      <HowItWorks/>
      <FlightsFilter/>
      <CasesList/>
    </div>
  );
}

export default App;
