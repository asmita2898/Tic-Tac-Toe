import React, { useEffect, useState } from 'react'
import "./GameBoard.css";
import Menu from "../Components/Menu"
import PlayArea from "./PlayArea"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function GameBoard() {

  const [player, setPlayer] = useState(playerChoice());

  function playerChoice() {
    const choiceExists = localStorage.getItem("playerOption");

    if (choiceExists) {
      return choiceExists;
    } else {
      return "O";
    }
  }

  useEffect(() => {
    const choiceExists = localStorage.getItem("playerOption");
    if (choiceExists) {
      setPlayer(choiceExists);
    } else {
      localStorage.setItem("playerOption", player);
    }
  }, [player]);

  return (
    <div className='gameBoard'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu setPlayer={setPlayer} player={player} />} />
          <Route path='/game' element={<PlayArea player={player} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default GameBoard
