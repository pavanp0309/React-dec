import {useState} from 'react'
import MemoHook from './components/MemoHook'
import Title from './components/Title'
import Counter1 from './components/Counter'
import Counter2 from './components/Counter2'
import Theme from './components/Theme'

const App = () => {
  const [count,setCount]=useState(0)
  const [count1,setCount1]=useState(1)
  const [theme,setTheme]=useState(true)

// function for handling counter-1
const handleCount1=()=>{
  console.log("count-1 fn is recreated")
  
}
// function for handling counter-2
const handleCount2=()=>{
  console.log("count-2 fn is recreated")

}
// function for handling handling-3
const handleTheme=()=>{
  console.log("theme fn is recreated")
  
}

  return (
    <div>
      {/* <MemoHook/> */}
      <Title/>
      <h1>counter</h1>
      <Counter1  count={count} handleCount1={handleCount1}/>
      <button onClick={()=>setCount(count+1)}>click</button>
      <h1>counter1</h1>
      <Counter2 count1={count1} handleCount2={handleCount2}/>
      <button onClick={()=>setCount1(count1+2)}>click</button>
      <h1>theme</h1>
      <Theme theme={theme} handleTheme={handleTheme}/>
      <button onClick={()=>setTheme(false)}>click</button>
    </div>
  )
}

export default App
