import React from 'react'
import { useContext } from 'react'
import { data1,data2 } from './UseContextparent';

const UseContextchild = () => {
    const name =useContext(data1);
    const age =useContext(data2);
  return<>
  <h1>My name is {name}. I am {age} years old </h1>
  </>
}

export default UseContextchild
