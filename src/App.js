import React from 'react'
import './App.css'

import Header from './components/header/Header'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Header />
      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <Navbar/>
        <div>
          {/* Left part */}
          {/* Right part */}
        </div>
      </div>
    </div>
  )
}

export default App
