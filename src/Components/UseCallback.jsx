import React from 'react'
import Todos from './Todos';
import { useState } from 'react';
import { useCallback } from 'react';

export default function UseCallback() {

    const[count, setCount] = useState(0);
    const[todo, setTodo]=useState([]);

    function increment(){
        setCount(count+1);
    }

    const addTodo=useCallback(()=>{
        setTodo([...todo, "New Todo"]);
    },[todo])

    

  return (
    <div>
        <Todos t={todo} addTodo={addTodo}/>
        <p>{count}</p>
      <button onClick={increment}>INCREMENT</button>
      

    </div>
  )
}