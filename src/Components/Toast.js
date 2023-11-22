import React from 'react'
import "./Toast.css"

function Toast({ toastText }) {
  return (
    <div className='ToastContainer'>
      <p>{toastText}</p>
    </div>
  )
}

export default Toast
