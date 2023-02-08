import React, { useReducer } from 'react'
import { useState } from 'react';

const initialstate=0;

const reducer =(state,action)=>{

    console.log(state, action);

    if(action.type=="INCR"){

        return state+1;

    }
    
    if(action.type=="DECR"){

        return state-1;
        
    }

    return state;


}

export default function UseReduserExample() {

    //const[count, setCount]=useState(0);

    const [state, dispatch] = useReducer(reducer, initialstate);

//     function increment()
// {
//     setCount(count+1);
// }


// function decrement()
// {
//     setCount(count-1);
// }




  return (
    <div>
      <p>{state}</p>
      <button onClick={()=>{dispatch({type:"INCR"})}}>INCREMENT</button>
      <button onClick={()=>{dispatch({type:"DECR"})}}>DECREMENT</button>
    </div>
  )
}
