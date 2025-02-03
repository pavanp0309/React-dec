import React from 'react'
import PropTypes, { number } from 'prop-types'; 

const ProfileCard = ({className,imageUrl,mobile,isonline,colors,details,logout}) => { // 2nd way
  console.log(mobile,className)
  // 1st way -normal way
  // console.log(props.className,props.mobile)
  // console.log(props.details.name) // accessing objects
  // console.log(props.colors.map((ele)=>console.log(ele)))// accessing array
  // // props.logout()//calling the function ,events form-handling
  // console.log(props.isonline?"u can chat":"offline")

  // destructuring the Props
  // const {className,imageUrl, mobile,colors,isonline,details, logout}=props 
  // console.log(className,imageUrl,mobile,isonline,colors,details,logout)
  return (
    <div className={`card border border-primary p-5 ${className} `}>
        <img src={imageUrl} alt="" width={"100px"} height={"50px"} className='mx-auto'/>
        <h3 className='card-title'>{Object.values(details)}</h3>
        <h3 className='card-title'>{details.age}</h3>
        <h3 className='card-title'>{mobile}</h3>
        <p className='card-text'>{isonline?"online":"offline"}</p>
        <button className='btn btn-outline-success' onClick={()=>logout()}>Logout</button>
    </div>
  )
}

ProfileCard.defaultProps={
  mobile:7666
}

// Checking the Type of Props 
ProfileCard.propTypes={
  mobile:PropTypes.number.isRequired,
  className:PropTypes.string.isRequired,
  isonline:PropTypes.bool.isRequired,
  logout:PropTypes.func.isRequired,
  details:PropTypes.shape({
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    address:PropTypes.string
  })

}

export default ProfileCard
