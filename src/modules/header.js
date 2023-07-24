import React from 'react'
import ButtonDay from "./images/button-day.png"
import ButtonNight from "./images/button-night.png"

export default function header() {
  return (
    <header>
        ☆☆Circus World☆☆
        <button id="darkmodebutton" onclick="darkMode()"><img id="buttonimage" src="images/button-day.png"/></button>
    </header>
  )
}
