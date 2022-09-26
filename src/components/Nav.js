import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <NavLink to={"/"} className="login-link"></NavLink>
      <NavLink to={"/dashboard"} className="dash-link"></NavLink>
    </div>
  )
}

export default Nav
