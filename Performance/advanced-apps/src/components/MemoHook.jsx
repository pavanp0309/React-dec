import {use, useMemo, useState} from 'react'


let Users=[
    {
        id:1,name:"raju"
    },
    {
        id:2,name:"ramu"
    },
    {
        id:3,name:"Nani"
    },
    {
        id:4,name:"abhi"
    },
    {
        id:5,name:"sravan"
    },
]

// re-render : when state or props changes in a component
const MemoHook = () => {
    // problem
    const [search,setSearch]=useState('')
    const [number,setNumber]=useState(0)
    const [name,setName]=useState('raju')
    console.log("component is rendering...")
    

    // logic for search functionality  without useMemo
    // const SearchFilter=Users.filter(user=>{
    //     console.log("search user ...🐕‍🦺")
    //     return user.name.toLowerCase().includes(search.toLowerCase())
    // })

    // with useMemo
  const SearchFilter=useMemo(()=>{
    console.log("search user ...🐕‍🦺")
    return Users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))
  },[search])




    // calculating expensive values
     const Totalcul=useMemo(()=>{
        // console.log("calculating total...🐕‍🦺")
            return number*number
     },[number])
   

   

  return (
    <div>
         <input type="text"
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         />
       <ul>
        {
            SearchFilter.map((user)=><li key={user.id}>{user.name}</li>)
        }
       </ul>

        {/* <input type="number"
         value={number}
         onChange={(e)=>setNumber(e.target.value)}
         />
         <h3>{number}</h3>
       <input type="text"
         value={name}
         onChange={(e)=>setName(e.target.value)}
         />
         <h3>{name}</h3> */}
    </div>
  )
}

export default MemoHook
