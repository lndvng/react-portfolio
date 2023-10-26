import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
      <div>
        <Navbar />
        <Main />
        <Aboutme />
        <Projects />
        <Contact />
      </div>
  )
}

export default App
