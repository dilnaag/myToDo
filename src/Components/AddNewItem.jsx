import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addNewTodo } from '../util';
import { useState } from 'react';

export const AddNewItem=()=> {
        const [newItem,setNewItem]=useState('')
        
        const handelAdd=()=>{
            addNewTodo(newItem)
            setNewItem('')
        }
    return (
    <div className="addNewItem">
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' }, 
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic"
        label="Add new item"
        variant="outlined"
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
      
    </Box>
    <AddCircleIcon sx={{color:'green',cursor:'pointer',fontSize:'2rem'}}
        onClick={handelAdd}
    />
    </div>
  );
}