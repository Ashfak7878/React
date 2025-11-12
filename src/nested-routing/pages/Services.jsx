import React from 'react'
import './Serivices.css';
import { Link, Outlet } from 'react-router-dom';
const Services = () => {
  return (
    <div className='services-container'>

      <h2 className='services-title'>Serivces</h2>
      <p className='services-subtitle'></p>
      <div className='services-links'>

        {/* web dev */}

        <Link to='web-dev'
          className='service-link web'>
          web Development
        </Link>

        <Link to='app-dev'
          className='service-link app'>
          App Development
        </Link>

      </div>

{/* Nested route content */}

      <Outlet />
    </div>
  )
}

export default Services
