import { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'


import '../kinezetek/olalsoNavBarTypShiii.css'
import '../kinezetek/homeC.css'

import Navbar from '../elemek/Navbar'
import FelsoSav from '../elemek/FelsoSav'
import Card from '../elemek/Card'

import Hirdet from '../assets/kepek/hirdetes.png'
import SlotKep from '../assets/kepek/sugar.png'
import CoinflipKep from '../assets/kepek/CoinFlip.png'
import MinesKep from '../assets/kepek/Mines.png'
import RouletteKep from '../assets/kepek/RouletteKep.png'

import { useAuth } from "../context/AuthContext";
import Dropdown from "../elemek/ProfileG";
import { AuthProvider } from "../context/AuthContext";




export default function Home() {
    const { user } = useAuth()
    const isLoggedIn = !!user

    return (


        <div>
        

            <div>
                <FelsoSav />
            </div>

            <div className='asd'>
                <div className="mobilKi">
                    <Navbar user />
                </div>
                <img className="hirdetesekK" src={Hirdet} alt="" />

            </div>

            <div className='slots'>
                <Link to="/coinflip"><Card src={CoinflipKep} slotClass='slot' /></Link>
                <Link to="/mines"><Card src={MinesKep} slotClass='slot' /></Link>
                <Link to="/roulette"><Card src={RouletteKep} slotClass='slot' /></Link>
                <Link to="/played"><Card src={SlotKep} slotClass='slot' /></Link>
                <Link to="/played"><Card src={SlotKep} slotClass='slot' /></Link>
            </div>

            <div className="gepKi">
                    <Navbar user />
            </div>
        </div>

    )
}
