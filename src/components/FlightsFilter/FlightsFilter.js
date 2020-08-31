import React from 'react';
import { connect } from 'react-redux';
import { filterByAirlineFlightNo } from '../../actions';
import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline';

const FlightsFilter = ({searchList, dispatch}) => (
  <div class="flight-filter-section">
    <form class="flight-filter-box" onSubmit={(event) => {
      event.preventDefault()
      let airline = event.target.airline.value
      let flightNumber = event.target.flightNumber.value
      dispatch(filterByAirlineFlightNo(airline, flightNumber))
      searchList()
    }}>
      <div class="search-box">
        <label class="input-label">Airline</label><br/>
        <input type="text" class="input-box" name="airline" placeholder="e.g. CX"/>
      </div>
      <div class="search-box">
        <label class="input-label">Flight Number</label><br/>
        <input type="text" name="flightNumber" placeholder="e.g. 520"/><br/>
      </div>
      <div class="search-box">
        <label></label><br/>
        <button><IosSearchOutline fontSize="50px" color="#fff" /></button>
      </div>
    </form>
  </div>
)

export default connect()(FlightsFilter)
