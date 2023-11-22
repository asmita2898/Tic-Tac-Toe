import React from 'react'
import "./ScoreWindow.css"

function ScoreWindow({ score, color, player, title }) {
    return (
      <div className={` scoreWindow ${color} `}>
        <div>
          {player} {title}
        </div>
        <p>{score}</p>
      </div>
    );
  }
  

export default ScoreWindow
