import React from 'react'
import PropTypes from 'prop-types'

// child Component
const ServiceCard = ({children}) => {
    // console.log(props.children.props.children)
    // console.log(children.props.children)
    // console.log(typeof props)
    // console.log(props.name)
    // const {name="free"}=props
  return (
    <div className='card border border-warning'>
      <h1>DefaultProps</h1>
      {/* <h3>{props.name}</h3> */}
      {/* after destructuring */}
      {/* <h3>{name}</h3> */}
     
    </div>
  )
}

// ServiceCard.defaultProps={
//     name:"free"
// }

ServiceCard.propTypes={
    name:PropTypes.string,
    // element:PropTypes.node
}

export default ServiceCard
