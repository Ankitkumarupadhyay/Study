import React from 'react'
import { useState } from 'react'
import './counter.css'

const Counter = () => {

    const [num,setNum]=useState(0)
    const increment = ()=>{
        setNum(num + 1)
    }

    const decrement = ()=>{
        setNum(num - 1)
    }
    const reset = ()=>{
        setNum(0)
    }
  return <div className="main">
  <div className="center">
    <h1 >{num} </h1>
    
  </div>
  <div className="btn">
  <button onClick={increment} >+</button>
  <button onClick={decrement}>-</button>
  <button onClick={reset}>Reset</button>
  </div>
  
  </div>
}

export default Counter
