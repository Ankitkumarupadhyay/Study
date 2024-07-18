import React from 'react'
import { createContext } from 'react'
import UseContextchild from './UseContextchild';



export const data1 = createContext();
export const data2 = createContext();


const UseContextparent = () => {
    const name = "Ankit Kumar Upadhyay";
    const age = 21;
  return<>
  <data1.Provider value={name}>
    <data2.Provider value={age}>
       <UseContextchild />
    </data2.Provider>
  </data1.Provider>
  </>
}

export default UseContextparent
