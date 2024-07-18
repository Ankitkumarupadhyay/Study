import React from 'react'
const s={
  color:"white",
  backgroundColor:"crimson",
  padding:"25px",
  fontSize:"5rem"
}

const Style = () => {
  return <>
  <h1 style={{color:"red", fontSize:"5rem",textDecoration:"underline"}} >Hello may name is ankit</h1>
  <h1 style={{color:s.color,backgroundColor:s.backgroundColor,padding:s.padding,fontSize:s.fontSize}} >Hello may name is ankit</h1>
  </>
}

export default Style
