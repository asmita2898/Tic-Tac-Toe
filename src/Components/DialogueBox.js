import React from 'react'
import "./DialogueBox.css";
import { Link } from 'react-router-dom';
import { defaultSquares } from "../Pages/PlayArea"

function DialogueBox({
  winnerName,
  alertText,
  setGamestate,
  setSquares,
  setShowModal,
  setScores,
  btnName,
  
}) 

{
  function handlePlayAgain() {
    console.log(btnName.current);
    if (btnName.current === "PLAY AGAIN") {
      resetScore();
      setScores({
        USER: 0,
        TIE: 0,
        CPU: 0,   
      });

      setGamestate(true);
      setSquares(defaultSquares());
      setShowModal(false);
    }
    if (btnName.current === "NEXT ROUND") {
      setGamestate(true);
      setSquares(defaultSquares());
      setShowModal(false);
    }
  }
  function resetScore() {
    const scoretemplate = {
      USER: 0,
      TIE: 0,
      CPU: 0, 
    };
    localStorage.setItem("savedScore", JSON.stringify(scoretemplate));
  }
  
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='title'>
          <p>{winnerName}</p>
        </div>
        <div className='body'>
          <h3>{alertText}</h3>
        </div>
        <div className='footer'>
          <Link onClick={resetScore} className='commonButton links' to='/'>
            <button className='commonButton quitBtn'>QUIT</button>
          </Link>
          <button onClick={handlePlayAgain} className='currents'>
            {btnName.current}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DialogueBox
