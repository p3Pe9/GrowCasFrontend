import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'

import FelsoSav from "../elemek/FelsoSav";
import Gomb from "../elemek/GombE";
import "../kinezetek/coin.css"

export default function CoinFlipGame() {
  const [valasztas, setValasztas] = useState(null);
  const [eredmeny, setEredmeny] = useState(null);
  const [dobas, setDobas] = useState(false);

  const flipCoin = () => {
    if (!valasztas || dobas) return;

    setDobas(true);
    setEredmeny(null);

    const isHeads = Math.random() < 0.5;
    const finaleredmeny = isHeads ? "heads" : "tails";

    setTimeout(() => {
      setEredmeny(finaleredmeny);
      setDobas(false);
    }, 1800);
  };

  return (
    <div className="container">
      <FelsoSav />

      <h1 style={{ textAlign: "center" }}>🪙 COINFLIP</h1>

      {/* COIN – KÖZÉPEN */}
      <div className="coin-wrapper">
        <div className="coin-container">
          <div
            className={`coin ${dobas
              ? eredmeny === "heads"
                ? "flip-heads"
                : "flip-tails"
              : ""
              }`}
          >
            <div className="coin-face">H</div>
            <div className="coin-face coin-back">T</div>
          </div>
        </div>
      </div>

      {/* GOMBOK */}
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setValasztas("heads")}>Fej</button>
        <button onClick={() => setValasztas("tails")}>Írás</button>
      </div>


      <div style={{ textAlign: "center", marginTop: 10 }}>
        <button onClick={flipCoin} disabled={dobas || !valasztas}>
          {dobas ? "Pörög..." : "FLIP"}
        </button>
      </div>
      
      <div className="eltartassss">
        <Link to="/"><Gomb content="Vissza" /></Link>
      </div>
      
      {/* EREDMÉNY */}
      {eredmeny && (
        <h2 style={{ textAlign: "center" }}>
          Eredmény: {eredmeny === "heads" ? "Fej 🪙" : "Írás 🪙"}
          <br />
          {valasztas === eredmeny ? "🎉 Nyertél!" : "❌ Vesztettél!"}
        </h2>
      )}
    </div>
  );
}


