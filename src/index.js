import React from 'react';
import ReactDOM from 'react-dom'

const API_KEY = 'AIzaSyBwYGFBUT4lKrurMIBLJYxcWR-9flhT4is';


//create a new component. Component should produce some HTML
const App = () => {
    return <div> HI!</div>;
}
//put the HTML in the DOM somehow
//creates a react element for the DOM to render, by wrapping it with JSX tags
ReactDOM.render(<App />, document.querySelector('.container'));

