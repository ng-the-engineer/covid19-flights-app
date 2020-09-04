import React, { Component, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import './css/App.css';
import './css/grid.css';

import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import FlightsFilter from './components/FlightsFilter/FlightsFilter';
import CasesList from './components/FlightsFilter/CasesList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  };

  searchList() {
    let newValue = !this.state.loading
    this.setState({ loading: newValue }); //After fetch, set the states
  };

  render() {
    return (
      <div className="App">
      <LoadingOverlay
        active={this.state.loading}
        spinner
        text='Loading your content...'
        >
        <div>
          <Header />
          <HowItWorks />
          <FlightsFilter searchList={this.searchList.bind(this)} />
          <CasesList />
        </div>
      </LoadingOverlay>
      </div>
    );
  }
}

export default App;
