const initialState = []

export default (state = initialState, action) => {
  switch(action.type){
    case "FETCH_LISTINGS_FINISHED":
      return action.payload
    default:
      return state
  }
}