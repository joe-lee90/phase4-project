import React from 'react'
import'./Header.css'

function Header() {
  return (
    <div className="header">

        <div className="header_center">
            <input type="text" />
        </div>

        <div className="header_right">
            <p>🔍 🌐 👤</p>
        </div>
    </div>
  )
}

export default Header