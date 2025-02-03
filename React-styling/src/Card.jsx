import React from 'react'
import { cardText,cardTitle } from './style'

const Card = () => {
    
  return (
    <div>
       {/* inline styling */}
       <div className="card" style={{width:"200px",height:"200px",padding:"1.25rem",color:"gold",borderRadius:"10px",border:"2px solid green"}}>
        <h1 style={cardTitle}>Hello React</h1>
        <p style={cardText}>learning styling styling in react</p>
      </div>
    </div>
  )
}

export default Card
