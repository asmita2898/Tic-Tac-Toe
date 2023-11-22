import React from 'react'
import XLogo from "../Assets/x logo.png"
import OLogo from "../Assets/o logo.png"

function LogoBox() {
  return (
    <div className='logoBox'>
    <img src={XLogo} alt='X' />
    <img src={OLogo} alt='O' />
    </div>
  )
}

export default LogoBox
