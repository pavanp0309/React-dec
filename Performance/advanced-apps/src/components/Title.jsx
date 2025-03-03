import React from 'react'

const Title = () => {
    console.log("component rendering-Title")
  return (
    <div>
      <h1>Title</h1>
    </div>
  )
}

export default React.memo(Title)
