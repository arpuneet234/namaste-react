import React from "react";
import ReactDOM from "react-dom/client";
const heading = (
  <div>
    <h1>heading element using JSX</h1>
    <h2>Another React Element</h2>
  </div>
);

const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <h1>Hello</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
