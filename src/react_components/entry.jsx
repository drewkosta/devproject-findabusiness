// 3rd Party
import React from 'react';
import ReactDOM from 'react-dom';

// Local
import App from './App.jsx';

// See? React and JSX are here if you need it

const reactEntryContainerEl = document.createElement('div')

document.body.append(reactEntryContainerEl)

ReactDOM.render(<App />, reactEntryContainerEl)