import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


import { Todos } from './Components/Todos'

function App() {
  const [user,setUser]=useState(null)
  
  

  return (
    
      <div>
        <h1>ToDo</h1>
        <Todos />
      </div>
  
  )
}

export default App
