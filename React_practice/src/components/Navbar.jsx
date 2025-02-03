import "../App.css"
import PropTypes from 'prop-types'; 

// components 
 function Navbar({data,className,d,e="🙄🙄🙄",ex}){
    // let a="dat"
    // switch (a) {
    //     case "data":
    //       return <h1>Hello{data}</h1>
    //     default:
    //         return <h3>hello{e}</h3>
    // }
 return(
    <>
    <button onClick={(e)=>ex(e.target.value)}>click</button>
    <h1>{e}</h1>
    <h1 className={className}>hello {data}{d}</h1>
    <h1></h1>
    </>
 )
}

// Navbar.defaultProps={
//     e:"no-idea"
// }

Navbar.propTypes={
    data:PropTypes.string.isRequired,
    d:PropTypes.array.isRequired
}

export default Navbar