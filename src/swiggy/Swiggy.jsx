import React from 'react'
import { Rest } from './Data'

const ankit = ()=>{
return <>
{
    Rest.map((a)=>(
        <div className="container">
        <p>{a.id}</p>
<p>{a.name}</p>
<img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + a.cloudinaryImageId} alt="" />
</div>
    ))
}

</>
}

const Swiggy = () => {
  return <>
 {ankit()}
  </>
}

export default Swiggy
