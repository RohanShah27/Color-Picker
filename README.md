# ReactJs Color Picker

A simple color picker component crafted for react apps.

![alt picker](https://github.com/RohanShah27/Color-Picker/blob/master/image/color-picker.png?raw=true)

## Usage

`Installation`

```
npm i --save <package_name>
```

This is a controlled `example`

```
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

```

An onChange function is required to set state of the parent component and a default color value can be passed.<br/>
<br/>
It takes the width of the `parent/container`

## Formats

Supports

```
RGB , HSL and HEX
```

## Keywords

color-picker react-color-picker color-selector
