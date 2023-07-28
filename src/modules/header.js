import React from 'react'
import ButtonDay from "./images/button-day.png"
import ButtonNight from "./images/button-night.png"

export default function header() {
  function darkMode(){

  };

  return (
    <header>
        ☆☆Circus World☆☆
        <button id="darkmodebutton" onClick={darkMode()}><img id="buttonimage" src="images/button-day.png"/></button>
    </header>
  )
}
