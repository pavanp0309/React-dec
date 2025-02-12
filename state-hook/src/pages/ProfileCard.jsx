import {useState} from 'react'
import Products from '../Data'

// usestate

const ProfileCard = () => {
    const [count,setCount]=useState(0)
    const [user,setUser]=useState({name:"ravi",age:"24"})
    const [data,setData]=useState([1,3,1])
    const [userName,setUserName]=useState()
    const [products,setProducts]=useState(Products)
    console.log(products)
    // data.push(0)
    function handleIncrement(){
        setCount(prev=>prev+1)
        setCount(prev=>prev+3)
        setCount(prev=>prev+4)
    }
   
   
    console.log(count) //0
  return (
    <div>
        <form action="">
            <input type="text" value={userName}  onChange={(e)=>setUserName(e.target.value)}/>
            <button type='submit'>submit</button>
        </form>
        <h1>Name:{userName}</h1>
        <h1>Age:{user.age}</h1>
        <p>{data.map((ele)=>ele)}</p>

        <h1>{count}</h1>
      <button onClick={()=>handleIncrement()}>increment-data</button>
      {/* <button onClick={()=>setCount("rello")}>increment</button> */}
      <button onClick={()=>setData([...data,"😁"])}>Add</button>
    
      <button onClick={()=>setUser({...user,name:"ravikumar"})}>changename</button>
    
    {
        products.map((ele)=><li>{ele.price}</li>)
    }
   
   
    </div>
  )
}

export default ProfileCard
