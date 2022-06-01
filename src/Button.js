import React from "react";
class Button extends React.Component {
  render() {
    return (
      <button className="add-card" onClick={() => console.log("Add Card")}>
        Add Card
      </button>
    );
  }
}
export default Button
