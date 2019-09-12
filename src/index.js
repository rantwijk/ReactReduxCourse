import React from "react";
import ReactDOM from "react-dom";

// create react component
const App = function() {
  return <div>Hi there</div>;
};

// take component and show it
ReactDOM.render(<App />, document.querySelector("#root"));
