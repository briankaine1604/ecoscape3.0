import React from 'react'
import NavbarList from './navbarlist'
import Logo from './logo'

const Navbar = ({navStyle}) => {
  return (
    <div className={`${navStyle} w-full h-10 flex border`}>
      <Logo/>
      <NavbarList/>
    </div>
  )
}

export default Navbar