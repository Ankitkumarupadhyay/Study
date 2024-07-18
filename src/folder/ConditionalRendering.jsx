import React from 'react'


const ConditionalRendering = ({isValid}) => { 

const ValidPassword = ()=> <h1>Password is correct</h1>
const InvalidPassword = ()=> <h1>Password is incorrect</h1>

// if(isValid ){
//     return <ValidPassword />
//   }
//     return <InvalidPassword />

return isValid ? <ValidPassword /> : <InvalidPassword />
}


// const ConditionalRendering = () => {   

// const items = ["Mobiles", "Earbud","Speaker","Charger"];

// return <>
//   <h1>Cart 🛒</h1>
//    {items.length>0 && <h1>You have {items.length} items in your Cart </h1> }

//    <ul >
//     <h2>Products</h2>
//     {
//         items.map((item)=>(
//             <li key={Math.random*10}>{item} </li>
//         ))
//     }
//    </ul>
// </>
  
// }

export default ConditionalRendering
