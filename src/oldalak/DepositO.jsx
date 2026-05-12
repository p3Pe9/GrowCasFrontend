import { useState } from 'react'
import FelsoSav from '../elemek/FelsoSav';
import '../kinezetek/depositC.css';
import Logo from '../assets/kepek/growLog.png'
import Mastercard from '../assets/kepek/mastercard.png'
import Visa from '../assets/kepek/visa.png'
import American from '../assets/kepek/american.png'

import Gomb from '../elemek/GombE';
import { deposit } from '../api';
import { useAuth,AuthProvider } from "../context/AuthContext";


export default function Deposit() {

  const [amount, setAmount] = useState("")
  const { user, refreshUser } = useAuth();

  async function handleDeposit() {

    if (!amount || amount <= 0) {
      alert("Adj meg egy összeget!")
      return
    }

    const data = await deposit(Number(amount))

    if (data.error) {
      alert(data.error)
    } else {
      alert("Sikeres befizetés!")
      setAmount("")
    }
  }

  return (
    <div>

      <FelsoSav />

      <div className="rendezes">
        <div className="kartyaAlap">

          <div className='kartyaLogo'>
            <img src={Logo} alt="" />
          </div>

          <div className='kartya'>

            <div className='kartyaCimsor'>
              <img src={American} alt="" />
              <img src={Mastercard} alt="" />
              <img src={Visa} alt="" />
            </div>

            <div className='inputIgazitas'>
              <input
                className="profileInput"
                placeholder="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div onClick={handleDeposit} className='gombIgazitas'>
              <Gomb content="Pay" />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}