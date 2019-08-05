import React, { Component } from 'react'

export default class ListingsContainer extends Component {
  state = {
    listings: []
  }
  
  componentDidMount() {
    fetch("http://localhost:3001/listings")
    .then(res => res.json())
    .then(listings => this.setState( { listings }))
  }
  
 render(){   
   if(this.state.listings.length === 0) {
     return <h1> Loading </h1>
   }
   return (
     <div>
       <ul>
         {this.state.listings.map(listing => (
           <div>
             <p>Name: {listing.name}</p>
             <p>Address: {listing.address}</p>
             <p>Price: ${listing.price}</p>
           </div>
         ))}
       </ul>
     </div>
   )
 }
}