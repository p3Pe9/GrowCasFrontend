import React, { useState } from "react";
import "../kinezetek/styles.css"

const GRID_SIZE = 5;
const MINES_COUNT = 5;

function generateBoard() {
  const board = Array(GRID_SIZE * GRID_SIZE).fill("safe");

  let minesPlaced = 0;
  while (minesPlaced < MINES_COUNT) {
    const index = Math.floor(Math.random() * board.length);
    if (board[index] !== "mine") {
      board[index] = "mine";
      minesPlaced++;
    }
  }

  return board.map((cell) => ({
    type: cell,
    revealed: false,
  }));
}

export default function MinesGame() {
  const [board, setBoard] = useState(generateBoard);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(1);

  const handleClick = (index) => {
    if (gameOver || board[index].revealed) return;

    const newBoard = board.map((cell, i) =>
      i === index ? { ...cell, revealed: true } : cell
    );

    if (board[index].type === "mine") {
      setGameOver(true);
      alert("💣 Game Over!");

      // opcionális: minden mező felfedése
      setBoard(newBoard.map(cell => ({ ...cell, revealed: true })));
      return;
    }

    setScore(prev => +(prev * 1.2).toFixed(2));
    setBoard(newBoard);
  };

  const resetGame = () => {
    setBoard(generateBoard());
    setGameOver(false);
    setScore(1);
  };

  return (
    <div className="container">

      <h1>MINES</h1>
      <h2>Szorzó: {score}x</h2>

      <div className="grid">
        {board.map((cell, i) => (
          <div
            key={i}
            className={`cell ${cell.revealed ? "revealed" : ""}`}
            onClick={() => handleClick(i)}
          >
            {cell.revealed && (cell.type === "mine" ? "💣" : "💎")}
          </div>
        ))}
      </div>

      <button onClick={resetGame}>Új játék</button>
    </div>
  );
}