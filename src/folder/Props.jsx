import React from 'react'

const Props = (props) => {
  return (
    <div>
        <img src={props.img} alt="" />
      <h1>{props.name}</h1>
      <h3>{props.class} </h3>
      <h3>{props.age} </h3>
    </div>
  )
}

export default Props
