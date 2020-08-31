import React, { Component, useState } from 'react';
import ReactLoading from "react-loading";
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
      {
        this.state.loading ? <ReactLoading type={"spinningBubbles"} color="#000" height={'20%'} width={'20%'} class="load_animation" /> :
        <div>
          <Header />
          <HowItWorks />
          <FlightsFilter searchList={this.searchList.bind(this)} />
          <CasesList />
        </div>
      }
      </div>
    );
  }
}

export default App;
