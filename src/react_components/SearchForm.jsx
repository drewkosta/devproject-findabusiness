import React from 'react';

const SearchForm = props => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>Business Name: <input id="name"></input></div>
        <div>Phone Number: <input id="phone"></input></div>
        <div>Zip Code: <input id="zip"></input></div>
        <button type="submit">submit</button>
      </form>
    )
};

export default SearchForm;