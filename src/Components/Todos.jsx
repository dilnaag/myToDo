import React from "react";
import { useState } from "react";
import { readTodos } from "../util";
import { useEffect } from "react";
import { limit } from "firebase/firestore";
import List from '@mui/material/List';
import { Todo } from "./Todo";
import { Unsubscribe } from "@mui/icons-material";
import { AddNewItem } from "./AddNewItem";

export const Todos = () => {
    const [todos,setTodos]=useState([])

    useEffect(()=>{
        const unsubscribe= readTodos(setTodos)
        return ()=> unsubscribe
    },[])
    console.log(todos);
    return (
        <div>
            <AddNewItem />
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(obj=><Todo key={obj.id} {...obj}/>)}
            </List>
        </div>
    )
}