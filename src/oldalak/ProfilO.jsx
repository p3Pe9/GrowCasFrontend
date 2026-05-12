import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom'

import FelsoSav from '../elemek/FelsoSav';
import '../kinezetek/profileC.css';
import Logo from '../assets/kepek/growLog.png'
import Gomb from '../elemek/GombE'
import ProfileInput from '../elemek/ProfileInput';
import Pfp from '../assets/kepek/hirdetes.png'
import { useAuth,AuthProvider } from "../context/AuthContext";

import {whoami, logout, usernameUpdate, deleteUser, changePassword, uploadProfileImage } from "../api";



export default function Profil() {

  const [username, setUsername] = useState("")
  const [psw, setPsw] = useState("")
  const [pswAgain, setPswAgain] = useState("")
  const [basePsw, setBasePsw] = useState("")
  const [pfp, setPfp] = useState("")
  const { user, refreshUser } = useAuth();
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(Pfp)     
  const fileInputRef = useRef(null)

  function handleBrowse() {
    fileInputRef.current.click()
  }

  function handleFileChange(e) {
    const file = e.target.files[0]

    if (!file) return

    setSelectedFile(file)
    setPreview(URL.createObjectURL(file))
  }

  async function handleUploadPfp() {

    if (!selectedFile) {
      alert("Válassz ki egy képet!")
      return
    }

    try {
      const userId = user.UserID
      //console.log(userId);
      const data = await uploadProfileImage(userId, selectedFile)

      if (data.msg) {
        alert(data.msg)
      } else {
        alert("Profilkép frissítve!")
      }


    } catch (err) {
      console.error(err)
      alert("Hiba történt a feltöltésnél")
    }
  }
  
  async function handleChangeUsername() {
    if (!username) {
      alert("Adj meg egy új nevet!")
      return
    }

    const userId = user.UserID
    console.log(userId);
    
    const data = await usernameUpdate(userId, username)
    await refreshUser();
    console.log(user.Username);
    
    if (data.msg) {
      alert(data.msg)
    } else {
      alert("Név módosítva!")
    }
    
  }

  async function handleChangeDelete() {
    const data = await deleteUser(user.UserID)

    if (data.msg) {
      alert(data.msg)
    } else {
      alert("Sikeres törlés")
    }
  }

  async function handleChangePsw() {
    const data = await changePassword(psw, basePsw)

    if (data.msg) {
      alert(data.msg)
    } else {
      alert("Sikeres jelszómódosítás")
    }
  }


return (
    <div>

      <div>
        <FelsoSav />
      </div>

      <div className='rendezes'>

        <div className='profilAlap'>

          <div className='balOldalKep'>
            <img src={Logo} alt="" />
          </div>

          <div className='profilJobbRendezes'>

            <div className='pfpIgazitas'>
              <div>
                <img className='pfp' src={preview} alt="" />
              </div>
              <div id='vegig'>
                <p className='profilFeliratok'>Upload your profile picture</p>
                <div id='gomokMegfeleloElhelyezese'>

                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />

                  <div onClick={handleBrowse}>
                    <Gomb content='Browse' />
                  </div>

                  <div onClick={handleUploadPfp}>
                    <Gomb content='Change' />
                  </div>

                </div>
              </div>
            </div>

            <hr className='hrEltartas' />

            <div>
              <p className='profilFeliratok alsokettoprofilFeliratok'>Change your name</p>

              <div id='nevValtasRendezes'>
                <input
                  className="profileInput"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <div >
                  <Gomb content='Change' onClick={handleChangeUsername} />
                </div>
              </div>
            </div>

            <hr className='hrEltartas' />

            <div>
              <p className='profilFeliratok alsokettoprofilFeliratok'>Change your password</p>
              <div className='jelszoRendezes'>
                {/* <ProfileInput  placeholder="New password" /> */}
                <input
                  className="profileInput"
                  placeholder="New password"
                  type="password"
                  value={psw}
                  onChange={(e) => setPsw(e.target.value)}
                />
                {/* <ProfileInput value={pswAgain} onChange={(e) => setPswAgain(e.target.value)} placeholder="New password again" /> */}
                <input
                  className="profileInput"
                  placeholder="New password againe"
                  type="password"
                  value={pswAgain}
                  onChange={(e) => setPswAgain(e.target.value)}
                />
              </div>
              <div className='jelszoRendezes jelszoRendezesGomb'>
                {/* <ProfileInput value={basePsw} onChange={(e) => setBasePsw(e.target.value)} placeholder="Current password" /> */}
                <input
                  className="profileInput"
                  placeholder="Current password"
                  type="password"
                  value={basePsw}
                  onChange={(e) => setBasePsw(e.target.value)}
                />
                <Gomb content='Change' onClick={handleChangePsw} />
              </div>
            </div>

            <hr className='hrEltartas' />

            <div id='torlesRendezes'>
              <Gomb content='Delete' onClick={handleChangeDelete} />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}