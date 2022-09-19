import React from 'react';

function Card(props) {
  const isSpacing = props.spacing ? `card ${props.spacing}` : "card";

  return ( 
    <div className={isSpacing} style={props.style}>
      {props.children}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;