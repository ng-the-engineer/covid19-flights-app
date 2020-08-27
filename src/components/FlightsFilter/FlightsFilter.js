import React from 'react';
import { connect } from 'react-redux';
import { filterByAirlineFlightNo } from '../../actions';
import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline'

const FlightsFilter = (props) => (
  <div class="flight-filter-section">
    <form class="flight-filter-box" onSubmit={(event) => {
      event.preventDefault()
      let airline = event.target.airline.value
      let flightNumber = event.target.flightNumber.value
      props.dispatch(filterByAirlineFlightNo(airline, flightNumber))
    }}>
      <div class="search-box">
        <label class="input-label">Airline</label><br/>
        <input type="text" class="input-box" name="airline" placeholder="e.g. CX" maxlength="3"/>
      </div>
      <div class="search-box">
        <label class="input-label">Flight Number</label><br/>
        <input type="text" name="flightNumber" placeholder="e.g. 520" maxlength="4"/><br/>
      </div>
      <div class="search-box">
        <label></label><br/>
        <button><IosSearchOutline fontSize="50px" color="#fff" /></button>
      </div>
    </form>
  </div>
)

export default connect()(FlightsFilter)
