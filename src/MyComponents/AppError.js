import React from 'react'
import { NavLink } from 'react-router-dom'
function AppError() {
  return (
    <div className='container'>
      <h3 className='text-info'>Oops !!!! the resource you're looking for does not exists</h3>
      <button type='button' className='btn btn-warning'><NavLink to='/' className='text-success' style={{textDecoration:'none'}}>Go To Home</NavLink></button>
    </div>

  )
}

export default AppError;