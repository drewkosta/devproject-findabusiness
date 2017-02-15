import React from 'react';

const Photo = props => (
  <div>
    <img src={props.url} />
    <p>{props.tag}</p>
  </div>  
);

export default Photo;