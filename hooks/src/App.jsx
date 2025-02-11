import {useState,Component} from 'react'

// useState() //nvalid hook call. Hooks can only be called inside of the body of a function component.

const App = () => {
     let [count,setCount]=useState(0)
     let [dark,setDark]=useState(false)
     let [background,setBackground]=useState("blue")
    //  function for Handling the Count
    function handleCount(){
      setCount(count+1)

    }
     //  function for Theme
     function handleTheme(){
      setDark(!dark)

    }
  return (
    <div className={`${dark?"bg-dark":"bg-white"}`} style={{background:`${background}`,height:"100vh",width:"100%"}}>
       <h1>Project on useStae</h1> 
        <button className='btn btn-outline-warning' onClick={()=>handleTheme()}>{dark?"dark":"light"}</button>
      <div className='Counter d-flex justify-content-center mb-4'>
      <h1 className='text-bold text-center '>{count}</h1>
      <button className='btn btn-outline-warning' onClick={()=>handleCount()}>Increment</button>
      </div>
      {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
      <div className='Theme d-flex justify-content-center'>
      <button className='btn btn-outline-warning' onClick={()=>setBackground("green")}>green</button>
      <button className='btn btn-outline-warning' onClick={()=>setBackground("gold")}>GOld</button>
      <button className='btn btn-outline-warning' onClick={()=>setBackground("Orange")}>Orange</button>
      <button className='btn btn-outline-warning' onClick={()=>setBackground("pink")}>pink</button>
      <button className='btn btn-outline-warning' onClick={()=>setBackground("gray")}>gray</button>
      </div>
    </div>
  )
}

export default App
