import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'Click on me!';
}

// create react component
const App = function() {
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>
    </div>
  );
};

// take component and show it
ReactDOM.render(<App />, document.querySelector('#root'));
