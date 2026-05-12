import React, { useState } from "react";

import Gomb from '../elemek/GombE'
import FelsoSav from '../elemek/FelsoSav';
import '../kinezetek/gameC.css'

import Logo from '../assets/kepek/growLog.png'


export default function Game() {
  return (
    <div>
      <div>
        <FelsoSav />
      </div>

      <div id='gameRendezes'>
        <div id='balIranyito'>
          <h1>Mines</h1>
          <img src={Logo} alt="" />
          <Gomb content="Cash out"/>
          <Gomb content="Start"/>
        </div>

        <div id='jobbJatek'>

        </div>
      </div>

    </div>
  );
}