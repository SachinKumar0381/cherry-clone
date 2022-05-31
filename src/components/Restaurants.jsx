import React, { useEffect, useState } from 'react'
const Restaurants = (props) => {
   
  return (
    <div className="container divider">
    <div className="cards">
        {props.Restdata.map((data)=>
        (
              <div className="card" key={data.id}>
              <img width="254" height="160px" src={data.img} />
              <div className="restaurant-details">
                  <div className="restaurant-title">{data.name}</div>
                  <div className="restaurant-subtitle">{data.category} </div>
              </div>
              <div className="restaurant-info">
                  <div className="restaurant-ratings">
                      <i className="material-icons star-icon">star</i> {data.rating}
                  </div>
                   .<div className="restaurant-delivery-timings"> {data.time} MINS</div> .
                  <div className="restaurant-cost-for-two">₹{data.price} FOR TWO</div>
              </div>
              <div className="offer-banner">
                  <span className="material-icons"> local_offer </span>
                  <span className="offer-text">{data.offer}% off | Use TRYNEW</span>
              </div>
          </div>
        ))}
    </div>
</div>
  )
}

export default Restaurants