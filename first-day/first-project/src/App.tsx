import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { UserInfo } from './components/UserInfo'

function App() {
  return (
    <>
    <UserInfo name="Stephen" occupation="Internet Field Technician" hobby="Disc Golf" age={29}/>
    <UserInfo name="Billy" occupation="Sanitation Engineer" hobby="Stamp Collecting" age={45}/>
    </>
  )
}

export default App
