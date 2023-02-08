import React, {useState} from 'react'

export default function UseMemoExample() {
  

    const [first, setFirst]=useState(0);
    const [second, setSecond]=useState(0);
    const increment=()=>{
  setFirst(first+1);
    }

    const decrement=()=>{
        setSecond(second-1);
    }


    const isEven=()=>{

        return first%2===0;
    }

    return (

    <div>

<br/>  {first}<br/><br/>

      
      <button onClick={increment}>INCREMENT</button><br/><br/>

      {isEven()?"Even":"Odd"}<br/><br/>

      {second}<br/>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  )
}
