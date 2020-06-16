import React, { Component } from "react";
import ColorPicker from "../index";
export default class TestColorPicker extends Component {
  state = {
    color: "#FFFFF",
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div style={{ width: "150px" }}>
        <ColorPicker color={this.state.color} onChange={this.onChange} />
      </div>
    );
  }
}
