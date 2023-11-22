import React from 'react';
import "./TurnBox.css"

function TurnBox({player}) {
    return <div className='turn'>{player} &nbsp; TURN</div>;
}

export default TurnBox
