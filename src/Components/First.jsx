import React from 'react'
import { createContext } from 'react';
import Second from './Second';


const Firstname=createContext();
const Lastname=createContext();
export default function First() {

    
  return (
    <div>
      <Firstname.Provider value="krishna">
      <Lastname.Provider value="Bhandarkar">
        <Second/>

        </Lastname.Provider>
      </Firstname.Provider>
      
    </div>
  )
}

export {Firstname, Lastname};
