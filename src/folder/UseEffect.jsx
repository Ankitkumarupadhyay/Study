import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {
    const[value,setValue]= useState(0)

    const inc= ()=>{
        setValue(value +1)
    }

    useEffect(()=>{
        console.log("Hello");
        document.title= `increment (${value})`
    },[value])
  return <>
  <h1>{value} </h1>
  <button onClick={inc}>Increase</button>
  </>
}

export default UseEffect
