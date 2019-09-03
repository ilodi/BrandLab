import React from 'react';
//
const WeMake = (props) => (
 <div className="boxContext">
  <div>
  <img className="logoFooter" alt="queHacemos" src={props.icon} />
  </div>
  <div className="text">
    <h2>{props.title}</h2>
    <p>
      {props.text}
    </p>
  </div>
 </div>
);

///
export default WeMake;