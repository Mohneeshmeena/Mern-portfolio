import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <>

      <nav className='navbar'>
        <div className='logo'>Mohneesh Meena</div>
        <div className='listbox'>
          <Link className='listitem'  >Thank</Link>
          <Link className='listitem'  >You</Link>
          <Link className='listitem'  >For</Link>
          <Link className='listitem'  >Visiting</Link>
          <Link className='listitem'  >MyPortfolio</Link>
          <Link className='listitem' to="/contact" >Contact Me</Link>
        </div>

      </nav>

    </>
  )
}

export default navbar