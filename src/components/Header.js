import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='container'>
    <Link to='/' style={{ textDecoration: "none", color: "#ff6a95" }}>
      <h2>DEMO Streaming</h2>
    </Link>
 
    <Link to='/'>
      <h2>Log in</h2>
    </Link>
    <Link to='/' >
      <h2>Start your free trial</h2>
    </Link>
  </div>
  )
}

export default Header;