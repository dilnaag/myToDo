import React from "react";
import { useState } from "react";
import { readTodos } from "../util";
import { useEffect } from "react";
import { limit } from "firebase/firestore";
import List from '@mui/material/List';
import { Todo } from "./Todo";

export const Todos = () => {
    const [todos,setTodos]=useState([])

    useEffect(()=>{
        readTodos(setTodos)
    },[])
    console.log(todos);
    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(obj=><Todo key={obj.id} {...obj}/>)}
            </List>
        </div>
    )
}