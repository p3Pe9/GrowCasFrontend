import { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'


import '../kinezetek/olalsoNavBarTypShiii.css'
import '../kinezetek/homeC.css'

import Navbar from '../elemek/Navbar'
import FelsoSav from '../elemek/FelsoSav'
import Card from '../elemek/Card'

import Hirdet from '../assets/kepek/hirdetes.png'
import SlotKep from '../assets/kepek/sugar.png'
import RouletteKep from '../assets/kepek/RouletteKep.png'

import Dropdown from "../elemek/ProfileG";
import { AuthProvider } from "../context/AuthContext";


export default function Roulettes() {
    return (
        <div>
            <div>
                <FelsoSav />
            </div>

            <div className='asd'>
                <Navbar user />
                 <div className='slots'>
                    <Link to="/roulette"><Card src={RouletteKep} slotClass='slot' /></Link>
                </div>

            </div>



        </div>
    )
}