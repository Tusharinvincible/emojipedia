import React from 'react';
import "./App.css";

function Emoji(props) {
  return <div>
      <dt>
      <span className="emoji" role="img" aria-label={props.name} >{props.emoji}</span>
    
      <h4>{props.name}</h4>
      </dt>
      <hr />
     <dd>{props.meaning}</dd>
     
      
  </div>;
}


export default Emoji;