import React from 'react';

const Header = props => (
  <div>
    <h1>{props.data.name}</h1>
    <h3>{props.data.category}</h3>
    <h3>{props.data.address}</h3>
    <h3>{props.data.phone}</h3>
  <a href={props.data.website}>
    <h3>{props.data.website}</h3>
  </a>
  </div>
);

export default Header;