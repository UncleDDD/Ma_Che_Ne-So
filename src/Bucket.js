import { Component } from "react";
import Card from "./Card";
import Button from "./Button";

class Bucket extends Component {
  render() {
    return (
      <div className="bucket">
        <h2>{this.props.title}</h2>
        <div className="cards">{this.props.children}</div>
        <Button />
      </div>
    );
  }
}
export default Bucket;
