import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!!</h1>;
}

// render app in DOM v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
