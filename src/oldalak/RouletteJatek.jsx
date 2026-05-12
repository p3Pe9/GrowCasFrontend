import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import Gomb from "../elemek/GombE";
import FelsoSav from "../elemek/FelsoSav";
import "../kinezetek/testttttt.css"

const redNumbers = [
  1, 3, 5, 7, 9, 12, 14, 16, 18,
  19, 21, 23, 25, 27, 30, 32, 34, 36
];

const numbers = Array.from({ length: 37 }, (_, i) => i);

const getColor = (n) => {
  if (n === 0) return "green";
  return redNumbers.includes(n) ? "red" : "black";
};

export default function RouletteGame() {
  const [offset, setOffset] = useState(0);
  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);

    const winningNumber = Math.floor(Math.random() * 37);
    const index = numbers.indexOf(winningNumber);

    // extra körök + pozíció
    const spins = 5;
    const newOffset = -(index * 60 + spins * numbers.length * 60);

    setOffset(newOffset);

    setTimeout(() => {
      setResult(winningNumber);
      setSpinning(false);
    }, 2500);
  };

  return (
    <div className="container">
      <FelsoSav />

      <h1>🎰 ROULETTE</h1>

      <div className="pointer"></div>

      <div className="roulette-container">
        <div
          className="roulette-track"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {Array(6).fill(numbers).flat().map((n, i) => (
            <div
              key={i}
              className={`roulette-number ${getColor(n)}`}
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      <button onClick={spin}>
        {spinning ? "Pörög..." : "SPIN"}
      </button>

      <div className="eltartassss">
        <Link to="/"><Gomb content="Vissza" /></Link>
      </div>

      {result !== null && (
        <h2>
          Eredmény: {result}{" "}
          {getColor(result) === "red" && "🔴"}
          {getColor(result) === "black" && "⚫"}
          {getColor(result) === "green" && "🟢"}
        </h2>
      )}
    </div>
  );
}