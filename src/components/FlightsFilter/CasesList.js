import React from 'react';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';

const CasesList = (props) => {

  const columns = [/*{
>>>>>>> develop
    dataField: 'airline',
    text: 'Airline'
  }, {
    dataField: 'flight_number',
    text: 'Flight Number'
  }, {
    dataField: 'origin',
    text: 'Origin'
  }, {
    dataField: 'destination',
    text: 'Destination'
  }, */
  {
    dataField: 'path',
    text: 'Route'
  }, {
    dataField: 'shortDate',
    text: 'Arrival Date'
  }, {
    dataField: 'seat_number',
    text: 'Seat Number'
  }, {
    dataField: 'case_number',
    text: 'Case Number'
  }];

  const NoDataIndication = () => (
    <div>
      No case is associated to this flight number
    </div>
  );

  return (
    <div class="search-result-table">
      <BootstrapTable keyField='id' data={ props.cases } columns={ columns } 
      striped
      hover
      condensed
    noDataIndication={ () => <NoDataIndication /> } />
      * A flight number refers to a specific route, which possibly operates with multiple aircraft. For more information, please visit <a href="https://en.wikipedia.org/wiki/Flight_number#:~:text=Officially%20the%20term%20'flight%20number,%222491%22%20are%20flight%20numbers.">Wikipedia</a>
    </div>
)}

const mapStateToProps = (state) => ({
  cases: state.flights.data
})

export default connect(mapStateToProps)(CasesList)