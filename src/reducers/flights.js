const initState = {
  data: []
}

const reducers = (state = initState, action) => {
  console.log('action:', action)
  switch(action.type) {
    case 'CASES_RESULT':
      return {
        ...state,
        data: action.cases.records
      }
    
    case 'FLIGHT_FILTER':
      // fetch api and return data
      return {
        ...state,
        data: [
          ...state.data, {
            airline: action.airline,
            flightNumber: action.flightNumber
          }
        ] 
      }
    default:
      return state
  }
}

export default reducers