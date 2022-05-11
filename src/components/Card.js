import React from "react";
//import katie from '../img/katie.png'
//import star from '../img/Star.png'

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = ''
  }
  return (
    <div className="card">
      {badgeText !== '' && <div className="card--status">{badgeText}</div>}
      <img className="card--picture" src={require(`../images/${props.coverImg}`)} alt=""/>
      <div className="card--rating">
        <img src={require('../images/Star.png')} alt="" width="14px" height="14px"/>
        <p>{props.stats.rating}</p>
        <p className="card--count_rating">({props.stats.reviewCount})</p>
        <ul>
          <li>{props.location}</li>
        </ul>
      </div>
      <p className="card--description">{props.title}</p>
      <p className="card--price"><span>From ${props.price}</span> / person</p>
    </div>
  )
}