import { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'


import '../kinezetek/olalsoNavBarTypShiii.css'
import '../kinezetek/slotC.css'

import Navbar from '../elemek/Navbar'
import FelsoSav from '../elemek/FelsoSav'
import Card from '../elemek/Card'

import Hirdet from '../assets/kepek/hirdetes.png'
import SlotKep from '../assets/kepek/sugar.png'
import CoinflipKep from '../assets/kepek/Coinflip.png'
import MinesKep from '../assets/kepek/Mines.png'

import Dropdown from "../elemek/ProfileG";
import { AuthProvider } from "../context/AuthContext";
import Gomb from "../elemek/GombE";


export default function Slots() {
    return (
        <div>
            <div>
                <FelsoSav />
            </div>

            <div >
                <div className="asd">
                    <div className="ki">
                        <Navbar user />
                    </div>

                    <div className='slotts'>
                        <Link className="alink" to="/coinflip"><Card src={CoinflipKep} slotClass='slott' /></Link>
                    </div>

                    <div className='slotts'>

                        <Link className="alink" to="/roulette"><Card src={MinesKep} slotClass='slott't /></Link>
                    </div>

                    <div className='slotts'>

                        <Link className="alink" to="/roulette"><Card src={SlotKep} slotClass='slott' /></Link>
                    </div>
                    
                    <div className="gepKi">
                       <Link to="/"><Gomb content="Vissza"/></Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}