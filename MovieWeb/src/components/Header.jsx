import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header bg-[#6785a4] h-[72px] px-10 flex items-center justify-around '>
      <Link to='/'>
        <div className="logo text-[#ffffff] text-xl font-semibold">Movie App</div>
      </Link>
      <div className='user-image w-[38px] h-[38px] '>
        <img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="" />
      </div>
    </div>
  )
}

export default Header