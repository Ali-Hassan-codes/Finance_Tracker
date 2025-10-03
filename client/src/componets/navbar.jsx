import React from 'react'
import Form from './Form'
import { Link } from "react-router-dom";


export default function navbar() {
  return (
    <div>
      <nav className='pt-10 '>
            <ul className="bg-black text-white flex items-center px-10 space-x-6 h-10 cursor-pointer">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/details">Details</Link></li>
        </ul>
      </nav>
    </div>
  )
}
