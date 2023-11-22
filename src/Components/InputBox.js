import React from 'react';
import './InputBox.css'
import XLogo from "../Assets/x logo.png"
import OLogo from "../Assets/o logo.png"

function InputBox(props) {
  return (
    <div className='inputSquare' {...props}>
    {props.x ? <img src={XLogo} /> : props.o ? <img src={OLogo} /> : ""}  
    </div>
  );
}

export default InputBox
