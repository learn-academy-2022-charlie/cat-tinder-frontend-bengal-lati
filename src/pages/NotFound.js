import React from 'react';
import fail from '../assets/404.jpg'
export default function NotFound() {
  return (
    <div>
      <img id="fail" src={fail} alt="404 Error - Page Not Found"/>
    </div>
  )
}
