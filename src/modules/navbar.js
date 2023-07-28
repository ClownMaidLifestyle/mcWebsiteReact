import React from 'react';
//import {useState} from "react";
import axios from "axios";

export default function navbar() {
  async function getAPI(){
    const port =  8095;
    //temporary dev address - change on live
    const API = `http://localhost:${port}/`;
    let result = await axios.get(API);
    console.log(result.data[0]);
  }
  getAPI();
  return (
    <div>navbar</div>
  )
}
