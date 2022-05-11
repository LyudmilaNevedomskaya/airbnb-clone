import React from "react";
//import katie from '../img/katie.png'
import star from '../img/Star.png'

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--status">sold out</div>
      <img className="card--picture" src={props.img} alt=""/>
      <div className="card--rating">
        <img src={star} alt="" width="14px" height="14px"/>
        <p>{props.rating}</p>
        <p className="card--count_rating">({props.reviewCount})</p>
        <ul>
          <li>{props.country}</li>
        </ul>
      </div>
      <p className="card--description">{props.title}</p>
      <p className="card--price"><span>From ${props.price}</span> / person</p>
    </div>
  )
}