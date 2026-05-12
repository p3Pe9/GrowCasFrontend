import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Pfp from '../assets/kepek/hirdetes.png'
import { useAuth } from "../context/AuthContext";

import Gomb from "./GombE";


export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const { user, onLogout, loading } = useAuth();
    const isAdmin = user?.role === 'admin'

    return (
        <div className="drop">
            <div className=" divButton felsoGomobok felsoGI GH felsoGIK profilRendezes" onClick={() => setOpen(!open)}>

                <div className="">
                    <p id="profilName">{user.Username}</p>
                    <div className="profilRendezes">
                        <p id="profilBalanceFelirat">{user.Balance}111111111$</p>
                    </div>
                </div>
                <div id="profilKepDiv">
                    <img id="profilKep" src={Pfp} alt="" />
                </div>


            </div>

            {open && (
                <ul className="dropdown">

                    {isAdmin && <li><Link to="/admin" ><Gomb content="Admin" /></Link></li>}
                    <li><Link to="/profile" ><Gomb content="Profile" /></Link></li>


                    <li><Link to="/deposit" ><Gomb content="Deposit" /></Link></li>

                    <li><Gomb content="Log out" buttonClass="dropGomb" onClick={onLogout} /></li>



                </ul>
            )}
        </div>
    );
}
