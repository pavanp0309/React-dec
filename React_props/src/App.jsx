import React from "react";
import Card from "./components/Card";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
  <>
    {/* <div>
      <Card
        src="./src/assets/car1.jpg" //string type
        title="BMW"
        km={54333} //number
        model={[2017, "petrol"]} //array
        isavailable={true} // boolean
        style={{ color: "red" }} //object
        onclick={function () {}} // function
        nodeEle={<h1>Hello</h1>} //node type
      />
      <Card src="./src/assets/car2.jpg" title="Maruthi">
        <h1>Hello</h1>
      </Card>
    </div> */}

    {/* product card container */}
    <div className="product-card-container">
     <ProductCard className='card border border-danger shadow'
     src="./src/assets/orange.jpg" 
     price={20}
     isAvailable={false}
     
     />
     <ProductCard className='card border p-3 mx-3 bg-warning border-success my-3 shadow'
     src='./src/assets/all.jpg'
     price={60}
     weights={["10kg","20kg"]}
     isAvailable={true}
     />
     <ProductCard className='card border border-warning shadow'
       weights={["10kg","20kg"]}
       isAvailable={true}/>
     <ProductCard className='card border bg-primary border-primary my-3 shadow'
       weights={["10kg","20kg"]}/>
       isAvailable={false}
    </div>
  </>
  );
};

export default App;
