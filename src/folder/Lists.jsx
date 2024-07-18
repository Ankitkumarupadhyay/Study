import React from 'react'

const Lists = () => {
    const numbers =[1,2,3,4,5];
    const users =[
           {firstName:"ankit" ,lastName:"upadhyay", age:20},
           {firstName:"nilesh" ,lastName:"yadav", age:50},
           {firstName:"khushi" ,lastName:"maurya", age:18},
           {firstName:"vivek" ,lastName:"upadhyay", age:49},
        ];
      let  uNum = 1;
  return <>
  {
    numbers.map((num)=>(
        <ul key={Math.random() *10}>
            <li >{num}</li>
        </ul>
    ))
    
    
  }
  {
    
    users.map((user)=>(
      <ul key={Math.random*10}>
        <li><h1>Data of {uNum++} </h1></li>
        {/* <li><h1>Data of {user.firstName} </h1></li> */}
        <li>{user.firstName}</li>
        <li>{user.lastName}</li>
        <li>{user.age}</li>
       
      </ul>
     
    ))
    
  }
  
  </>
}

export default Lists
