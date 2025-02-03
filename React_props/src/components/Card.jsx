import React from "react";

const Card = (props) => {
    console.log(props)// object
    console.log(children)
  return (
    <div className="card">
      <img src={props.src} alt="" className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
        <div className="btn-container">
          <span>TopModel</span>
          <span>34.55km</span>
          <span>Petrol</span>
          <span>owner</span>
        </div>
        <p className="card-text">Emi:$18955</p>
        <p className="card-text">$9.65l</p>
        <p className="card-text">Free Test drive</p>
      </div>
    </div>
  );
};

export default Card;
