import * as React from "react";
import { Component } from "react";
import { IHello } from "./hello.interface";

const btnStyle = {
  color: "#4CAF50",
  padding: "16px",
  fontSize: "20px"
};

export class Hello extends Component<any, IHello> {
  constructor(props:any) {
    super(props);
    this.state = { seconds: 0 };
  }

  change() {
    this.setState({
      seconds: this.state.seconds + 20
    });
  }

  render() {
    return (
      <div>
        <h1>Seconds: {this.state.seconds}</h1>
        <button onClick={() => this.change()} style={btnStyle}>
          Add 20s
        </button>
      </div>
    );
  }

  componentDidMount() {}
  componentWillUnmount() {}
}
