import React ,{ useEffect } from 'react'
import './App.css'

import { useState } from 'react'
import { Todos } from './Components/Todos'
import { Login } from './Components/login'
import { getCurrentUser, signOutUser } from './util'
import LogoutIcon from '@mui/icons-material/Logout';

function App() {
  const [user,setUser]=useState(null)
  
  getCurrentUser(setUser)

  console.log(user);
  return (
    
      <div className='app'>
        <h1 >My ToDo</h1>
        {user && <LogoutIcon 
        sx={{width:"100%",cursor:"pointer",color:"red"}}
        onClick={()=>signOutUser()}/>}
        {user==null ? <Login/> : <Todos />}
       
      </div>
  
  )
}

export default App
