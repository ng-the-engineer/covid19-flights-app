const FLIGHT_FILTER = 'FLIGHT_FILTER'

export const filterByAirlineFlightNo = (airline, flightNumber) => {
  return dispatch => {
    fetch(`https://covid19-flights.herokuapp.com/api/flights?airline=${airline}&flightNumber=${flightNumber}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(casesResult(json)))
    // .then(json => (console.log(json)))
    .catch(err => console.log(err))
  }
}

const CASES_RESULT = 'CASES_RESULT'

export const casesResult = (cases) => {
  console.log('cases:', cases)
  return {
  type: CASES_RESULT,
  cases
}}