import React from 'react';
import banner from '../assets/Cinder.png'

export default function Home() {
  return (
    <div class='container'>
        <h1 id='title'>Home</h1>
        <img src={banner} alt="Cinder Banner"/>
    </div>
  )
}
