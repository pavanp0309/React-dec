import React from 'react'

const Theme = ({theme,handleTheme}) => {
    console.log("component rendering...Theme")
  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={()=>handleTheme()}>changetheme</button>
    </div>
  )
}

export default Theme
