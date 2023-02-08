import React from 'react';
import useCounter from './useCounter.js';

export default function UseCustomHook() {
    const data=useCounter();
  return (
    <div>
      Count : {data.count}
      <br>
      </br>
      <button type="button" onClick={data.increment}>CLICK TO INCREASE</button>
    </div>
  )
}

