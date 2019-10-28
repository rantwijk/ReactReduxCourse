import React from 'react';
import ReactDOM from 'react-dom';

// create react component
const App = function() {
  const buttonText = { text: 'Click me' };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
    </div>
  );
};

// take component and show it
ReactDOM.render(<App />, document.querySelector('#root'));
