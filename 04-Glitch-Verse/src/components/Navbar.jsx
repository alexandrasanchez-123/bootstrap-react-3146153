import React from 'react'
import "../Styles/NavBar.css"
export const Navbar = () => {
  return (
     <nav className="navbar .bg-primary py-3 d-flex justify-content-center align-items-center shadow-sm">
      <img src="../public/logo-img.png"alt="GlitchVerse Logo"className="navbar-logo"/>
    </nav>
  )
}
