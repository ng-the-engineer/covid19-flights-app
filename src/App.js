import React, { Component, useState } from 'react';
import { Helmet } from "react-helmet";
import LoadingOverlay from 'react-loading-overlay';
import logo from './logo.svg';
import './css/App.css';
import './css/grid.css';
import './css/queries.css';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import FlightsFilter from './components/FlightsFilter/FlightsFilter';
import CasesList from './components/FlightsFilter/CasesList';
import Footer from './components/Footer';


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
            <Helmet>
              <meta charSet="utf-8" />
              <title>CovidClean</title>
              <meta name="title" content="CovidClean" />
              <meta name="name" content="CovidClean" />
              <meta name="description" content="CovidClean" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Header />
            <HowItWorks />
            <FlightsFilter searchList={this.searchList.bind(this)} />
            <CasesList />
            <Footer/>
          </div>
        </LoadingOverlay>
      </div>
    );
  }
}

export default App;
