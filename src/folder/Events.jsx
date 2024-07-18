import React from 'react'

const clicked = ()=>{
    console.log("Clicked");
   alert("clicked")
}


const Events = () => {
  return <>
  <button onClick={clicked} > Click Me</button>
 
  
  </>
}

export default Events
