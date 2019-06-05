import React from "react";
import "./style.css";


function DreamCard(props) {
  return (

    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <nav className="navbar navbar-dark bg-dark"></nav>
      <div className="content">
        {/* <ul> */}
          {/* <li> */}
            {/* <strong>Name:</strong> {props.name} */}
          {/* </li> */}
          {/* <li> */}
            {/* <strong>Position:</strong> {props.position} */}
          {/* </li> */}
          {/* <li> */}
            {/* <strong>Number:</strong> {props.number} */}
          {/* </li> */}
        {/* </ul> */}
      </div>
      <span onClick={() => props.choosePlayer(props.id)} className="choose">
        
      </span>
    </div>
  );
}

export default DreamCard;
