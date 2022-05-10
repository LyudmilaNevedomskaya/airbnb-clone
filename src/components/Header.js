import React from "react";
import images from '../img/Group.png'

export default function Header() {
  return (
    <header className="header">
      <img src={images}/>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </header>
  )
}