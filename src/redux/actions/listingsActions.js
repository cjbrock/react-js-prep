export const fetchListings = () => dispatch => {
  return fetch("http://localhost:3001/listings")
  .then(res => res.json())
  .then(listings =>
    dispatch({type: "FETCH_LISTINGS_FINISHED", payload: listings})
  )
}