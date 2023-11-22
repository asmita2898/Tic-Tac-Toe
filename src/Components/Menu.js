import React from 'react'
import LogoBox from './LogoBox'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom';
import "../Pages/GameBoard.css"

function Menu({ setPlayer, player }) {
  const setSymbol = (choice) => {
    if (player !== choice) {
      setPlayer(choice);
      localStorage.setItem("playerOption", choice);
    }
  };

  function show(text) {
    toast(text, {
      position: "top-right",
      style: {
        width: "20vw",
        height: "5vh",
        right: "1em",
        color: "#F2B237",
        backgroundColor: "#192A32",
        fontSize: "12px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1em",
      },
    });
  }

  return (
    <div className='gameNavigator'>
      <LogoBox />
        <div className='pickerWindow'>
          <h3>PICK PLAYER</h3>

          <div className='buttonHouse'>
          <button className='xBtn' autoFocus={player === "X"}
          onClick={() => {setSymbol("X"); }}>
          </button>

          <button className='oBtn'autoFocus={player === "O"}
          onClick={() => {setSymbol("O"); }}>
          </button>
          </div>

        </div>

      <button className='newGame'><Link to='/game'>
      NEW GAME (VS CPU)
      </Link></button>

      <button className='newGame2'>NEW GAME ( VS HUMAN ) Coming soon</button>

      <br />

      <button className='invite'> <a
      onClick={() => {
        show("Invite Link copied");
        navigator.clipboard.writeText(window.location.href);
      }}
      className='gameBtns gameBtnsinvite'>
      Invite your friend
    </a></button>
     
    </div>
  )
}

export default Menu
