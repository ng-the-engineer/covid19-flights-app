import React from 'react';
import { connect } from 'react-redux';
import { filterByAirlineFlightNo } from '../../actions';
import IosSearchOutline from 'react-ionicons/lib/IosSearchOutline';

const FlightsFilter = ({searchList, dispatch}) => (
  <div class="flight-filter-section">
    <form class="flight-filter-box" onSubmit={(event) => {
      event.preventDefault()
      let flightCode = event.target.flightCode.value
      dispatch(filterByAirlineFlightNo(flightCode))
      searchList()
    }}>
      <div class="search-box">
        <label class="input-label">Flight Code</label><br/>
        <input type="text" class="input-box" name="flightCode" placeholder="e.g. CX881" maxlength="6"/>
      </div>
      <div class="search-box">
        <label></label><br/>
        <button><IosSearchOutline fontSize="50px" color="#fff" /></button>
      </div>
    </form>
  </div>
)

export default connect()(FlightsFilter)
