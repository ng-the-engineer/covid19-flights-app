import React from 'react';
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';

const CasesList = (props) => {
  const products = [ {
    id: '0003',
    name: 'Johnson',
    price: '576'
  },{
    id: '006',
    name: 'Prince',
    price: '7890'
  } ];

  const columns = [{
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
  }, {
    dataField: 'arrival_date',
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
  </div>
)}

const mapStateToProps = (state) => ({
  cases: state.flights.data
})

export default connect(mapStateToProps)(CasesList)