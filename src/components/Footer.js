import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Footer.css"

export default function Footer() {
  let { pathname } = useLocation()
  if(pathname !== "/") return null;
  return (
    <footer>
      <div className="whole-car">
        
          <div class="car"></div>
          <div class=" wheel wheel1"></div>
          <div class="wheel wheel2"></div>
          <div class="title"> By Don and Damien </div>
      </div>
          <div class="track"/>
    </footer>
  )
}
