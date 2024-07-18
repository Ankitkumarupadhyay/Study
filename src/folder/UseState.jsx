import React from 'react';
import { useState } from 'react';

const UseState = () => {

//     const[count,setCount] = useState(0);

//     const increment=()=>{
//         if(count>=10){
//             alert("Can not go  above")
//         }else{
//             setCount(count + 1 )
//         }
//     }
//     const decrement=()=>{
//         if(count<=0){
//             alert("Can not go  below")
//         }else{
//             setCount(count - 1)
//         }
        
//     }
//   return <>
//   <h1>{count} </h1>  
//   <button onClick={increment}>+</button>
//   <button onClick={decrement} style={{margin:"10px"}} >-</button>
//   </>
    

// Updating arrays using useState 

// const[friends,setFriends] = useState(["Ankit","Khushi","Nilesh","Vivek"]);

// const addf =()=>(
//     setFriends([...friends,"Himanshu"] )
// )
// const remf =()=>{
//     setFriends(friends.filter((f)=>(
//         f!== "Himanshu"
//     )));
// }
// const updf =()=>{
//     setFriends(friends.map((f)=>(
//         f ==="Ankit" ? "Ankit Upadhyay" : f
//     )) );
// }

// return <>
// {friends.map((f)=>(
//     <li key={Math.random} >{f} </li>
// ))}
// <button onClick={addf}>Add new friend</button>
// <button onClick={remf}>Remove one friend</button>
// <button onClick={updf}>Update friends</button>
// </>

// Updating objects using useState 

// const[user,setUser]= useState({
//     name:"Ankit",
//     section:"A",
//     age:21,
//     collage:"KIT"
// })

// const Csec =()=>{
//      setUser({...user,section:"B"})
// }

// return <>
// <h1>{user.name} </h1>
// <h1>{user.section} </h1>
// <h1>{user.age} </h1>
// <h1>{user.collage} </h1>

// <button onClick={Csec}>Change Section</button>
// </>

// }

// arrays of objects

const[user,setUser]= useState([{
    name:"Ankit",
    section:"A",
    age:21,
    collage:"KIT"
},{
    name:"Khushi",
    section:"A",
    age:20,
    collage:"KIT"
},{
    name:"Nilesh",
    section:"C",
    age:21,
    collage:"KIT"
}])

const Csec =()=>{
     setUser(user.map((u)=>(
        u.section==="A" ? {...u,section :"B"}  : u
     )))
}

return <>

{user.map((u)=>(
    <ul>
    <li key={Math.random}>{u.name} </li>
    <li key={Math.random}>{u.section} </li>
     <li key={Math.random}>{u.age} </li>
     <li key={Math.random}>{u.collage} </li>
    </ul>
))}

<button onClick={Csec}>Change Section</button>
</>

}
export default UseState
