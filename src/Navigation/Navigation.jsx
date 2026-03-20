import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <nav className='flex justify-between mt-5 '>
        <div className='text-xl ml-3'>
            AskMe
        </div>
        <div className='flex gap-8 float-left mr-10'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/help">Help</NavLink>
        </div>   
    </nav >
    <hr className='mt-3 mb-3' />
    </div>
  )
}

export default Navigation
