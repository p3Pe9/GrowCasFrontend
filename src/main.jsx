import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' //Az oldalak közti navigáció

//oldalak
//----------------------------------------------------------------------
import Test from './oldalak/test'
import Regisztracio from './oldalak/RegisztracioO.jsx'
import Bejelentkezes from './oldalak/BejelentkezesO.jsx'
import Home from './oldalak/HomeO.jsx'
import Deposit from './oldalak/DepositO.jsx'
import Profil from './oldalak/ProfilO.jsx'
import Admin from './oldalak/AdminO.jsx'
import NemElerheto from './oldalak/NemElerhetoO.jsx'
import Game from './oldalak/GameO.jsx'
import MinesGame from './oldalak/MinesJ.jsx'
import RouletteGame from './oldalak/RouletteJatek.jsx'
import CoinFlipGame from './oldalak/CoinFlip.jsx'
import Roulettes from './oldalak/RoulettO.jsx'
import Slots from './oldalak/SlotO.jsx'
import { AuthProvider } from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/regisztracio' element={<Regisztracio />} />
          <Route path='/bejelentkezes' element={<Bejelentkezes />} />
          
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/profile' element={<Profil />} />

          <Route path='/played' element={<NemElerheto />} />
          <Route path='/favorite' element={<NemElerheto />} />
          <Route path='/promotion' element={<NemElerheto />} />

          <Route path='/roulettes' element={<Roulettes />} />
          <Route path='/slots' element={<Slots />} />
          <Route path='/cards' element={<NemElerheto />} />
          <Route path='/liveCasino' element={<NemElerheto />} />

          <Route path='/coinflip' element={<CoinFlipGame />} />        
          <Route path='/mines' element={<MinesGame />} />
          <Route path='/mine' element={<Game />} />
          <Route path='/roulette' element={<RouletteGame />} />


        

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
