import React from 'react'
import './App.css'
import './index.css'
import SideBar from './Component/SideBar'
import Message from './Component/Message'

function App() {
  return (
    <div className="app-container">
    <div className='flex flex-row'>
      <SideBar/>
      <Message />
    </div>

    </div>
  )
}

export default App
